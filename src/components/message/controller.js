const store = require('./store');

async function getMessages() {
  return await store.list();
}

function getMessagesById() {

}

async function addMessage({user, message}) {
  const fullMessage = {
    user: user,
    message: message,
    date: new Date()
  }
  const createdMessage = await store.add(fullMessage);
  return createdMessage;
}

async function updateMessage(id, message) {
  return await store.update(id, message);
}

async function deleteMessage(id) {
  return await store.delete(id);
}

module.exports = {
  getMessages,
  getMessagesById,
  addMessage,
  updateMessage,
  deleteMessage
}
