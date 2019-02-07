var express = require('express');
var router = express.Router();

var bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

var db = require('../database/queries');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/valida',function(req, res, next) {
    var id = parseInt(req.body.id);
    console.log('ID: ' + id);
    
    db.getSinglePuppy(id)
      .then(function (data) {
        res.status(200)
          .json({
            status: 'success',
            data: data,
            message: 'Retrieved ONE puppy'
          });
      })
      .catch(function (err) {
        return next(err);
      });
    //var name = req.body.nome;
    console.log('Passando no values 2');
    //res.send(retorno);
});

module.exports = router;
