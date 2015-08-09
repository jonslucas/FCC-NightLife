'use strict';

angular.module('nightLifeApp')
  .factory('Yelp', function ($http) {

    //example url:
    //http://maps.googleapis.com/maps/api/geocode/json?latlng=40.714224,-73.961452


    var get_coords = function() {
      var lat,
          long;
      navigator.geolocation.getCurrentPosition(function (position) {
        console.log(position.coords.latitude);
        console.log(position.coords.longitude);
        lat = position.coords.latitude;
        long = position.coords.longitude;
      });
      return {
        lat:lat,
        lon: long
      };
    };

    // Public API here
    return {
      search: function(location, cb) {
        $http({
          method: 'get',
          url: '/api/yelp/',
          params: {
            zip: location
          }
        }).success(function(data){
          cb(null, data);
        }).error(function (err) {
          cb(err);
        })
      }
    };
  });
