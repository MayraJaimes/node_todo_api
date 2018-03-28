const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

Todo.remove({}).then((result)=> {
  console.log(result);
});

Todo.findOneAndRemove({_id:'5abc09ee7f006509685ed7d6'}).then((todo) => {
  console.log(todo);
});

Todo.findByIdAndRemove('5abc09ee7f006509685ed7d6').then((todo) => {
  console.log(todo);
});