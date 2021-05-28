const express = require('express');

const { findTodoWithId } = require('./helper/functions');
const todoDb = require('./db/todoDb');
const app = express();

app.get('/api/todos', (req, res) => {
  res.json(todoDb);
});

//turim found pagal id
app.get('/api/todos/:id', (req, res) => {
  const found = findTodoWithId(req.params.id);
  res.json({ rez: found });
});

app.listen(3000, () => console.log('server is running'));
