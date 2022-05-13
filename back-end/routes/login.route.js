const express = require("express");
const router = express.Router();
const UserController = require("../controllers/user.controller");
const usercontroller = new UserController();

router.post("/", usercontroller.login);

module.exports = router;
