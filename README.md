# Maxposure Assignment

This is a simple REST API built using MEN Stack i.e. Node, Express, MongoDB(Mongoose) in the backend. This was a test assignment for an internship position at Maxposure Media Group.

## Installing Packages & Running Project

Follow these commands exactly to run this project.

```sh
npm install
npm start
```

## Home Route Respone

```sh
"success": true,
"message": "Welcome to MaxPosure Assignment",
"GeneralInfo": "Built using Node, Express, MongoDB(Atlas), Mongoose & Config",
"Routes": {
	"/a": "Ans to A part of the assignment",
	"/b": "Ans to B part of the assignment",
	"/reset": "Reset the database to the original state",
	"/user": "This is will return the whole User Collection",
	"/order": "This is will return the whole Order Collection"
}
```