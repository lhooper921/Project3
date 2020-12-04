const bcrypt = require("bcryptjs");
const passport = require("passport");
const passportlocal = require("passport-local").Strategy;
const cookieParser = require("cookie-parser");
const session = require("express-session");
const User = require("../models/user");
require("../config/passportConfig")(passport);


module.exports = function (app) {

  app.use(
    session({
      secret: 'secretecode',
      resave: true,
      saveUninitialized: true
    })
  );

  app.use(cookieParser("secretecode"));
  app.use(passport.initialize());
  app.use(passport.session());

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

  app.get("/user", (req, res) => {
    res.send(req.user);

    // ^^^ The user is stored in the req.user. The req object you get 
    // ^^^ from the client now has a user inside and contains all of the sission data. 
  });

}