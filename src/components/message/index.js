const express = require('express');
const Router = express.Router();

Router.get('/', (req, res)=>{
  res.send('Hello, I am a messages');
});

Router.post('/', (req, res)=>{
  res.send('message created successfully');
});

module.exports = Router;
