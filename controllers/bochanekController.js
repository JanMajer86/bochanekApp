const Bochanek = require("../models/Bochanek");

const getAllBochaneks = async (req, res) => {
	const bochaneks = await Bochanek.find({}).sort("-createdAt");
	res.status(200).json({ bochaneks });
};

const createBochanek = async (req, res) => {
	req.body.createdBy = req.user.name;
	const bochanek = await Bochanek.create(req.body);
	res.status(201).json({ bochanek });
};

const deleteBochanek = async (req, res) => {
	const userName = req.user.name;
	const bochanekId = req.params.id;
	console.log(userName, bochanekId);

	const bochanek = await Bochanek.findOneAndDelete({
		_id: bochanekId,
		createdBy: userName,
	});
	if (!bochanek) {
		throw new Error();
	}
	res.status(200).send();
};

module.exports = { getAllBochaneks, createBochanek, deleteBochanek };
