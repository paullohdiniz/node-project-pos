var express = require('express');
const debug = require('debug')('node-project-pos');
var router = express.Router();
const controller = require('../controllers/block-controller');

var bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies


router.post('/valida', controller.valida);

router.get('/:id', controller.getPar);

router.get('/', controller.get);


module.exports = router;
