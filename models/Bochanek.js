const mongoose = require("mongoose");

const BochanekSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: [true, "Bochánek musí mít jméno"],
			maxlength: 60,
		},
		gender: {
			type: String,
			enum: ["male", "female"],
			required: [true, "Bochánek musí mít gender"],
		},
		status: {
			type: String,
			enum: ["waiting", "approved", "unapproved"],
			default: "waiting",
		},
		createdBy: {
			type: String,
			required: [true, "Bochánka musí přidat uživatel"],
		},
	},
	{ timestamps: true }
);

module.exports = mongoose.model("Bochanek", BochanekSchema);
