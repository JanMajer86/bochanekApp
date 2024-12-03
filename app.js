require("express-async-errors");

const express = require("express");
const app = express();

// routers
const authRouter = require("./routes/authRoutes");

// serve static files & parse requests
app.use(express.static("./public"));
app.use(express.json());

app.use("/api/v1/auth", authRouter);

app.listen(5000, () => {
	console.log("server listening on port 5000");
});
