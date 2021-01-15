const recordResponseFormat = require("../middleware/format");

const recordValidateField = (schema) => {
 return (req, res, next) => {
    const { error } = schema.validate(req.body);
    if (error) {
      const { details } = error;
      const message = details.map((detail) => detail.message).join(",");
      return recordResponseFormat({ res, statusCode: 400, message });
    }
    next();
  };
};

module.exports = recordValidateField;
