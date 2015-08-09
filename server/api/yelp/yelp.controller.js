'use strict';

var _ = require('lodash');
var Yelp = require('./yelp.model');
var yConfig = require('../../config/environment').yelp;
var yelp = require('yelp').createClient(yConfig);


exports.search = function(req, res) {
  console.log('search called');
  console.log('req.query: '+JSON.stringify(req.query));
  yelp.search({term: 'bar', location: req.query.zip}, function(err, bars){
    if(err) { return handleError(res, err); }
    if(!bars) { return res.send(404); }
    return res.json(bars);
  });
};


// Get list of yelps
exports.index = function(req, res) {
  Yelp.find(function (err, yelps) {
    if(err) { return handleError(res, err); }
    return res.json(200, yelps);
  });
};

// Get a single yelp
exports.show = function(req, res) {
  Yelp.findById(req.params.id, function (err, yelp) {
    if(err) { return handleError(res, err); }
    if(!yelp) { return res.send(404); }
    return res.json(yelp);
  });
};

// Creates a new yelp in the DB.
exports.create = function(req, res) {
  Yelp.create(req.body, function(err, yelp) {
    if(err) { return handleError(res, err); }
    return res.json(201, yelp);
  });
};

// Updates an existing yelp in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Yelp.findById(req.params.id, function (err, yelp) {
    if (err) { return handleError(res, err); }
    if(!yelp) { return res.send(404); }
    var updated = _.merge(yelp, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, yelp);
    });
  });
};

// Deletes a yelp from the DB.
exports.destroy = function(req, res) {
  Yelp.findById(req.params.id, function (err, yelp) {
    if(err) { return handleError(res, err); }
    if(!yelp) { return res.send(404); }
    yelp.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}
