const Chat = require('./schema');

async function listChats(userId) {
    const getChats = await Chat.find().populate('users');
    return getChats;
}

function addChat(chat) {
    const newChat =  new Chat(chat);
    return newChat.save();
}

module.exports = {
    add: addChat,
    list: listChats
}