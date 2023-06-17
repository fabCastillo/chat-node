const express = require('express');
const apiRoutes = require('./src/network/routes.js');
const app = express();
const PORT = 3000;

app.use(express.json());

app.get('/', (req, res)=>{
  res.send('Hello, world!');
});

apiRoutes(app);

app.listen(PORT, ()=>{
  console.log(`listening on ${PORT}`);
});
