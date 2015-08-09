'use strict';

angular.module('nightLifeApp')
  .controller('MainCtrl', function ($scope, Yelp) {
    Yelp.search('28739', function (err, resp) {
      if(err) { return console.error(err); }
      console.log(JSON.stringify(resp));
      $scope.bars = resp.businesses;
    });
    $scope.message = 'Hello';
  });
