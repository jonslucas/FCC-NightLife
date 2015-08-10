'use strict';

var ctrl = function($scope) {
  console.log($scope.bar);
};

angular.module('nightLifeApp')
  .directive('yelpBar', function () {
    return {
      templateUrl: 'app/yelpBar/yelpBar.html',
      restrict: 'EA',
      scope: {
        bar: '=data'
      },
      controller: ctrl,
      controllerAs: 'ctrl'
    };
  });
