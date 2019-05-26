// A Part of MaxPosure Assignment
const orderSummaryQuery = [
	{
		$group: {
			_id: "$userId",
			averageBillValue: { $avg: "$subtotal" },
			numberOfOrders: { $sum: 1 }
		}
	},
	{ $sort: { _id: 1 } },
	{
		$lookup: {
			from: "users",
			localField: "_id",
			foreignField: "_id",
			as: "userObject"
		}
	},
	{
		$project: {
			_id: 0,
			userId: "$_id",
			name: { $arrayElemAt: ["$userObject.name", 0] },
			averageBillValue: { $toInt: "$averageBillValue" },
			numberOfOrders: 1
		}
	}
];

// B Part of MaxPosure Assignment
const syncUserCollectionQuery = [
	{
		$group: {
			_id: "$userId",
			numberOfOrders: { $sum: 1 }
		}
	},
	{
		$lookup: {
			from: "users",
			localField: "_id",
			foreignField: "_id",
			as: "userObject"
		}
	},
	{
		$project: {
			name: { $arrayElemAt: ["$userObject.name", 0] },
			date: { $arrayElemAt: ["$userObject.date", 0] },
			numberOfOrders: 1
		}
	},
	{
		$out: "users"
	}
];

module.exports = { orderSummaryQuery, syncUserCollectionQuery };
