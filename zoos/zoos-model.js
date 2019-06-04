const knex = require('knex');

const knexConfig = {
  client: 'sqlite3',
  connection: {
    filename: './data/lambda.db3',
  },
  useNullAsDefault: true,
};

const db = knex(knexConfig);

module.exports = {
  find,
  findById,
  update,
  add,
  remove,
};

function find() {
  return db('zoos');
}

function findById(id) {
  return db('zoos').where({ id });
}

function update(id, changes) {
  return db('zoos')
    .where({ id })
    .update(changes);
}

function add(zoo) {
  return db('zoos').insert(zoo);
}

function remove(id) {
  return db('zoos')
    .where({ id })
    .del();
}
