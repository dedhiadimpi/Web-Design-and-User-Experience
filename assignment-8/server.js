//import express
let express = require('express');
//assign express to variable app
let app = express();
//import config file
let config = require('./config');
//assign port to variable port
let port = process.env.PORT || config.port;
//import mongoose
let mongoose = require('mongoose');
//import third party bodyParser for parsing the request
let bodyParser = require('body-parser');

//mongoose instance connection url connection
mongoose.connect(config.database, {
    useMongoClient: true
});
//make mongoose promise as global promise
mongoose.Promise = global.Promise;

//Adding body parser for handling request and response objects.
//Returns middleware that only parses urlencoded bodies and only looks at requests where the Content-Type header matches the type option
//Parses the data coming as URL using qs library
//extended: true --> serializing any JSON-like data structure
app.use(bodyParser.urlencoded({
    extended: true
}));
//Returns middleware that only parses json and only looks at requests where the Content-Type header matches the type option
//use the JSON body-parsers --> parses JSON string
app.use(bodyParser.json());

//Enabling CORS
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT,DELETE");
    next();
});

//import app.js
let initApp = require('./api/app');
initApp(app);

//listen port
app.listen(port);
console.log('Todo RESTful API server started on: ' + port);
