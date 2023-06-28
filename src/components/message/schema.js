const { Schema, model } = require('mongoose');

const MessageSchema = new Schema({
  user: String,
  message: {
    type: String,
    required: true
  },
  date: Date
});

const Message = model('Message', MessageSchema);

module.exports = Message;
