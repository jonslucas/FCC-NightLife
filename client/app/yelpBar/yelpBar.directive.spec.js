'use strict';

describe('Directive: yelpBar', function () {

  // load the directive's module and view
  beforeEach(module('nightLifeApp'));
  beforeEach(module('app/yelpBar/yelpBar.html'));

  var element, scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<yelp-bar></yelp-bar>');
    element = $compile(element)(scope);
    scope.$apply();
    expect(element.text()).toBe('this is the yelpBar directive');
  }));
});