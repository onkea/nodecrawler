var config = require('../credentials/config.json');
var mysql = require('mysql');

console.log(config.mypassword);

var con = mysql.createConnection({
    host: config.myhost,
    user: config.myuser,
    password: config.mypassword,
    database: config.mydatabase
});

con.connect();

