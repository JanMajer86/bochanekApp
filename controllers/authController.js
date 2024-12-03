// require("dotenv").config();
// require("dotenv");
const jwt = require("jsonwebtoken");

const login = async (req, res) => {
	const { user, password } = req.body;
	console.log(`username: ${user}, password: ${password}`);
	if (!user || !password) {
		throw new Error();
	}
	// compare password
	if (password !== process.env.PASSWORD) {
		console.log("wrong password");
		throw new Error();
	} else console.log("password correct");

	// create JWT
	const token = (function () {
		return jwt.sign({ user }, process.env.JWT_SECRET, {
			expiresIn: process.env.JWT_LIFETIME,
		});
	})();

	res.status(200).json({ user, token });
};

module.exports = login;
