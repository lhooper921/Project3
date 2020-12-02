const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const cors = require('cors');
const passport = require('passport');
const passportlocal = require('passport-local').Strategy;
const cookieParser = require('cookie-parser');
const bcrypt = require('bcryptjs');
const session = require('express-session');
const bodyParser = require('body-parser');
const User = require('./models/user');
// const { urlencoded } = require("body-parser");

// Set up express
const app = express();

// Set up Mongoose
mongoose.connect(
	process.env.MONGODB_URI || 'mongodb://localhost/Company',
	{
		useNewUrlParser: true,
		useUnifiedTopology: true,
		useCreateIndex: true,
		useFindAndModify: false
	},
	() => {
		console.log('Mongoose is connected');
	}
);

//Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
	cors({
		origin: 'http://localhost:3000', //<--- location of the react app
		credentials: true
	})
);

app.use(
	session({
		secret: 'secretecode',
		resave: true,
		saveUninitialized: true
	})
);

app.use(cookieParser('secretecode'));

// Routes
app.post('/login', (req, res) => {
	console.log(req.body);
});

app.post('/register', (req, res) => {
	console.log(req.body);

	const newUser = new User({
		username: req.body.username,
		password: req.body.password
	});
	newUser.save();

	// User.findOne(req.body.username),
	// 	async (err, doc) => {
	// 		if (err) throw err;
	// 		if (doc) res.send('User Already Exists');
	// 		if (!doc) {
	// 			const newUser = new User({
	// 				username: req.body.username,
	// 				password: req.body,
	// 				password
	// 			});
	// 			await newUser.save();
	// 		}
	// 		res.send('User Created!');
	// 	};
});

app.get('/user', (req, res) => {
	console.log(req.body);
});

const PORT = process.env.PORT || 3001;

// Send every other request to the React app
// Define any API routes before this runs
app.get('*', (req, res) => {
	res.sendFile(path.join(__dirname, './client/build/index.html'));
});

app.listen(PORT, () => {
	console.log(`🌎 ==> API server now on port ${PORT}!`);
});
