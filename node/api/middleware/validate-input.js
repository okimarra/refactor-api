const buildErrorsFrom = (validationResult) => {
  const result = [];
  const errorsFromAjv = validationResult.errors?.map(
    (error) => ({ message: `${error.keyword}: ${error.message}`, field: error.instancePath.replace('/', '') }),
  ) ?? [];
  result.push(...errorsFromAjv);

  return result;
};

module.exports = (validationFunction, getDataFunction = (req) => req.body) => ((req, res, next) => {
  const data = getDataFunction(req);
  const validationResult = validationFunction(data);
  if (validationResult.isValid) {
    next();
  } else {
    const errors = buildErrorsFrom(validationResult);
    next('Validation errors in your request', errors);
  }
});
