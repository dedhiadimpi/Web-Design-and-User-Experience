//executes queries on mongoDB
'use strict';
const mongoose = require('mongoose'),
    Todo = mongoose.model('todo');

//returns all to-dos
exports.search = function (params) {
    const promise = Todo.find(params).exec();
    return promise;
};

//adds a to-do
exports.save = function (todo) {
    const newTodo = new Todo(todo);
    const promise = newTodo.save();
    return promise;
};

//returns a specific to-do based on todoID
exports.get = function (todoId) {
    const promise = Todo.findById(todoId).exec();
    return promise
};

//updates a specific to-do based on todoID
exports.update = function (todo) {
    todo.modified_date = new Date();
    const promise = Todo.findOneAndUpdate({_id: todo._id}, todo).exec();
    return promise;
};

//deletes a specific to-do based on todoID
exports.delete = function (todoId) {
    const promise = Todo.remove({_id: todoId});
    return promise;
};