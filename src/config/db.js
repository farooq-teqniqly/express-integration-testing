const mongoose = require("mongoose");
const connectionString = process.env.DB_CONNECTION_STRING;

const openConnection = () => {
  mongoose.connect(connectionString);
  return mongoose.connection;
};

const closeConnection = () => {
  return mongoose.disconnect();
};

module.exports = {
  openConnection,
  closeConnection,
  connectionString,
};
