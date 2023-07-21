const express = require('express');
const Router = express.Router();

const controller = require('./controller');

Router.get('/:userId', 
async (req, res)=>{
    const getChats = await controller.listChats(req.params.userId);
    res.json(getChats);
});

Router.post('/', 
async (req, res)=>{
    const body = req.body;
    const createChat = await controller.addChat(body);
    res.json(createChat);
});

module.exports = Router;