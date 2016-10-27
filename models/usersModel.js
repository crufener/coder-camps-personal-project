"use strict";
var mongoose = require("mongoose");
var userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, 'Must have a username'],
        minlength: [3, 'Your username must be 3 or more characters long']
    },
    password: {
        type: String,
        required: true
    },
    admin: {
        type: Boolean,
        default: false,
        required: true
    }
});
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = mongoose.model('User', userSchema);
