const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res)=>{
  res.send('Hello, world!');
});

app.get('/message', (req, res)=>{
  res.send('Hello, I am a messages');
});

app.post('/', (req, res)=>{
  res.send('message created successfully');
});

app.listen(PORT, ()=>{
  console.log(`listening on ${PORT}`);
});
