const store = require('./store');

async function getUsers() {
    return await store.list();
}

async function addUser(data) {
    const createdUser = await store.add(data);
    return createdUser;
}

async function updateUser(id, name) {
    return await store.update(id, name);
}

async function deleteUser(id) {
    return await store.delete(id);
}

module.exports = {
    getUsers,
    addUser,
    updateUser,
    deleteUser
}