'use strict';

angular.module('nightLifeApp')
  .controller('MainCtrl', function ($scope, $timeout, Yelp) {
    $scope.bars = [];
    var yelpData = null;
    var delayAddTo = function(bar) {
      //console.log('Inside delayAddTo');
      var b = bar;
      $scope.bars.push(b);
    };
    $scope.search= function () {
      if(!$scope.location) { return; }
      Yelp.search($scope.location, function (err, resp) {
        if(err) { return console.error(err); }
        yelpData = resp.businesses;
        var bar = yelpData.shift(),
          start = yelpData.length,
              i = 0;
        delayAddTo(bar);
        for(i; i<start; i++) {
          //console.log('i: '+i);
          $timeout(delayAddTo(yelpData.shift()), 5000);
        }

      });

    };

    $scope.addToBars = function () {
      if(yelpData.length>0) {
        $scope.bars.push(yelpData.shift());
      }

    };

  });
