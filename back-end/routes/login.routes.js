const express = require('express');
const router = express.Router();
const UserDataController = require('../controllers/userdata.controller');
const userdatacontroller = new UserDataController();
const Userdata = require('../models/userdata');

// router.get('/testing', (req, res) => {
// 	return res.send('Calling login route');
// });

// router.get('/login', async (req, res) => {
// 	res.send(await Userdata.findAll());
// });

router.get('/login/userdata', userdatacontroller.signin);

module.exports = router;
