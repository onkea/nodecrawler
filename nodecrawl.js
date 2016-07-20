var myconnect = require('../credentials/myconnect.js');
var dateFormat = require('dateformat');
var now = new Date();
var request = require('request');

/**
 * Handle multiple requests at once
 * @param urls [array]
 * @param callback [function]
 * @requires request module for node ( https://github.com/mikeal/request )
 */
var __request = function (urls, callback) {

	'use strict';

	var results = {}, t = urls.length, c = 0,
		handler = function (error, response, body) {

			var url = response.request.uri.href;

			results[url] = { error: error, response: response, body: body };

			if (++c === urls.length) { callback(results); }

		};

	while (t--) { request(urls[t], handler); }
};

// Get the current date with leading zeros for mysql compare ex. 2015-12-28
currentcrawl = dateFormat(now, "yyyy-mm-dd");

// Open connection to DB
con.connect();

// getdomains = 'SELECT url, id, lastcraw FROM list WHERE lastcrawl > ' + currentcrawl +  ' LIMIT 100';
getdomains = 'SELECT url FROM list LIMIT 100';

con.query(getdomains, function(err, rows, fields) {
	if(err) throw err;



// console.log(rows.length);
// console.log(rows[0].url);

rows.forEach(function(value){
  console.log(value.url);
request('http://' + value.url, function (error, response, body) {
  if (!error && response.statusCode == 200) {
    console.log(body) // Show the HTML for the Google homepage.
  
// connection.query('UPDATE list SET lastcrawl = ?,source=? WHERE id = ?', [lastcrawl,body,value.id], function(err, result) {}

}
});




});

con.end();

