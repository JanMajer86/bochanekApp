const login = async (req, res) => {
	const { user, password } = req.body;
	console.log(`username: ${user}, password: ${password}`);
};

module.exports = login;
