'use strict';

angular.module('nightLifeApp')
  .controller('MainCtrl', function ($scope, $timeout, Yelp) {
    $scope.bars = [];
    $scope.search= function () {
      if(!$scope.location) { return; }
      Yelp.search($scope.location, function (err, resp) {
        if(err) { return console.error(err); }
        $scope.bars = resp.businesses;
      });
    };
  });
