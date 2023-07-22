const express = require('express');
const multer = require('multer');

const Router = express.Router();
const upload = multer({
  dest: 'public/files/'
})

const controller = require('./controller');

Router.get('/',
async (req, res)=>{
  const messages = await controller.getMessages();
  res.json(messages);
});

Router.get('/:id', (req, res)=>{
  res.send(`Ingresas el ${req.params.id}`);
});

Router.post('/',
upload.single('file'), 
async (req, res)=>{
  const body = req.body;
  const newMessage = await controller.addMessage(body, req.file);
  res.json(newMessage);
});

Router.patch('/:id',
async (req, res)=>{
  try {
    const id = req.params.id;
    const message = req.body.message;
    const updatedMessage = await controller.updateMessage(id, message);
    res.json(updatedMessage);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

Router.delete('/:id',
async (req, res)=>{
  try {
    const id = req.params.id;
    const deletedMessage = await controller.deleteMessage(id);
    res.send(deletedMessage);
  } catch (error) {
    res.send(error.message);
  }
});

module.exports = Router;
