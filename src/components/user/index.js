const express = require('express');
const Router = express.Router();

const controller = require('./controller');

Router.get('/', 
async (req, res)=>{
    const user = await controller.getUsers();
    res.json(user);
});
Router.post('/', 
async (req, res)=>{
    const body = req.body;
    const newUser = await controller.addUser(body);
    res.json(newUser);
});
Router.patch('/:id', 
async (req, res)=>{
    const id = req.params.id;
    const name = req.body.name;
    const updateUser = await controller.updateUser(id, name);
    res.json(updateUser);
});
Router.delete('/:id', 
async (req, res)=>{
    const id = req.params.id;
    const deletedUser = await controller.deleteUser(id);
    res.json(deletedUser);
});

module.exports = Router;