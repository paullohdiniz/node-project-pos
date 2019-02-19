'use strict'
const fetch = require('node-fetch');

const URL = 'http://localhost:3000';
const CONTEXT = 'bd/blocks';

exports.getById = async (req, res, next) => {
    var id = parseInt(req.params.id);
    console.log('ID_: ' + id);

    const resp = await fetch(`${URL}/${CONTEXT}/${id}`)
        .then(res => res.json())
        .then(json => res.send(json))
        .catch(error => console.log(error));

}

exports.getAll = async (req, res, next) => {
    console.log('ALL BLOCKS');
    const resp = await fetch(`${URL}/${CONTEXT}/`)
        .then(res => res.json())
        .then(json => res.send(json))
        .catch(error => console.log(error));

}

exports.valida = async (req, res, next) => {

    var id = parseInt(req.params.id);
    console.log('ID_VALIDA: ' + id);

    const resp = await fetch(`${URL}/${CONTEXT}/${id}`)
            .then(res => res.json())
            .then(json => res.send(json))
            .catch(error => console.log(error));
}