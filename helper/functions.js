const todoDb = require('../db/todoDb');

function findTodoWithId(id) {
  console.log('find todo with id ran');

  return todoDb.find((t) => t.id === +id);
}

module.exports = {
  findTodoWithId,
};
