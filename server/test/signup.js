import chai from "chai";
import chaiHttp from "chai-http";

import app from "../../index";

chai.use(chaiHttp);

describe("/auth/signup", () => {
  it("it should signup a user with right credentials", (done) => {
    let user = {
      username: "tester",
      password: "test",
      passwordVerification: "test"
    };
    chai.request(app)
      .post("/api/auth/signup")
      .send(user)
      .end((err, res) => {
        res.status.should.equal(200);
        res.body.should.be.a.string;
        done();
      });
  });

  it("it should not signup a user with two different passwords", (done) => {
    let user = {
      username: "tester",
      password: "test",
      passwordVerification: "tset"
    };
    chai.request(app)
      .post("/api/auth/signup")
      .send(user)
      .end((err, res) => {
        res.status.should.equal(422);
        done();
      });
  });
});