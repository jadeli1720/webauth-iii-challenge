const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

//Routers ---> auth and users/departments
const authRouter = require('../auth/auth-router')
// const departRouter = require('')

//Set server to use express
const server = express();

//Tell server how to use imports
server.use(helmet());
server.use(cors());
server.use(express.json());

//Tell server to use these paths
server.use('/api/auth', authRouter);
// server.use('/api/depart', departRouter);

//make sure it's working so far:
server.get('/', (req, res) => {
    res.send("It's alive!");
  });

//export server to index.js so it can be listened to
module.exports = server