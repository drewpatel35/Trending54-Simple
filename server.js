var express = require('express');
var bodyParser = require('body-parser');
var mysql = require('mysql2');
var path = require('path');
var connection = mysql.createConnection({
  host: '',
  user: '',
  password: '',
  database: 'db'
});

connection.connect;

var app = express();

// set uyp ejs view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.urlencoded());
app.use(express.static(__dirname + '..public'));

app.get('/', function(reg,res) {
    res.render('index', { title: 'Users table'})
});

app.get('/signup', function(req, res) {
    res.send({'message': 'Users table updated'}) 
});