const Message = require('./schema');


async function findMessageById(id) {
  const foundMessage = await Message.findById(id);
  if(!foundMessage) throw new Error('Message not found');
  return foundMessage;
}
async function getMessages(){
  const messages = await Message.find().populate('user');
  return messages;
}

async function addMessage(message) {
  const newMessage = new Message(message);
  const createdMessage = await newMessage.save();
  return createdMessage;
}

async function updateMessage(id, data) {
  const messageObj = await findMessageById(id);
  messageObj.message = data;
  const updatedMessage = await messageObj.save();
  return updatedMessage;
}

async function deleteMessage(id) {
  console.log(id);
  return await Message.deleteOne({_id: id});
}


module.exports = {
  list: getMessages,
  add: addMessage,
  update: updateMessage,
  delete: deleteMessage
};
