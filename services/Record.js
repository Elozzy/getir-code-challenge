const mongoose = require("mongoose");

class Record {
  
  /**
   * @description get all records
   * @param {*} startDate
   * @param {*} endDate
   * @param {*} maxCount
   * @param {*} minCount
   */

  static async getRecords({ startDate, endDate, maxCount, minCount }) {
    const recordData = await mongoose.connection.db.collection("records");
    const projectRecord = {
      $project: {
        _id: false,
        key: true,
        createdAt: true,
        totalCount: {
          $sum: "$counts"
        }
      }
    };

    const matchRecord = {
      $match: {
        createdAt: {
          $gte: new Date(startDate),
          $lte: new Date(endDate)
        },
        totalCount: {
          $gte: minCount,
          $lte: maxCount
        }
      }
    };
    const resultRecord = await recordData
      .aggregate([projectRecord, matchRecord])
      .toArray();
    return resultRecord;
  }
}

module.exports = Record;
