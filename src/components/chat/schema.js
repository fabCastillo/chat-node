const {Schema, model} = require('mongoose');

const chatSchema = new Schema({
    users:[{ type: Schema.Types.ObjectId, ref: 'User' }]
});

const Chat = model('Chat', chatSchema);
module.exports = Chat;