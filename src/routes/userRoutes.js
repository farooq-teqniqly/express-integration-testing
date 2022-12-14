const express = require("express");
const usersController = require("../controllers/usersController");
const router = express.Router();

router.route("/").get(usersController.getUsers);

module.exports = router;
