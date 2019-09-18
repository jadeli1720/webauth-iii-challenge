const router = require('express').Router();

const Users = require('./user-model.js');
const restricted = require('../auth/restricted-middleware.js')

router.get('/', restricted, (req, res) => {
    Users.find()
        .then(users => {
            res.json({users, loggedInUser: req.user.username});
        })
        .catch(err => {
            console.log('Error getting users using token in header', err)
            res.send(err)
          });
})

module.exports = router;