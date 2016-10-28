"use strict";
var express = require("express");
var path = require("path");
var logger = require("morgan");
var cookieParser = require("cookie-parser");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var index_1 = require("./routes/index");
var users_1 = require("./routes/users");
var usersModel_1 = require("./models/usersModel");
var dbUrl = 'mongodb://crufener:jenniferr1@ds023624.mlab.com:23624/taskapp';
var app = express();
app.set('view engine', 'ejs');
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/bower_components', express.static(path.join(__dirname, 'bower_components')));
app.use('/ngApp', express.static(path.join(__dirname, 'ngApp')));
app.use('/', index_1.default);
app.use('/user', users_1.default);
mongoose.connect(dbUrl).then(function () {
    mongoose.connection.db.dropDatabase(function () {
        var Fred = new usersModel_1.default();
        var Jen = new usersModel_1.default();
        var Craig = new usersModel_1.default();
        var Marry = new usersModel_1.default();
        Fred.username = 'fred';
        Fred.password = 'fred';
        Jen.username = 'jen';
        Jen.password = 'jen';
        Craig.username = 'craig';
        Craig.password = 'craig';
        Craig.admin = true;
        Marry.username = 'marry';
        Marry.password = 'password';
        Fred.save();
        Jen.save();
        Craig.save();
        Marry.save();
    });
}).catch(function (err) {
    console.error(err, err.message);
});
app.listen(3000, function () {
    console.log("\n        SERVER STARTED ON PORT 3000....\n        ");
});
module.exports = app;
