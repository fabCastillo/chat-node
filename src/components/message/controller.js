const store = require('./store');
const { socket } = require('../../../socket');
async function getMessages() {
  return await store.list();
}

function getMessagesById() {

}

async function addMessage({chat, user, message}, file) {
  
  let fileUrl;
  
  if(file) fileUrl = 'http://localhost:3000/app/files/' + file.filename;

  const fullMessage = {
    chat: chat,
    user: user,
    message: message,
    date: new Date(),
    file: fileUrl
  }
  const createdMessage = await store.add(fullMessage);

  socket.io.emit('message', fullMessage);

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
