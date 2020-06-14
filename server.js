const PORT = 3000;

// Get files
const routes = require('./routes/routes.js');

// GET Middlewares
const express = require('express');
const session = require('express-session');
const mysql = require('mysql');
const iniparser = require('iniparser');
const configDB = iniparser.parseSync('DB.ini'); // Get my DB configuration from DB.ini
const bodyparser = require('body-parser');

var app = express();

// Connection to my BDD
var db = mysql.createConnection({
  host:configDB['dev']['host'],
  user:configDB['dev']['user'],
  password:configDB['dev']['password'],
  database:configDB['dev']['database'],
  multipleStatements: true
});

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public')); // Means that /public folder contain my statics elements
app.use(session({secret: "Shh, its a secret!", resave: true, saveUninitialized: true}));;
app.use(bodyparser());

// Connect to database
db.connect( (err) => {
  if (err) console.log(err);
  else routes.routes(app, db);
});

app.listen(PORT);
console.log('Server running : http://localhost:'+PORT+'/')
