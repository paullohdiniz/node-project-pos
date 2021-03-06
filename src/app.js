var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var mongoose = require('mongoose');

///Mongoo
///paullohdiniz Futurama2000 Cluster0
///mongodb+srv://paullohdiniz:Futurama2000@cluster0-kmhgx.mongodb.net/test?retryWrites=true
//mongoose.connect('mongodb://paullohdiniz:Futurama2000@clusterpos-shard-00-00-fyf3v.mongodb.net:27017,clusterpos-shard-00-01-fyf3v.mongodb.net:27017,clusterpos-shard-00-02-fyf3v.mongodb.net:27017/admin?replicaSet=ClusterPos-shard-0&ssl=true');

// const MongoClient = require('mongodb').MongoClient;
// const uri = "mongodb://paullohdiniz:Futurama2000@clusterpos-shard-00-00-fyf3v.mongodb.net:27017,clusterpos-shard-00-01-fyf3v.mongodb.net:27017,clusterpos-shard-00-02-fyf3v.mongodb.net:27017/admin?replicaSet=ClusterPos-shard-0&ssl=true";
// const client = new MongoClient(uri, { useNewUrlParser: true });
// client.connect(err => {
//   const collection = client.db("mongodb-node-pos").collection("blockchaindb");
//  // perform actions on the collection object
//   client.close();
// });
//Carrega os models
var Blockchain = require('./models/blockchain')

//Carrega as rotas
var indexRouter = require('./index');
var usersRouter = require('./routes/users');
var blockRouter = require('./routes/block-router');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/api/blockschair', blockRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;

