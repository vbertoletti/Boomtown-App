const { GraphQLScalarType } = require('graphql');

const { Kind } = require('graphql/language');

const UploadScalar = new GraphQLScalarType({
  name: 'Upload',
  description:
    'The `Upload` scalar type represents a file upload promise that resolves ' +
    'an object containing `stream`, `filename`, `mimetype` and `encoding`.',
  parseValue: value => value,
  parseLiteral() {
    throw new Error('Upload scalar literal unsupported');
  },
  serialize() {
    throw new Error('Upload scalar serialization unsupported');
  }
});

const DateScalar = undefined;

module.exports = {
  UploadScalar,
  DateScalar
};
