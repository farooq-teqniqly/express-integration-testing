require("dotenv").config();

const db = require("../config/db");
const req = require("./utils/requestHelpers");

beforeAll(async () => {
  const connection = db.openConnection();
  const usersCollection = connection.collection("users");
  usersCollection.deleteMany();
});

afterAll(() => {
  db.closeConnection();
});

describe("User controller tests", () => {
  test("It returns an empty array when there are no users.", async () => {
    const res = await req.executeGet("/users");
    const users = res.body;

    expect(res.status).toBe(200);
    expect(users.length).toBe(0);
  });
});
