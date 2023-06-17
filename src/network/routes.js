const express = require('express');
const MessageRouter = require('../components/message');

function apiRoutes(server) {
  const router = express.Router();
  server.use('/api/v1', router);
  router.use('/messages', MessageRouter);
}

module.exports = apiRoutes;
