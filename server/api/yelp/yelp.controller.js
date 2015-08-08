'use strict';

var _ = require('lodash');
var Yelp = require('./yelp.model');
var yConfig = require('../../config/environment').yelp;
//console.log('ycConfig: '+JSON.stringify(yConfig));
var yelp = require('yelp').createClient(yConfig);

//console.log('yelp: '+JSON.stringify(yelp));
yelp.search({term: 'bar', location: '28739'}, function(err, bars){
  if(err) { return console.log(err); }
  if(!bars) { return console.log(404); }
  //return res.json(bars);
  return console.log('bars: '+JSON.stringify(bars));
});

exports.search = function(req, res) {
  console.log('req.params.zip: '+req.params.zip);
  yelp.search({term: 'bar', location: '28739'}, function(err, bars){
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
