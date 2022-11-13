const request = require("supertest");
const server = require("../../startup");

const executeGet = async (url) => {
  return await request(server).get(url);
};

module.exports = {
  executeGet,
};
