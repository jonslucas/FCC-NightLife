'use strict';

angular.module('nightLifeApp')
  .controller('MainCtrl', function ($scope, Yelp) {
    $scope.search= function () {
      if(!$scope.location) { return; }
      console.log('location: '+$scope.location);
      Yelp.search($scope.location, function (err, resp) {
        if(err) { return console.error(err); }
        $scope.bars = resp.businesses;
      });
    };
  });
