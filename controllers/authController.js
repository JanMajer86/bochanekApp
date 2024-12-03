require("dotenv").config();

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

	res.status(200).json({ user });
};

module.exports = login;
