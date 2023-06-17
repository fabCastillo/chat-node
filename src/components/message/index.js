const express = require('express');
const Router = express.Router();

const controller = require('./controller');

Router.get('/', (req, res)=>{
  const messages = controller.getMessages();
  res.json(messages);
});

Router.get('/:id', (req, res)=>{
  res.send(`Ingresas el ${req.params.id}`);
});

Router.post('/', (req, res)=>{
  const body = req.body;
  const newMessage = controller.addMessage(body);
  res.json(newMessage);
});

Router.patch('/:id', (req, res)=>{
  res.send(`Actualizar el ${req.params.id}`);
});

Router.delete('/:id', (req, res)=>{
  res.send(`message deleted successfully con el id ${req.params.id}`);
});

module.exports = Router;
