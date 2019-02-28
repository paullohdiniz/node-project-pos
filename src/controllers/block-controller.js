'use strict'
const fetch = require('node-fetch');
const ValidationBlockchain = require('../validation/blockchain-validator')

var porta = normalizePort(process.env.PORT || '3000');

const URL = 'http://localhost:' + porta;
const CONTEXT = 'bd/blocks';


function normalizePort(val) {
    var port = parseInt(val, 10);
  
    if (isNaN(port)) {
      // named pipe
      return val;
    }
  
    if (port >= 0) {
      // port number
      return port;
    }
  
    return false;
  }

// exports.getByIdPg = async (req, res, next) => {
//     var id = parseInt(req.params.id);
//     console.log('ID_: ' + id);

//     const resp = await fetch(`${URL}/${CONTEXT}/${id}`)
//         .then(res => res.json())
//         .then(json => res.send(json))
//         .catch(error => console.log(error));

// }

exports.getAll = (req, res, next) => {
    console.log('ALL BLOCKS');
    const resp = fetch(`${URL}/${CONTEXT}/`)
        .then(res => res.json())
        .then(json => res.send(json))
        .catch(error => console.log(error));

}

// exports.valida = async(req, res, next) => {
//     //TODO começar aqui a validação do blockchain
    
//     let validation = new ValidationBlockchain();
//     //validation.validablockschain(req.body.id,'Teste');
    
//     var id = parseInt(req.params.id);
//     console.log('ID_VALIDA: ' + id);

//     const resp = await fetch(`${URL}/${CONTEXT}/${id}`)
//             .then(res => res.json())
//             .then(json => {
//                 res.status(200).send(validation.validablockschain(json, 'Valida'))
//             })
//             .catch(error => console.log(error));
// }

exports.valida = async(req, res, next) => {
    const validation = new ValidationBlockchain();
    //validation.validablockschain(req.body.id,'Teste');
    try{
        var id = parseInt(req.params.id);
        console.log('ID_VALIDA: ' + id);
        
        const data = await fetch(`${URL}/${CONTEXT}/${id}`);
        
        console.log('DADO:  ' + data);
        res.status(200).send(data.json());
    }catch(e){
        res.status(500).send({
            message : 'Falha ao validar dados de blockchain'
        });
    }
}

///Novo cabeçalho para mongodb -- TODO criar classe
const mongoose = require('mongoose');
const Blockchain = mongoose.model('Blockchain');
const repository = require('../repositories/blockchain-repository');


exports.post = (req, res, next) => {
    try{
        var blockchain = new Blockchain(req.body);
        console.log('blockchain: ' + blockchain);
        const data = repository.save(blockchain);
        res.status(201).send({message : 'Blockchain cadastrado com sucesso'});
    }
    catch(e){
        res.status(400).send({message : 'Blockchain não cadastrado', data : error});
    }
    
}

exports.getById = async(req, res, next) => {
    try{
        const data = await repository.getById(req.params.id);
        res.status(200).send(data);
    }catch(e){
        res.status(400).send({message : 'Busca de Blockchain com erro', data : error});
    }    
}
exports.get = (req, res, next) => {
    repository
        .get()
            .then(response => {
                res.status(200).send(response);
            })
            .catch(error => {
                res.status(400).send({message : 'Busca de Blockchain com erro', data : error});
            });
    
}
exports.put = (req, res, next) => {
   
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
exports.delete = (req, res, next) => {
    Blockchain.deleteMany({})
    .then(response => {
        res.status(200).send(response);
    })
    .catch(error => {
        res.status(400).send({message : 'Busca de Blockchain com erro', data : error});
    });
    
}

