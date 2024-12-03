require("express-async-errors");

const express = require("express");
const app = express();

const authenticate = require("./middleware/authentication");

// routers
const authRouter = require("./routes/authRoutes");
const bochanekRouter = require("./routes/bochanekRoutes");

// serve static files & parse requests
app.use(express.static("./public"));
app.use(express.json());

app.use("/api/v1/auth", authRouter);
app.use("/api/v1/bochanek", authenticate, bochanekRouter);

app.listen(5000, () => {
	console.log("server listening on port 5000");
});
