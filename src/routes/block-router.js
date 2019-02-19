var express = require('express');
const debug = require('debug')('node-project-pos');
var router = express.Router();
const controller = require('../controllers/block-controller');

var bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies


router.get('/valida/:id', controller.valida);

router.get('/:id', controller.getById);

router.get('/', controller.getAll);


module.exports = router;
