const mongoose = require("mongoose");
const user = new mongoose.Schema({
    username: String,
    password: String,
});

module.exports = mongoose.model("User", user);

// 'use strict';

// const mongoose = require('mongoose'),
//   bcrypt = require('bcrypt'),
//   Schema = mongoose.Schema;

// const UserSchema = new Schema({
//   fullName: {
//     type: String,
//     trim: true,
//     required: true
//   },
//   email: {
//     type: String,
//     unique: true,
//     lowercase: true,
//     trim: true,
//     required: true
//   },
//   hash_password: {
//     type: String
//   },
//   created: {
//     type: Date,
//     default: Date.now
//   }
// });

// UserSchema.methods.comparePassword = function(password) {
//   return bcrypt.compareSync(password, this.hash_password);
// };

// mongoose.model('User', UserSchema);

// var mongoose = require('mongoose'),
// const Schema = mongoose.Schema,

// const userSchema = new Schema(
//     {
//         username: {
//             type: String,
//             required: true,
//             index: { unique: true }
//         },
//         password: {
//             type: String,
//             required: true
//         }
//     }
// );

// const User = mongoose.model("User", userSchema);

// module.exports = User;
