const User = require("../models/user.model");
const bcrypt = require("bcrypt");
const hash = require("bcrypt");
const jwt = require("jsonwebtoken");

module.exports = {
	signin: async (username, password) => {
		const result = {
			status: null,
			message: null,
			data: null,
		};
		const userdata = await User.findOne({
			where: { username: "" },
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

		if (!userdata.password) {
			result.status = 400;
			result.message = `Incorrect password, try again!`;
			return result;
		}

		userdata.username = username;
		userdata.password = password;
		await userdata.save();

		result.status = 200;
		result.message = "Login successful";
		result.data = userdata;

		return result;
	},

	register: async (email, password) => {
		try {
			const result = {
				status: null,
				message: null,
				data: null,
			};

			let user = await User.findOne({ where: { email: email } });

			if (user) {
				result.message = `Email '${email}' already registered. Please login`;
				result.status = 409;
				return result;
			}

			const hash = await bcrypt.hash(password, 10);
			console.log(hash);
			user = await User.create({
				email: email,
				password: hash,
			});

			const token = jwt.sign(
				{
					user_id: user._id,
					email,
				},
				process.env.TOKEN_KEY,
				{ expiresIn: "2h" }
			);
			user.token = token;

			result.status = 200;
			result.message = "New account register successful";
			result.data = user;

			return result;
		} catch (err) {
			console.log("user create error caught", err);
		}
	},
};
