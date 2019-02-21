'use strict'
const fetch = require('node-fetch');
const ValidationBlockchain = require('../validation/blockchain-validator')

const URL = 'http://localhost:3000';
const CONTEXT = 'bd/blocks';

// exports.getByIdPg = async (req, res, next) => {
//     var id = parseInt(req.params.id);
//     console.log('ID_: ' + id);

//     const resp = await fetch(`${URL}/${CONTEXT}/${id}`)
//         .then(res => res.json())
//         .then(json => res.send(json))
//         .catch(error => console.log(error));

// }

exports.getAll = async (req, res, next) => {
    console.log('ALL BLOCKS');
    const resp = await fetch(`${URL}/${CONTEXT}/`)
        .then(res => res.json())
        .then(json => res.send(json))
        .catch(error => console.log(error));

}

exports.valida = async (req, res, next) => {
    //TODO começar aqui a validação do blockchain
    
    let validation = new ValidationBlockchain();
    //validation.validablockschain(req.body.id,'Teste');
    
    var id = parseInt(req.params.id);
    console.log('ID_VALIDA: ' + id);

    const resp = await fetch(`${URL}/${CONTEXT}/${id}`)
            .then(res => res.json())
            .then(json => {
                res.status(200).send(validation.validablockschain(json, 'Valida'))
            })
            .catch(error => console.log(error));
}
///Novo cabeçalho para mongodb -- TODO criar classe
const mongoose = require('mongoose');
const Blockchain = mongoose.model('Blockchain');

exports.post = async (req, res, next) => {
    var blockchain = new Blockchain(req.body);
    console.log('blockchain: ' + blockchain);
    blockchain.save()
    .then(response => {
        res.status(201).send({message : 'Blockchain cadastrado com sucesso'});
    })
    .catch(error => {
        res.status(400).send({message : 'Blockchain cadastrado com sucesso', data : error});
    });
    
}

exports.getById = async (req, res, next) => {
    Blockchain
    .findById(req.params.id)
    .then(response => {
        res.status(200).send(response);
    })
    .catch(error => {
        res.status(400).send({message : 'Busca de Blockchain com erro', data : error});
    });
    
}
exports.get = async (req, res, next) => {
    Blockchain.find({})
    .then(response => {
        res.status(200).send(response);
    })
    .catch(error => {
        res.status(400).send({message : 'Busca de Blockchain com erro', data : error});
    });
    
}
exports.put = async (req, res, next) => {
   
    Blockchain.findByIdAndUpdate(req.params.id, {
        $set:{
            data: req.body.data
        }

    }).then(response => {
        res.status(200).send(response);
    })
    .catch(error => {
        res.status(400).send({message : 'Busca de Blockchain com erro', data : error});
    });
    
}
exports.delete = async (req, res, next) => {
    Blockchain.deleteMany({})
    .then(response => {
        res.status(200).send(response);
    })
    .catch(error => {
        res.status(400).send({message : 'Busca de Blockchain com erro', data : error});
    });
    
}

