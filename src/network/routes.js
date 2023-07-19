const express = require('express');
const MessageRouter = require('../components/message');
const UserRouter = require('../components/user');

function apiRoutes(server) {
  const router = express.Router();
  server.use('/api/v1', router);
  router.use('/messages', MessageRouter);
  router.use('/users', UserRouter);
}

module.exports = apiRoutes;
