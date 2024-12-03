const express = require("express");
const app = express();

// serve static files & parse requests
app.use(express.static("./public"));
app.use(express.json());

app.use("/", (req, res) => {
	res.send("home");
});

app.listen(5000, () => {
	console.log("server listening on port 5000");
});
