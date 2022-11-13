const User = require("../models/User");
const asyncHandler = require("express-async-handler");

const getUsers = asyncHandler(async (req, res) => {
  const users = await User.find().lean();
  return res.status(200).json(users);
});

module.exports = {
  getUsers,
};
