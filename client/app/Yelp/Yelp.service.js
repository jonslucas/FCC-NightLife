'use strict';

angular.module('nightLifeApp')
  .factory('Yelp', function ($http) {

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
        });
      }
    };
  });
