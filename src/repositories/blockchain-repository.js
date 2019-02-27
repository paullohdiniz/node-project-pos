'use strict'

const mongoose = require('mongoose');
const Blockchain = mongoose.model('Blockchain');


exports.get = async() => {
    return await Blockchain.find({});    
}

exports.getById = async(id) => {
    return await Blockchain.findById(id);
}

exports.getvalidation = async(id) => {
    return await Blockchain.findById(id);
}