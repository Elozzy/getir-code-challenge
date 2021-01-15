const Record = require("../services/Record");
const catchAsyncError = require("../middleware/catchAsyncError");
const { recordValidation } = require("../validation/RecordValidation");
const recordResponseFormat = require("../middleware/format");

/**
 * @route POST v1/api/records
 * @description get all records
 * @access public
 */
exports.getRecordDetails = catchAsyncError(async (req, res, next) => {
  try {
    const validatedData = await recordValidation(req.body);
    const newRecords = await Record.getRecords(validatedData);
    return recordResponseFormat({
      res,
      statusCode: 200,
      data: newRecords
    });
  } catch (error) {
    const { message } = error;
    return recordResponseFormat({ res, statusCode: 500, message });
  }
});
