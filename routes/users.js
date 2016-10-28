"use strict";
var express = require("express");
var usersModel_1 = require("../models/usersModel");
var router = express.Router();
router.get('/', function (req, res) {
    usersModel_1.default.find().then(function (users) {
        res.json(users);
    }).catch(function (err) {
        console.log(err.message);
        res.sendStatus(400);
    });
});
router.get('/:id', function (req, res) {
    var userId = req.params['_id'];
    console.log(userId);
    usersModel_1.default.findById(userId).then(function (user) {
        res.json(user);
    }).catch(function (err) {
        console.error(err);
        res.send(err);
    });
});
router.post('/', function (req, res) {
    var newUser = new usersModel_1.default();
    newUser.username = req.body.username;
    newUser.password = req.body.password;
    newUser.save().then(function (user) {
        res.json(user);
    }).catch(function (err) {
        console.error(err);
        res.status(400).json(err);
    });
});
router.post('/:id', function (req, res) {
    var userId = req.params['id'];
    usersModel_1.default.findById(userId).then(function (user) {
        user.username = req.body.username;
        user.password = req.body.password;
        user.save().then(function (changedUser) {
            res.json(changedUser);
        }).catch(function (err) {
            res.status(400).json(err);
        });
    }).catch(function (err) {
        console.error(err);
        res.send(err);
    });
});
router.delete('/:id', function (req, res) {
    var userId = req.params.id;
    usersModel_1.default.findByIdAndRemove(userId).then(function (user) {
        res.json(user);
    }).catch(function (err) {
        console.error(err);
        res.json(err);
    });
});
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = router;
