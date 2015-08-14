'use strict';

var _ = require('lodash');
var yConfig = require('../../config/environment').yelp;
var yelp = require('yelp').createClient(yConfig);


exports.search = function(req, res) {
  console.log('search called');
  console.log('req.query: '+JSON.stringify(req.query));
  yelp.search({term: 'night life', location: req.query.zip}, function(err, bars){
    if(err) { return handleError(res, err); }
    if(!bars) { return res.send(404); }
    return res.json(bars);
  });
};


// Get list of yelps
exports.index = function(req, res) {

};

// Get a single yelp
exports.show = function(req, res) {

};

// Creates a new yelp in the DB.
exports.create = function(req, res) {

};

// Updates an existing yelp in the DB.
exports.update = function(req, res) {

};

// Deletes a yelp from the DB.
exports.destroy = function(req, res) {

};

function handleError(res, err) {
  return res.send(500, err);
}
