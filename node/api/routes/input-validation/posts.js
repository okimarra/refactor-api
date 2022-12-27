const utils = require('./utils');

const schema = {
  type: 'object',
  required: ['title', 'body'],
  properties: {
    title: { type: 'string' },
    body: { type: 'string' },
  },
};

const schemaValidator = utils.compileSchema(schema);

module.exports = (data) => {
  const result = {};
  result.isValid = schemaValidator(data);
  result.errors = schemaValidator.errors;
  const { isValid, errors } = result;
  return { isValid: isValid, errors };
};
