const list = [];

function getMessages(){
  return list;
}

function addMessages(message) {
  list.push(message);
}

module.exports = {
  list: getMessages,
  add: addMessages
};
