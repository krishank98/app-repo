const request = require("supertest");
const app = require("../src/server");

describe("Login API", () => {
  it("should fail without credentials", async () => {
    const res = await request(app).post("/login");
    expect(res.statusCode).toBe(400);
  });

  it("should login with valid credentials", async () => {
    const res = await request(app)
      .post("/login")
      .send({ username: "user", password: "secret123" });
    expect(res.statusCode).toBe(200);
  });
});
