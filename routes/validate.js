var express = require('express');
var router = express.Router();
const fetch = require('node-fetch');

var bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

var db = require('../database/queries');

/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

router.post('/valida', async function(req, res, next) {
    
    var id = parseInt(req.body.id);
    console.log('ID: ' + id);
    const url = 'http://localhost:3000';
    const context = 'api/blocks';

    const resp = await fetch(`${context}/${id}`)
            .then(res => res.json())
            .then(json => console.log(json))
            .then(res => res.send(resp));
    
    //res.send(resp);
});

router.get('/', async function(req, res, next) {
    var id = parseInt(req.body.id);
    console.log('ID: ' + id);
  
    const url = 'http://localhost:3000';
    const context = 'api/blocks';
    const resp = await fetch(`${context}/`)
            .then(res => res.json())
            .then(json => console.log(json));
    
    res.send(resp);
});


module.exports = router;
