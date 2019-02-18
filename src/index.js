var express = require('express');
var router = express.Router();


var db = require('../database/queries');


router.get('/bd/blocks', db.getAllBlock);
router.get('/bd/blocks/:id', db.getSingleBlock);
router.post('/bd/blocks', db.createBlock);
router.put('/bd/blocks/:id', db.updateBlock);
router.delete('/bd/blocks/:id', db.removeBlock);

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
