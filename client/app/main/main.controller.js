'use strict';

angular.module('nightLifeApp')
  .controller('MainCtrl', function ($scope, Yelp) {
    console.log('search: '+Yelp.getData());
    $scope.search= function () {
      if(!$scope.location) { return; }
      Yelp.storeData($scope.location);
      console.log('inner_search: '+Yelp.getData());
      Yelp.search($scope.location, function (err, resp) {
        if(err) { return console.error(err); }
        $scope.bars = resp.businesses;
      });

    };

  });
