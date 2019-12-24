//defines the routes --> URL for .get, .post, .put and .delete
'use strict';
module.exports = function (app) {
    //import controller
    const todoController = require('../controllers/todo-controller');

    //route method lets us define multiple actions on a single route
    app.route('/todo')
        .get(todoController.list)
        .post(todoController.post);

    //defines the URL i.e. URL should have todoID to perform the actions
    app.route('/todo/:todoId')
        .get(todoController.get)
        .put(todoController.put)
        .delete(todoController.delete);
};