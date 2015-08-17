'use strict';

angular.module('nightLifeApp')
  .controller('MainCtrl', function ($scope, $timeout, Yelp) {
    $scope.bars = [];
    var yelpData = null;
    $scope.search= function () {
      if(!$scope.location) { return; }
      Yelp.search($scope.location, function (err, resp) {
        if(err) { return console.error(err); }
        yelpData = resp.businesses;
        //for(var i =0; i<yelpData.length; i++) {
        //  console.log('i: '+i);
        //  $timeout(function () {
        //    $scope.bars.push(yelpData.shift());
        //
        //  }, 1000);
        //}

      });

    };
    $scope.addToBars = function () {
      if(yelpData.length>0) {
        $scope.bars.push(yelpData.shift());
      }

    };

  });
