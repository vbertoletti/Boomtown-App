const { ApolloServer } = require('apollo-server-express');
const { apolloUploadExpress } = require('apollo-upload-server');
const { makeExecutableSchema } = require('graphql-tools');

const typeDefs = require('../api/schema');
let resolvers = require('../api/resolvers');

module.exports = ({ app, pgResource }) => {
  resolvers = resolvers(app);
  const schema = makeExecutableSchema({
    typeDefs,
    resolvers,
  });

  const apolloServer = new ApolloServer({
    playground: {
      settings: {
        'editor.theme': 'light',
        'editor.cursorShape': 'line',
        'request.credentials': 'include'
      }
    },
    context: ({ req }) => {
      const tokenName = app.get("JWT_COOKIE_NAME")
      const token = req ? req.cookies[tokenName] : undefined
      return {
        req,
        token,
        pgResource
      };
    },
    schema
  });

  apolloServer.applyMiddleware({
    app,
    uploads: true,
    cors: app.get('CORS_CONFIG'),
    uploads: apolloUploadExpress({
      maxFileSize: 10000000 // 10mb
    })
  });
};
