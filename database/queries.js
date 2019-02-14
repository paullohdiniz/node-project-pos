var promise = require('bluebird');

var options = {
  // Initialization Options
  promiseLib: promise
};

//const { Client } = require('pg-promise');

var pgp = require('pg-promise')(options);


var connectionString = 'postgres://postgres:Futurama2000@localhost:5432/financeira_db';
// const connectionString = new Client({
//     user: 'postgres',
//     host: 'localhost',
//     database: 'financeira_db',
//     password: 'Futurama2000',
//     port: 5432,
//   });

var db = pgp(connectionString);

// add query functions

module.exports = {
  getAllBlock: getAllBlock,
  getSingleBlock: getSingleBlock,
  createBlock: createBlock,
  updateBlock: updateBlock,
  removeBlock: removeBlock
};

function getAllBlock(req, res, next) {
    db.any('SELECT * FROM public.block_list')
      .then(function (data) {
        res.status(200)
          .json({
            status: 'success',
            data: data,
            message: 'Retrieved ALL Block'
          });
      })
      .catch(function (err) {
        return next(err);
      });
  }
  
function getSingleBlock(req, res, next) {
    var blockId = parseInt(req.params.id);
    db.any('SELECT bk.* FROM block_list bkl INNER JOIN block bk ON bkl.id = bk.block_list_id where bkl.id = $1', blockId)
      .then(function (data) {
        res.status(200)
          .json({
            status: 'success',
            data: data,
            message: 'Retrieved any Block'
          });
      })
      .catch(function (err) {
        return next(err);
      });
  }

  function createBlock(req, res, next) {
    req.body.age = parseInt(req.body.age);
    db.none('insert into pups(name, breed, age, sex)' +
        'values(${name}, ${breed}, ${age}, ${sex})',
      req.body)
      .then(function () {
        res.status(200)
          .json({
            status: 'success',
            message: 'Inserted one puppy'
          });
      })
      .catch(function (err) {
        return next(err);
      });
  }

  function updateBlock(req, res, next) {
    db.none('update block_list set name=$1, breed=$2, age=$3, sex=$4 where id=$5',
      [req.body.name, req.body.breed, parseInt(req.body.age),
        req.body.sex, parseInt(req.params.id)])
      .then(function () {
        res.status(200)
          .json({
            status: 'success',
            message: 'Updated puppy'
          });
      })
      .catch(function (err) {
        return next(err);
      });
  }

  function removeBlock(req, res, next) {
    var blockId = parseInt(req.params.id);
    db.result('delete from public.block where id = $1', blockId)
      .then(function (result) {
        /* jshint ignore:start */
        res.status(200)
          .json({
            status: 'success',
            message: `Removed ${result.rowCount} Block`
          });
        /* jshint ignore:end */
      })
      .catch(function (err) {
        return next(err);
      });
  }


