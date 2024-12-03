const jwt = require("jsonwebtoken");

const auth = async (req, res, next) => {
	// check header
	const authHeader = req.headers.authorization;
	if (!authHeader || !authHeader.startsWith("Bearer ")) {
		throw new Error();
	}

	const token = authHeader.split(" ")[1];
	try {
		const payload = jwt.verify(token, process.env.JWT_SECRET);
		req.user = { name: payload.user };
		next();
	} catch (error) {
		throw new Error();
	}
};

module.exports = auth;
