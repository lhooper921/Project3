const mongoose = require("mongoose");
const user = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        index: { unique: true }
    },
    password: {
        type: String,
        required: true
    },

    firstName: String,
    lastName: String,
    department: String,
    phoneNumber: String,
    role: String,
});

module.exports = mongoose.model("User", user);

