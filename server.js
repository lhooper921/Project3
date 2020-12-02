const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const cors = require("cors");
const passport = require("passport");
const passportlocal = require("passport-local").Strategy;
const cookieParser = require("cookie-parser");
const bcrypt = require("bcryptjs");
const session = require("express-session");
const bodyParser = require("body-parser");
const User = require("./public/models/user");
// const client = require('socket.io').listen(3001).sockets;
// const Message = require("./models/message");
const { info } = require("console");
// const { urlencoded } = require("body-parser");

// Set up express
const app = express();

// Set up Mongoose
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/company",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  },
  () => {
    console.log("Mongoose is connected")
  });

// -----------------------------Middleware-----------------------------
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  cors({
    origin: "http://localhost:3000", //<--- location of the react app
    credentials: true,
  }))

app.use(session({
  secret: "secretecode",
  resave: true,
  saveUninitialized: true,
}));

app.use(cookieParser("secretecode"));
app.use(passport.initialize());
app.use(passport.session());
require("./public/config/passportConfig")(passport);
// ----------------------------------------------------------------------

// Routes
// require("./routes/routes.js")(app);
app.post("/login", (req, res, next) => {
  passport.authenticate("local", (err, user, info) => {
    if (err) throw err;
    if (!user) throw res.send("No User Found");
    else {
      req.login(user, err => {
        if (err) throw err;
        res.send("User Authenticated!");
        console.log(req.user);
      })
    }
  })(req, res, next);
});

app.post("/register", (req, res) => {
  User.findOne({ username: req.body.username }, async (err, doc) => {
    if (err) throw err;
    if (doc) res.send("User Already Exists");
    if (!doc) {
      const hashedPassword = await bcrypt.hash(req.body.password, 10);

      // console.log(req.body);
      const newUser = new User({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        department: req.body.department,
        phoneNumber: req.body.phoneNumber,
        role: JSON.stringify({
          manager: true
        }),
        username: req.body.username,
        password: hashedPassword,
      })
      await newUser.save();
      res.send("User Created!");
    }
  });
});
// app.get("/user", (req, res) => {
//   res.send(req.user);

  // ^^^ The user is stored in the req.user. The req object you get 
  // ^^^ from the client now has a user inside and contains all of the sission data. 
// });

// -------------------------- Messenger Set Up: -------------------------------------
// client.on('connection', (socket) => {

//   // Get the last 10 messages from the database.
//   Message.find().sort({createdAt: -1}).limit(10).exec((err, messages) => {
//     if (err) return console.error(err);

//     // Send the last messages to the user.
//     socket.emit('init', messages);
//   });

//   // Listen to connected users for a new message.
//   socket.on('message', (msg) => {
//     // Create a message with the content and the name of the user.
//     const message = new Message({
//       content: msg.content,
//       name: msg.name,
//     });

//     // Save the message to the database.
//     message.save((err) => {
//       if (err) return console.error(err);
//     });

//     // Alert other users about a new message.
//     socket.broadcast.emit('push', msg);
//   });
// });
// -------------------------------------------------------------------------------------------


const PORT = process.env.PORT || 3001;

// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
