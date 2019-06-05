const db = require('../data/dbConfig');

module.exports = {
  find,
  findById,
  update,
  add,
  remove,
};

function find() {
  return db('bears');
}

function findById(id) {
  return db('bears').where({ id });
}

function update(id, changes) {
  return db('bears')
    .where({ id })
    .update(changes);
}

function add(zoo) {
  return db('bears').insert(zoo);
}

function remove(id) {
  return db('bears')
    .where({ id })
    .del();
}
