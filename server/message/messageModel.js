const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const messageSchema = new Schema({
  username: { type: String, required: true, unique: true },
  message: { type: String, required: true }
});

module.exports = mongoose.model('Message', messageSchema);
