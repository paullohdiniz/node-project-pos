var express = require('express');
const debug = require('debug')('node-project-pos');
var router = express.Router();

const controller = require('../controllers/block-controller');

var bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies


router.get('/valida/:id', controller.valida);
//router.get('/pg/:id', controller.getByIdPg);
router.get('/pg', controller.getAll);
//router.post('/pg', controller.postPg);
router.post('/', controller.post);
router.get('/', controller.get);
router.get('/:id', controller.getById);
router.delete('/', controller.delete);
router.put('/:id', controller.put);


module.exports = router;
