const login = async (req, res) => {
	const { user, password } = req.body;
	console.log(user, password);
};

module.exports = login;
