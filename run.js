var mrequest = require('./mrequest.js');
var config = require('../credentials/config.json');
var mysql = require('mysql');

var con = mysql.createConnection({
    host: config.myhost,
    user: config.myuser,
    password: config.mypassword,
    database: config.mydatabase
});

con.connect();

// Get the current date with leading zeros for mysql compare ex. 2015-12-28
currentcrawl = dateFormat(now, "yyyy-mm-dd");

// SQL for getting urls from the database
getdomains = 'SELECT url FROM list LIMIT 100';

// Run the SELECT query on mySQL database and get results or return err
con.query(getdomains, function(err, rows, fields) {
	if(err) throw err;
