const Userdata = require('../models/userdata');

module.exports = {
	signin: async (username, pwd) => {
		const result = {
			status: null,
			message: null,
			data: null,
		};
		const userdata = await Userdata.findOne({
			where: { username: '' },
		});

		if (!userdata) {
			result.status = 404;
			result.message = `No account found, register a new account`;
			return result;
		}

		if (!userdata.username) {
			result.status = 400;
			result.message = `Incorrect username, try again!`;
			return result;
		}

		if (!userdata.pwd) {
			result.status = 400;
			result.message = `Incorrect password, try again!`;
			return result;
		}

		userdata.username = username;
		userdata.pwd = pwd;
		await userdata.save();

		result.status = 200;
		result.message = 'Login successful';
		result.data = userdata;

		return result;
	},

	register: async (username, pwd, email, phone) => {
		const result = {
			status: null,
			message: null,
			data: null,
		};

		const userdata = await Userdata.findOne({ where: { username: '' } });

		if (userdata.username) {
			result.status = 400;
			result.message = `Username ${username} has already been used.`;
			return result;
		}

		if (userdata.email) {
			result.status = 400;
			result.message = `Email ${email} is already  registered.`;
			return result;
		}

		if (userdata.phone) {
			result.status = 400;
			result.message = `Phone number ${phone} is registered to another account. Use a new number.`;
			return result;
		}

		userdata.username = username;
		userdata.pwd = pwd;
		userdata.email = email;
		userdata.phone = phone;
		await userdata.save();

		result.status = 200;
		result.message = 'New account register successful';
		result.data = userdata;

		return result;
	},
};
