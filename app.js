require("dotenv").config();
require("express-async-errors");
// express
const express = require("express");
const app = express();

// database

const connectDB = require("./db/connect");

const authenticate = require("./middleware/authentication");

// routers
const authRouter = require("./routes/authRoutes");
const bochanekRouter = require("./routes/bochanekRoutes");

// serve static files & parse requests
app.use(express.static("./public"));
app.use(express.json());

app.use("/api/v1/auth", authRouter);
app.use("/api/v1/bochanek", authenticate, bochanekRouter);

const port = process.env.PORT || 5000;

const start = async () => {
	try {
		await connectDB(process.env.MONGO_URI);
		app.listen(port, () => {
			console.log(`server is listening on port ${port}`);
		});
	} catch (error) {
		console.log(error);
	}
};

start();
