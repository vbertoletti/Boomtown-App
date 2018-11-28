const { ApolloError } = require('apollo-server-express');
const jwt = require("jsonwebtoken")
const authMutations = require("./auth")
const { UploadScalar, DateScalar } = require('../custom-types');

module.exports = (app) => {
  return {
    // Upload: UploadScalar,
    // Date: DateScalar,

    Query: {
      viewer(parent, args, context, info) {
        if (context.token) {
          return jwt.decode(context.token, app.get('JWT_SECRET'));
          
        }
        return null;
      },
      async user(parent, { id }, { pgResource }, info) {
        try {
          const user = await pgResource.getUserById(id);
          return user;
        } catch (e) {
          throw new ApolloError(e);
        }
      },
      async items(parent, {filter}, {pgResource}, info) {
        try {
          const items = await pgResource.getItems(filter);
          return items
        } catch (e) {
          throw new ApolloError(e);
        }       
      },
      async tags(parent, {title}, {pgResource}, info) {
        try {
          const tags = await pgResource.getTags(title);
          return tags
        } catch (e) {
          throw new ApolloError(e);
        }        
      }
    },

    User: {
      async items(user, _, { pgResource }) {
        try {
          const itemsUser = await pgResource.getItemsForUser(user.id);
          return itemsUser
        } catch (e) {
          throw new ApolloError(e)
        }
      },
      
      async borrowed(user, _, { pgResource }) {
        try {
          const borrowedUser = await pgResource.getBorrowedItemsForUser(user.id);
          return borrowedUser
        } catch (e) {
          throw new ApolloError(e)
        }
      }
    },

    Item: {
      async itemowner(user, _, { pgResource }) {
        try {
          const itemOwner = await pgResource.getUserById(user.ownerid);
          return itemOwner
        } catch (e) {
          throw new ApolloError(e)
        }
    },

      async tags(user, _, { pgResource }) {
        try {
          const tagsItem = await pgResource.getTagsForItem(user.id)
          return tagsItem
        } catch (e) {
          throw new ApolloError(e)
        }
      },

      async borrower(user, _, { pgResource }) {
        try {
          const borrowerItem = await pgResource.getUserById(user.borrowerid);
          return borrowerItem
        } catch (e) {
          throw new ApolloError(e)
        }
      },
      // async imageurl({ imageurl, imageid, mimetype, data }) {
      //   if (imageurl) return imageurl
      //   if (imageid) {
      //     return `data:${mimetype};base64, ${data}`
      //   }
      // }
    },

    Mutation: {
      ...authMutations(app),

      async addItem(parent, args, context, info) {
        image = await args.image;
        const user = await jwt.decode(context.token, app.get('JWT_SECRET'));
        const newItem = await context.pgResource.saveNewItem({
          item: args.item,
          image,
          user
        });
        return newItem;
      },
    }
  };
};
