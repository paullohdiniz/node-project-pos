var express = require('express');
var router = express.Router();


var db = require('../database/queries');


router.get('/api/blocks', db.getAllBlock);
router.get('/api/blocks/:id', db.getSingleBlock);
router.post('/api/blocks', db.createBlock);
router.put('/api/blocks/:id', db.updateBlock);
router.delete('/api/blocks/:id', db.removeBlock);

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
