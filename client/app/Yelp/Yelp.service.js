'use strict';

angular.module('nightLifeApp')
  .factory('Yelp', function ($http) {
    // Service logic
    // ...
    navigator.geolocation.getCurrentPosition(function (position) {
      console.log(position.coords.latitude);
      console.log(position.coords.longitude);
    });
    var meaningOfLife = 42;

    // Public API here
    return {
      someMethod: function () {
        return meaningOfLife;
      }
    };
  });
