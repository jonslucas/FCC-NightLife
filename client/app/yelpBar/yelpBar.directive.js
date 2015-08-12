'use strict';

var ctrl = function($scope) {
  var ctrl = this;
  ctrl.added = false;
  ctrl.going = 0;
  //console.log($scope.bar);
  ctrl.checkIn = function() {
    ctrl.added = true;
    ctrl.going += 1;
  };
  ctrl.remove = function () {
    ctrl.added = false;
    ctrl.going -=1;
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
