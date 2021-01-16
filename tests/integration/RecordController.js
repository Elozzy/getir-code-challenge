require("dotenv").config();
const chai = require("chai");
const chaiHttp = require("chai-http");
chai.use(chaiHttp);
const expect = chai.expect;
const server = require("../../app");
const mongoose = require("mongoose");
const connectDB = require("../../config/config");
const recordData = require("../data/recordData");

describe("Test for Record Controller", function () {
  this.beforeAll(async function () {
    this.timeout(0);
    await mongoose.connect(connectDB);
  });

  describe("Get Records Data", () => {
    it("should return records successfully", async () => {
      chai
        .request(server)
        .post("/api/v1/records")
        .send(recordData[0])
        .end((err, res) => {
          const {
            status,
            body: { code, message }
          } = res;
          expect(status).to.be.equal(200);
          expect(code).to.be.equal(0);
          expect(message).to.be.equal("Success");
        });
    });
    it("should return error if startDate is greater than endDate", async () => {
      chai
        .request(server)
        .post("/api/v1/records")
        .send(recordData[7])
        .end((err, res) => {
          const {
            status,
            body: { code, msg }
          } = res;
          expect(status).to.be.equal(400);
          expect(code).to.be.equal(1);
          expect(msg).to.be.equal(
            "startDate must be less than or equal to today. endDate must be greater than Start date"
          );
        });
    });

    it("should return error if minCount is greater than maxCount", async () => {
      chai
        .request(server)
        .post("/api/v1/records")
        .send(recordData[8])
        .end((err, res) => {
          const {
            status,
            body: { code, msg }
          } = res;
          expect(status).to.be.equal(400);
          expect(code).to.be.equal(1);
          expect(msg).to.be.equal("maxCount must be greater than minCount");
        });
    });

    it("should return an error if no payload is passed to the body", async () => {
      chai
        .request(server)
        .post("/api/v1/records")
        .send("")
        .end((err, res) => {
          const {
            status,
            body: { code, msg }
          } = res;
          expect(status).to.be.equal(400);
          expect(code).to.be.equal(1);
          expect(msg).to.be.equal(
            "startDate must be a valid date. endDate must be a valid date. minCount must be number. maxCount must be number"
          );
        });
    });
  });

  describe("should return error when on the wrong route", () => {
    it("should return 404", () => {
      chai
        .request(server)
        .get("/wrong-url")
        .end((err, res) => {
          const {
            status,
            body: { error }
          } = res;
          expect(status).to.be.equal(404);
          expect(error).to.be.equal("Not found.");
        });
    });
  });

  describe("Routes to the home page", () => {
    it("returns the home page successfully", () => {
      chai
        .request(server)
        .get("/")
        .end((err, res) => {
          const {
            body: { message }
          } = res;
          expect(message).to.be.equal("Welcome to Getir Backend Challenge");
        });
    });
  });
});
