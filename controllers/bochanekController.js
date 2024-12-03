const Bochanek = require("../models/Bochanek");

const getAllBochaneks = async (req, res) => {
	res.status(200).send("all bochaneks");
};

const createBochanek = async (req, res) => {
	req.body.createdBy = req.user.name;
	const bochanek = await Bochanek.create(req.body);
	res.status(201).json({ bochanek });
};

module.exports = { getAllBochaneks, createBochanek };
