var express  = require('express'),
    path     = require('path'),
    cons     = require('consolidate'),
    dust     = require('dustjs-helpers'),
    pg       = require('pg'),
    bodyParser = require('body-parser'),
    app      = express();


// const connection = "postgres://paullohdiniz:admin1234@localhost/sasasas";

app.engine('dust', cons.dust);
app.set('view engine', 'dust');
app.set('views', __dirname + '/views');

app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended : false}));

app.get('/', function(req, res){
    res.render('index');
});

app.listen(3001, function(){
    console.log('Server Started on Port 3001');
});

const { Pool, Client } = require('pg')

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'financeira_db',
  password: 'Futurama2000',
  port: 5432,
});

pool.query('SELECT NOW()', (err, res) => {
  console.log(err, res)
  pool.end()
});

const client = new Client({
  user: 'postgres',
  host: 'localhost',
  database: 'financeira_db',
  password: 'Futurama2000',
  port: 5432,
});
client.connect()

client.query('SELECT NOW()', (err, res) => {
  console.log(err, res)
  client.end()
});