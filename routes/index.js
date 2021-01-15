// if (process.env.NODE_ENV !== "production") {
require("dotenv").config();
// }
const express = require("express");
const router = express.Router();
const {getRecordDetails} = require("../controller/RecordController");


router.post("/records", getRecordDetails)

module.exports = router;
