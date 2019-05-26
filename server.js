// Package Imports
const express = require("express");
const compression = require("compression");
const mongoose = require("mongoose");

// Custom Imports
const connectDB = require("./config/db");
const UserModel = require("./models/UserModel");
const OrderModel = require("./models/OrderModel");

const {
	defaultUserCollection,
	defaultOrderCollection
} = require("./config/defaultDatabase");
const {
	orderSummaryQuery,
	syncUserCollectionQuery
} = require("./config/aggregationQueries");

const app = express();

// Connect Database
connectDB();

// Bodyparser Middleware
app.use(express.json({ extended: false }));

// ROUTES
app.get("/", (req, res, next) => {
	res.json({
		success: true,
		message: "Welcome to MaxPosure Assignment",
		GeneralInfo: "Built using Node, Express, MongoDB(Atlas), Mongoose & Config",
		Routes: {
			"/a": "Ans to A part of the assignment",
			"/b": "Ans to B part of the assignment",
			"/reset": "Reset the database to the original state"
		}
	});
});

app.get("/a", async (req, res, next) => {
	try {
		const orderSummary = await OrderModel.aggregate(orderSummaryQuery);
		res.json({
			success: true,
			message: "Order Summary Route via Aggregation Framework",
			responeData: orderSummary
		});
	} catch (error) {
		res.locals.statusCode = 500;
		res.locals.message = "Server Error";
		next(error);
	}
});

app.get("/b", async (req, res, next) => {
	try {
		await OrderModel.aggregate(syncUserCollectionQuery);
		const UserCollection = await UserModel.find();

		res.json({
			success: true,
			message: "Successfully Synchronised User Collection",
			responeData: UserCollection
		});
	} catch (error) {
		res.locals.statusCode = 500;
		res.locals.message = "Server Error";
		next(error);
	}
});

// Reset Database
app.get("/reset", async (req, res, next) => {
	try {
		// Clearing up the UserModel collection & Adding users again
		await UserModel.deleteMany();
		await UserModel.insertMany(defaultUserCollection);

		// Clearing up the OrderModel collection & Adding orders again
		await OrderModel.deleteMany();
		await OrderModel.insertMany(defaultOrderCollection);

		res.json({
			success: true,
			message: "Reset Successfull"
		});
	} catch (error) {
		res.locals.statusCode = 500;
		res.locals.message = "Server Error";
		next(error);
	}
});

// Error Handler
app.use(async (err, req, res, next) => {
	console.log(err);
	res.status(res.locals.statusCode).json({
		success: false,
		message: res.locals.message
	});
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
	console.log(`Server Started on Port ${PORT}`);
});
