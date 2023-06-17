const store = require('./store');

function getMessages() {
  return store.list();
}

function getMessagesById() {

}

function addMessage(data) {
  store.add(data);
}

function updateMessage() {

}

function deleteMessage() {

}

module.exports = {
  getMessages,
  getMessagesById,
  addMessage,
  updateMessage,
  deleteMessage
}
