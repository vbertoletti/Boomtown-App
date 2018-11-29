const strs = require('stringstream');

function tagsQueryString(tags, itemid, result) {
  const length = tags.length;
  return length === 0
    ? `${result};`
    : tags.shift() &&
        tagsQueryString(
          tags,
          itemid,
          `${result}($${tags.length + 1}, ${itemid})${length === 1 ? '' : ','}`
        );
}

module.exports = postgres => {
  return {
    async createUser({ email, fullname, bio, password }) {
      const newUserInsert = {
        text:
          'INSERT INTO users (email, fullname, bio, password) VALUES($1,$2,$3,$4) RETURNING *',
        values: [email, fullname, bio, password]
      };
      try {
        const user = await postgres.query(newUserInsert);
        return user.rows[0];
      } catch (e) {
        switch (true) {
          case /users_fullname_key/.test(e.message):
            throw 'An account with this username already exists.';
          case /users_email_key/.test(e.message):
            throw 'An account with this email already exists.';
          default:
            throw 'There was a problem creating your account.';
        }
      }
    },
    async getUserAndPasswordForVerification(email) {
      const findUserQuery = {
        text: 'SELECT * FROM users WHERE email=$1',
        values: [email]
      };
      try {
        const user = await postgres.query(findUserQuery);
        if (!user) throw 'User was not found.';
        return user.rows[0];
      } catch (e) {
        throw 'User was not found.';
      }
    },
    async getUserById(id) {
      const findUserQuery = {
        text: `SELECT id, email, fullname, bio FROM users WHERE users.id = $1`,
        values: [id]
      };
      try {
        const user = await postgres.query(findUserQuery);
        if (!user) throw 'User was not found.';
        return user.rows[0];
      } catch (e) {
        throw 'User was not found.';
      }
    },

    async getItems(filter) {
      const items = await postgres.query({
        text: `SELECT *
        FROM items          
        WHERE ownerid <> $1 AND borrowerid <> $1 OR borrowerid IS NULL`,
        values: filter ? [filter] : []
      });
      try {
        if (!items) throw 'Item was not found.';
        return items.rows;
      } catch (e) {
        throw 'Items were not found.';
      }
    },

    async getItemsForUser(id) {
      const items = await postgres.query({
        text: `SELECT *
        FROM items WHERE ownerid = $1`,
        values: [id]
      });
      try {
        if (!items) throw 'User has no items.';
        return items.rows;
      } catch (e) {
        throw 'No items for this user.';
      }
    },

    async getBorrowedItemsForUser(id) {
      const items = await postgres.query({
        text: `SELECT *
        FROM items WHERE borrowerid = $1 `,
        values: [id]
      });
      try {
        if (!items) throw 'No borrowed items for this user.';
        return items.rows;
      } catch (e) {
        throw 'No borrowed items for this user.';
      }
    },

    async getTags() {
      try {
        const tags = await postgres.query({
          text: `SELECT * FROM tags`
        });
        if (!tags) throw 'Tags not found.';
        return tags.rows;
      } catch (e) {
        throw 'Tags not found.';
      }
    },

    async getTagsForItem(id) {
      const tagsQuery = {
        text: `SELECT tags.id, tags.title FROM itemtags INNER JOIN tags ON itemtags.tagsid = tags.id WHERE itemtags.itemid = $1;`,
        values: [id]
      };
      try {
        const tags = await postgres.query(tagsQuery);
        if (!tags) throw 'Tags for item not found.';
        return tags.rows;
      } catch (e) {
        throw 'Tags for item not found.';
      }
    },

    async saveNewItem({ item, image, user }) {
      return new Promise((resolve, reject) => {
        postgres.connect((err, client, done) => {
          try {
            client.query('BEGIN', async err => {
              const imageStream = image.stream.pipe(strs('base64'));

              let base64Str = 'data:image/*;base64, ';
              imageStream.on('data', data => {
                base64Str += data;
              });

              imageStream.on('end', async () => {
                // Image has been converted, begin saving things
                const { title, description, tags } = item;

                // Generate new Item query
                const newItemQuery = {
                  text: `INSERT INTO items (title, description, ownerid) VALUES( $1, $2, $3 )RETURNING *`,
                  values: [title, description, user.id]
                };

                // Insert new Item
                const newItem = await client.query(newItemQuery);
                const itemId = newItem.rows[0].id;

                const imageUploadQuery = {
                  text:
                    'INSERT INTO uploads (itemid, filename, mimetype, encoding, data) VALUES ($1, $2, $3, $4, $5) RETURNING *',
                  values: [
                    itemId,
                    image.filename,
                    image.mimetype,
                    'base64',
                    base64Str
                  ]
                };

                // Upload image
                await client.query(imageUploadQuery);

                const tagsQuery = {
                  text: `INSERT INTO itemtags (tagsid, itemid) VALUES ${tagsQueryString(
                    [...tags],
                    itemId,
                    ''
                  )}`,
                  values: tags.map(tag => tag.id)
                };

                await client.query(tagsQuery);

                // Commit the entire transaction!
                client.query('COMMIT', err => {
                  if (err) {
                    throw err;
                  }
                  done();
                  resolve(newItem.rows[0]);
                });
              });
            });
          } catch (e) {
            client.query('ROLLBACK', err => {
              if (err) {
                throw err;
              }
              done();
            });
            switch (true) {
              case /uploads_itemid_key/.test(e.message):
                throw 'This item already has an image.';
              default:
                throw e;
            }
          }
        });
      });
    }
  };
};
