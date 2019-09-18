const router = require('express').Router();
const bcrypt = require('bcryptjs'); //>>>>hashing password
const jwt = require('jsonwebtoken'); //>>>>use of creating tokens
// const secrets = require('')//>>>secrets for token generation function

Users = require('../users/user-model');



module.exports = router