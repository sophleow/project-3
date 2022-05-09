const userdataService = require('../services/userdata.service');

class UserDataController {
	async signin(req, res) {
		//login
		const { username, pwd } = req.body;

		const { status, data, message } = await userdataService.signin(
			username,
			pwd
		);

		res.status(status);
		res.json({ message, data });
	}

	async register(req, res) {
		//register new account
		const { username, pwd, email, phone } = req.body;

		if (typeof phone !== 'number') {
			//check if mobile no. is in integers
			res.status(400);
			return res.send('Phone number need to be in numbers.');
		}

		const { status, data, message } = await userdataService.register(
			username,
			pwd,
			email,
			phone
		);

		res.status(status);
		res.json({ message, data });
	}
}

module.exports = UserDataController;
