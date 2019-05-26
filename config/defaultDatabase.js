const defaultUserCollection = [
	{ _id: "5cea088c6cd78dfea73836cc", name: "Ankita" },
	{ _id: "5cea088c6cd78dfea73836cb", name: "Ramesh" },
	{ _id: "5cea088c6cd78dfea73836ca", name: "Rahul" }
];

const defaultOrderCollection = [
	{ userId: "5cea088c6cd78dfea73836ca", subtotal: 500 },
	{ userId: "5cea088c6cd78dfea73836ca", subtotal: 150 },
	{ userId: "5cea088c6cd78dfea73836ca", subtotal: 700 },
	{ userId: "5cea088c6cd78dfea73836ca", subtotal: 1200 },
	{ userId: "5cea088c6cd78dfea73836ca", subtotal: 700 },
	{ userId: "5cea088c6cd78dfea73836cb", subtotal: 400 },
	{ userId: "5cea088c6cd78dfea73836cb", subtotal: 1600 },
	{ userId: "5cea088c6cd78dfea73836cb", subtotal: 900 },
	{ userId: "5cea088c6cd78dfea73836cc", subtotal: 200 },
	{ userId: "5cea088c6cd78dfea73836cc", subtotal: 1500 }
];

module.exports = {
	defaultUserCollection,
	defaultOrderCollection
};
