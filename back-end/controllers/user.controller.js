const userdataService = require("../services/user.service");

class UserDataController {
	async signin(req, res) {
		//login
		const { username, password } = req.body;

		const { status, data, message } = await userdataService.signin(username, password);

		res.status(status);
		res.json({ message, data });
	}

	async register(req, res) {
		const { email, password } = req.body;

		if (!(email && password && email.trim().length > 0 && password.trim().length > 0)) {
			return res.status(400).json({ message: "Email and password required" });
		}
		try {
			const result = await userdataService.register(email.trim().toLowerCase(), password.trim());
			res.status(result.status);
			return res.json({ data: result.data, message: result.message });
		} catch (err) {
			console.log("register controller error caught", err);
			return res.status(400).json({ message: err });
		}
	}
}

module.exports = UserDataController;
