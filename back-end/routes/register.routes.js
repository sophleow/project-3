const express = require('express');
const router = express.Router();
const UserDataController = require('../controllers/userdata.controller');
const userdatacontroller = new UserDataController();

router.post('/register', userdatacontroller.register);

module.exports = router;