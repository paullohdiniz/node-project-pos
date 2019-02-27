'use strict'

const mongoose = require('mongoose');
const Blockchain = mongoose.model('Blockchain');


exports.get = () => {
    return Blockchain
        .find({});    
}

exports.getById = (id) => {
    return Blockchain
    .findById(id);
    
}