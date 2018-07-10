
/*
* @autor Yeismer Espejo
* @version 1.0
* @data June 30
*/


/* Load module and create new application */
var express = require("express"); 
var app = express();
var bodyParser = require('body-parser');

/* Support to bodies in Json */
app.use(bodyParser.json()); 
/* Suppor to encode bodies */
app.use(bodyParser.urlencoded({ extended: true })); 

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

//GET http://localhost:8080/task
app.get('/task', function(req, res, next) {
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(
        [
            {
                "title": "Task 1",
                "description": "sleep",
                "owner": 6,
                "priority": 1,
                "dueDate": "2014­10­01",
                "creator": 6,
                "taskStatus": 1,
                "createdAt": "2014­02­08T06:50:51.479Z",
                "updatedAt": "2014­02­08T06:50:51.479Z",
                "id": 2
            },
            {
                "title": "Task 2",
                "description": "Task2",
                "owner": 6,
                "priority": 2,
                "dueDate": "2014­10­01",
                "creator": 6,
                "taskStatus": 1,
                "createdAt": "2014­02­08T16:30:35.115Z",
                "updatedAt": "2014­02­08T16:30:35.115Z",
                "id": 3
            },
            {
                "title": "Task 2",
                "description": "Task2",
                "owner": 7,
                "priority": 2,
                "dueDate": "2014­10­01",
                "creator": 6,
                "taskStatus": 1,
                "createdAt": "2014­02­08T16:30:46.732Z",
                "updatedAt": "2014­02­08T16:30:46.732Z",
                "id": 4
            }
        ]));
});

//GET http://localhost:8080/task/destroy/:id
app.get('/task/destroy/:id', function(req, res, next) {
    var taskId = req.params.id;
    res.setHeader('Content-Type', 'application/json');
    if(taskId !== null && taskId !== "") {
        res.send(JSON.stringify({
            "name": "Task1",
            "dueDate": "2014­08­15",
            "priority": "6",
            "createdAt": "2014­08­14T22:23:47.020Z",
            "updatedAt": "2014­08­14T22:23:47.020Z",
            "id": taskId
        }));
    } else {
        res.status(400).send(JSON.stringify({
            "status": 400,
            "validationErrors": "No id provided."
        }));
    }
});

//POST http://localhost:8080/items/create
app.post('/task/create', function(req, res) {
    res.setHeader('Content-Type', 'application/json');
    if(req.param('name') !== null && req.param('name') !== "" && 
        req.param('dueDate') !== null && req.param('dueDate') !== "" &&
        req.param('priority') !== null && req.param('priority') !== "") {
            res.send(JSON.stringify({
                "name": req.param('name'),
                "dueDate": req.param('dueDate'),
                "priority": req.param('priority'),
                "createdAt": "2014­08­14T22:23:47.020Z",
                "updatedAt": "2014­08­14T22:23:47.020Z",
                "id": 1
                }
            ));
    } else  {
        var responseJson = {
            "status": 500,
            "errors": [{
                "ValidationError": {
                    "name": [],
                    "dueDate": []
                }
            }]
        };


        if(req.param('name') === null || req.param('name') === ""){
            responseJson.errors[0].ValidationError.name = new Array();
            responseJson.errors[0].ValidationError.name.push({
                "data": null,
                "message": "Validation error: \"null\" Rule \"required(true)\" failed.",
                "rule": "required",
                "args": [
                    true
                ]
            });
        }

        if(req.param('dueDate') === null || req.param('dueDate') === ""){
            responseJson.errors[0].ValidationError.name = new Array();
            responseJson.errors[0].ValidationError.name.push({
                "data": null,
                "message": "Validation error: \"null\" Rule \"required(true)\" failed.",
                "rule": "required",
                "args": [
                    true
                ]
            });
        }

        res.status(500).send(JSON.stringify(responseJson));
    }
});

//POST http://localhost:8080/items/update
app.post('/task/update', function(req, res) {
    res.setHeader('Content-Type', 'application/json');
    if(req.param('name') !== null && req.param('name') !== "" && 
        req.param('dueDate') !== null && req.param('dueDate') !== "" &&
        req.param('priority') !== null && req.param('priority') !== "") {
            res.send(JSON.stringify({
                "name": req.param('name'),
                "dueDate": req.param('dueDate'),
                "priority": req.param('priority'),
                "createdAt": "2014­08­14T22:23:47.020Z",
                "updatedAt": "2014­08­14T22:23:47.020Z",
                "id": 1
                }
            ));
    } else  {
        var responseJson = {
            "status": 500,
            "errors": [{
                "ValidationError": {
                    "name": [],
                    "dueDate": []
                }
            }]
        };


        if(req.param('name') === null || req.param('name') === ""){
            responseJson.errors[0].ValidationError.name = new Array();
            responseJson.errors[0].ValidationError.name.push({
                "data": null,
                "message": "Validation error: \"null\" Rule \"required(true)\" failed.",
                "rule": "required",
                "args": [
                    true
                ]
            });
        }

        if(req.param('dueDate') === null || req.param('dueDate') === ""){
            responseJson.errors[0].ValidationError.name = new Array();
            responseJson.errors[0].ValidationError.name.push({
                "data": null,
                "message": "Validation error: \"null\" Rule \"required(true)\" failed.",
                "rule": "required",
                "args": [
                    true
                ]
            });
        }

        res.status(500).send(JSON.stringify(responseJson));
    }
});

var server = app.listen(8080, function () {
    console.log('Server is running..'); 
});