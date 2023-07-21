const { Schema, model } = require('mongoose');

const MessageSchema = new Schema({
  chat: [{ type: Schema.Types.ObjectId, ref: 'Chat'}],
  user: [{ type: Schema.Types.ObjectId, ref: 'User' }],
  message: {
    type: String,
    required: true
  },
  date: Date
});

const Message = model('Message', MessageSchema);

module.exports = Message;
