const db = require('../database/dbConfig.js');

module.exports = {
    add,
    find,
    findBy,
    findById
};

//RETURN ALWAYS within the functions

//Find and Display user info (.select()) ---> only if user is verified 
function find() {
    return db('users')
            .select('id', "username")//not password. We don't want that to show
}

//Used to add user and give them id
function findById(id) {
    return db('users')
            .where({ id })
            .first();
}

//User Registration ---> Add User
function add(user) {
    return db('users')
            .insert(user, 'id')
            .then(ids => {
                const [id] = ids;
                return findById(id)
            })
}

//Used for Login ---> Find user by argument 
function findBy(filter) {
    return db('users')
            .where(filter)
}
