const mongoose = require('mongoose');
const messages = new mongoose.Schema({
  content: String,
  name: String,
}, {
//   timestamps: true,
});

module.exports = mongoose.model('Message', messages);