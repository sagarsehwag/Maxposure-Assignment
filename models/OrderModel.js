const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema({
	userId: {
		type: mongoose.Schema.Types.ObjectId,
		required: true,
		ref: "UserModel"
	},
	subtotal: {
		type: Number,
		required: true,
	},
	date: {
		type: Date,
		default: Date.now
	}
});

module.exports = mongoose.model("Order", OrderSchema);
