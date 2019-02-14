var express = require('express');
var router = express.Router();
const fetch = require('node-fetch');

var bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

var db = require('../database/queries');
const URL = 'http://localhost:3000';
const CONTEXT = 'bd/blocks';

/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });


router.post('/valida', async function(req, res, next) {
    
    var id = parseInt(req.body.id);
    console.log('ID: ' + id);
    
    const resp = await fetch(`${URL}/${CONTEXT}/${id}`)
            .then(res => res.json())
            .then(json => res.send(json))
            .catch(error => console.log(error));
    
    res.send(resp);
});

router.get('/:id', async function(req, res, next) {
    //var id = parseInt(req.param.id);
    var id =1;
    console.log('ID_: ' + id);
    
    const resp = await fetch(`${URL}/${CONTEXT}/${id}`)
            .then(res => res.json())
            .then(json => res.send(json))
            .catch(error => console.log(error));
    
    //res.send(resp);
});

router.get('/', async function(req, res, next) {
  
    console.log('ALL BLOCKS');
    const resp = await fetch(`${URL}/${CONTEXT}/`)
            .then(res => res.json())
            .then(json => res.send(json))
            .catch(error => console.log(error));
    
    //res.send(resp);
});


module.exports = router;
