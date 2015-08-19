'use strict';

var ctrl = function($scope) {
  var ctrl = this;
  ctrl.added = false;
  ctrl.going = 0;
  ctrl.goingMsg = 'Check-in';
  ctrl.star = ($scope.bar.rating>4);
  ctrl.checkIn = function() {
    if(ctrl.added===true) {
      ctrl.going -=1;
      ctrl.goingMsg = 'Check-in';
    }
    else {
      ctrl.going += 1;
      ctrl.goingMsg = 'Check-out';
    }
    ctrl.added = ctrl.added!==true;
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
