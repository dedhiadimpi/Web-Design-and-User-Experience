//defines methods for CRUD operations
'use strict';
//import to-do service
const todoService = require('../services/todo-service');

//method to list all to-dos
exports.list = function (request, response) {
    const resolve = (todo) => {
        response.status(200);
        response.json(todo);
    };
    //calls the service method that performs action on mongoDB and returns a promise with all to-dos
    todoService.search({})
        .then(resolve)
        .catch(renderErrorResponse(response));
};

//method to add a new to-do
exports.post = function (request, response) {
    const newTodo = Object.assign({}, request.body);
    const resolve = (todo) => {
        response.status(200);
        response.json(todo);
    };
    //calls a service method that takes the to-do given in request and adds it in mongoDB
    todoService.save(newTodo)
        .then(resolve)
        .catch(renderErrorResponse(response));
};

//method to get a specific to-do
exports.get = function (request, response) {
    const resolve = (todo) => {
        response.status(200);
        response.json(todo);
    };
    //calls the service method that takes the todoID given in request and returns a promise with the to-do object
    todoService.get(request.params.todoId)
        .then(resolve)
        .catch(renderErrorResponse(response));
};

//method to update a to-do
exports.put = function (request, response) {
    const todo = Object.assign({}, request.body);
    const resolve = (todo) => {
        response.status(200);
        response.json(todo);
    };
    todo._id = request.params.todoId;
    //calls the service method that takes the changes made to the to-do and updates it in the DB
    todoService.update(todo)
        .then(resolve)
        .catch(renderErrorResponse(response));
};

//method to delete a to-do
exports.delete = function (request, response) {
    const resolve = (todo) => {
        response.status(200);
        response.json({
            message: 'Todo Successfully deleted'
        });
    };
    //calls the service method that deletes the to-do passed in the request
    todoService.delete(request.params.todoId)
        .then(resolve)
        .catch(renderErrorResponse(response));
};

//if promise returns error, display the error
let renderErrorResponse = (response) => {
    const errorCallback = (error) => {
        if (error) {
            response.status(500);
            response.json({
                message: error.message
            });
        }
    }
    return errorCallback;
};