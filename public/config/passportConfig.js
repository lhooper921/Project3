const bcrypt = require("bcryptjs");
const localStrategy = require("passport-local").Strategy;
const User = require("../models/user");

module.exports = function (passport) {
    passport.use(
        new localStrategy((username, password, done) => {
            User.findOne({ username: username }, (err, user) => {
                if (err) throw err;
                if (!user) throw done(null, false);
                bcrypt.compare(password, user.password, (err, result) => {
                    if (err) throw err;
                    if (result === true) {
                        return done(null, user)
                    } else {

                        return done(null, false);
                    }
                });
            });
        })

    );
    // Stores a cookie inside of the browser.Takes user from local strategy to create a cookie w/ user id:
    passport.serializeUser((user, cb) => {
        cb(null, user.id);
    })
    // Takes cookie and returns a user:
    passport.deserializeUser((id, cb) => {
        // Find user in the database w/ id matching the cookie's id:
        User.findOne({ id_: id }, (err, user) => {
            cb(err, user);
        })
    })
};