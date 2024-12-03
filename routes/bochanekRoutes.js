const express = require("express");
const router = express.Router();

const {
	getAllBochaneks,
	createBochanek,
	deleteBochanek,
} = require("../controllers/bochanekController");

router.route("/").get(getAllBochaneks).post(createBochanek);
router.route("/:id").delete(deleteBochanek);

module.exports = router;
