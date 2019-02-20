'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    previousHash: {
        type: String,
        required: true,
        trim: true
    },
    data: {
        type: String,
        required: true,
        trim: true
    },
    hash: {
        type: String,
        required: true,
        trim: true
    },
    dateTime: {
        type: Number,
        required: true,
        default: (new Date()).getTime() 

    },
});

module.exports = mongoose.model('Blockchain', schema);