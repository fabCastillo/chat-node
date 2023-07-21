const store = require('./store');

async function listChats(userId) {
    return await store.list(userId);    
}

async function addChat(users) {
    return await store.add(users);
}

module.exports = {
    listChats,
    addChat
}