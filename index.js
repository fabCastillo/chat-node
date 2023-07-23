const express = require('express');
const http = require('http');
const socket = require('./socket');

const apiRoutes = require('./src/network/routes.js');
const connectToMongoDB = require('./src/libs/mongoose.js');
const PORT = 3000;

const app = express();
const server = http.createServer(app);

socket.connect(server);

app.use(express.json());
app.use('/app', express.static('public'));

connectToMongoDB();
apiRoutes(app);

server.listen(PORT, ()=>{
  console.log(`listening on ${PORT}`);
});
