const User = require('./schema');

async function findUserById(id) {
    const foundUser = await User.findById(id);
    if(!foundUser) throw new Error('Message not found');
    return foundUser;
}

async function getUsers() {
    const users = await User.find();
    return users;
}

async function addUser(user) {
    const newUser = new User(user);
    const createdUser = await newUser.save();
    return createdUser;
}

async function updateUser(id, data) {
    const userObj = await findUserById(id);
    userObj.name = data;
    const updatedUser = await userObj.save();
    return updatedUser;
}

function deleteUser(id) {
    console.log(id);
    return User.deleteOne({_id: id});
}

module.exports = {
    list: getUsers,
    add: addUser,
    update: updateUser,
    delete: deleteUser
}