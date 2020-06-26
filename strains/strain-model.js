const db = require('../data/dbconfig')

module.exports = {
    add,
    find,
    addPreferrences,
    getPreferrences,
    checkIfInPreferrences,
    remove,
    findById,
    update,

}

function getPreferrences() {
    return db('users as u')
        .join('users_cannabis as uc', 'u.id', 'uc.user_id')
        .join('cannabis as c', 'uc.cannabis_id', 'c.id')
        .where('u.id', id)
        .select('c.id','c.strain', 'c.type', 'c.effect', 'c.flavor', 'c.description')
}

function checkIfInPreferrences(id) {
    return db('users as u')
        .join('users_cannabis as uc', 'u.id', 'uc.user_id')
        .join('cannabis as c', 'uc.cannabis_id', 'c.id')
        .where('c.id', id) 
}

function addPreferrences(user_id, cannabis_id) {
    return db('users_cannabis').insert({user_id, cannabis_id})
}

function find() {
    return db('marijuana')
}

function add(marijuana) {
    return db('marijuana').insert(marijuana).returning('id')
}

function remove(id) {
    return db('marijuana').where('id', Number(id)).del()
}

function findById(id) {
    return db('marijuana').where({id})
}
function update(changes, id) {
    return db('marijuana').where('id', Number(id)).update(changes)
}