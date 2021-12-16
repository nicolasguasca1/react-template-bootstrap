import request from "supertest";
import app from "../../app";
const OPERATIONS = {
  COST: "Costo"
};

const TEST = {
  COST: {
    origin: "hospital",
    destination: "alcaldia",
    fee: 15000,
    result: 3000000
  }
};

const ACCEPT_JSON = ["Accept", "application/json"];

describe("/api/calc", () => {
  const controller = "api/calc";
  describe("/cost", () => {
    const resource = "cost";
    const endpoint = `/${controller}/${resource}`;
    test("should return status code 200", async () => {
      const response = await request(app)
        .post(endpoint)
        .set(ACCEPT_JSON)
        .send(TEST.COST);
      expect(response.status).toBe(200);
    });
  });
});
