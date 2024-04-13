var express = require('express');

var app = express();

var models = require("./modelData/models.js").models;

const cors = require("cors");
app.use(cors());

app.get('/user/list', function (request, response) {
    response.status(200).send(models.userListModel());
});

app.get('/user/:id', function (request, response) {
    var id = request.params.id;
    var user = models.userModel(id);
    if (user === null) {
        response.status(400).send('Not found');
        return;
    }
    response.status(200).send(user);
});

app.get('/photosOfUser/:id', function (request, response) {
    var id = request.params.id;
    var photos = models.photoOfUserModel(id);
    if (photos.length === 0) {
        response.status(400).send('Not found');
        return;
    }
    response.status(200).send(photos);
});

var server = app.listen("8000", function () {
    var port = server.address().port;
});