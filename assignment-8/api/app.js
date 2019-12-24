//all variables should be declared
'use strict';
//all the imports can be referred using module.exports
module.exports = function (app) {
    //Initialize models
    //import model
    let todoModel = require('./models/todo');

    //Initialize routes
    //import route
    let todoRoutes = require('./routes/todo-route');
    todoRoutes(app);
};


