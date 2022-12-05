let expect = require("chai").expect;
let request = require("request");
//this test checks that my app.get route to the api functions correctly

describe("Status", function () {
  describe("get", function () {
    it("status", function (done) {
      request(
        "http://localhost:4000/api/users",
        function (error, response, body) {
          expect(response.statusCode).to.equal(200);
          done();
        }
      );
    });
  });
});
