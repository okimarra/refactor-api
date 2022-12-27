const Ajv = require('ajv');
const addFormats = require('ajv-formats');

const ajv = new Ajv({ coerceTypes: true, allErrors: true });
addFormats(ajv);

module.exports = {
  compileSchema: (schema) => {
    const validate = ajv.compile(schema);
    return validate;
  },
};
