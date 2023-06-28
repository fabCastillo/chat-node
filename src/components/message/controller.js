const store = require('./store');

async function getMessages() {
  return await store.list();
}

function getMessagesById() {

}

function addMessage(data) {
  store.add(data);
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
