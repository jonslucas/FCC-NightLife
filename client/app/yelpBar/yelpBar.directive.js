'use strict';

var ctrl = function($scope) {
  var ctrl = this;
  ctrl.going = 0;
  //console.log($scope.bar);
  ctrl.checkIn = function() {
    ctrl.going += 1;
  };
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
