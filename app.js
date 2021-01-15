// if (process.env.NODE_ENV !== "production") {
require("dotenv").config();
// }
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const logger = require("morgan");
const app = express();
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./getirDoc.json");
const index = require("./routes/index");

const mongoose = require("./config/config");

app.use(cors());

const PORT = process.env.PORT || 4600;

app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// api documentation
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use("/api/v1", index);

app.get("/", (req, res) =>
  res.status(200).json({
    message: "Welcome to Getir Backend Challenge"
  })
);

app.all("*", (req, res) =>
  res.status(404).json({
    error: "Not found."
  })
);

app.listen(PORT, () => console.log(`listening on port: ${PORT}`));

module.exports = app
