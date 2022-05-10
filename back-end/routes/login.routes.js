const express = require("express");
const router = express.Router();
const UserDataController = require("../controllers/user.controller");
const userdatacontroller = new UserDataController();
const User = require("../models/user.model");

// router.get('/testing', (req, res) => {
// 	return res.send('Calling login route');
// });

// router.get('/login', async (req, res) => {
// 	res.send(await Userdata.findAll());
// });

router.get("/login/userdata", userdatacontroller.signin);

module.exports = router;
