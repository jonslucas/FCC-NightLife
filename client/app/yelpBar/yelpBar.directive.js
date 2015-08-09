'use strict';

angular.module('nightLifeApp')
  .directive('yelpBar', function () {
    return {
      templateUrl: 'app/yelpBar/yelpBar.html',
      restrict: 'EA',
      link: function (scope, element, attrs) {
      }
    };
  });