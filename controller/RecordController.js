const Record = require("../services/Record");
const catchAsyncError = require("../middleware/catchAsyncError");
const { recordValidation } = require("../validation/RecordValidation");
const recordResponseFormat = require("../utils/format");

/**
 * @route POST v1/api/records
 * @description get all records
 * @access public
 */
exports.getRecordDetails = catchAsyncError(async (req, res, next) => {
  try {
    const { startDate, endDate, minCount, maxCount } = req.body;
    const validatedData = await recordValidation({
      startDate,
      endDate,
      minCount,
      maxCount
    });
    const newRecords = await Record.getRecords(validatedData);
    return recordResponseFormat({
      res,
      statusCode: 200,
      data: newRecords
    });
  } catch (error) {
    const { message } = error;
    return recordResponseFormat({ res, statusCode: 400, message });
  }
});
