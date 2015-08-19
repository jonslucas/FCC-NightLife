'use strict';

angular.module('nightLifeApp')
  .controller('MainCtrl', function ($scope, $timeout, $document, Yelp) {
    $scope.search= function () {
      if(!$scope.location) { return; }
      Yelp.search($scope.location, function (err, resp) {
        if(err) { return console.error(err); }
        $scope.bars = resp.businesses;
      });

    };

    $scope.addToBars = function () {
      if(yelpData.length>0) {
        $scope.bars.push(yelpData.shift());
      }

    };

  });
