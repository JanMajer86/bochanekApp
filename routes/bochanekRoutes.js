const express = require("express");
const router = express.Router();

const {
	getAllBochaneks,
	createBochanek,
} = require("../controllers/bochanekController");

router.route("/").get(getAllBochaneks).post(createBochanek);

module.exports = router;
