'use strict';

describe('Service: Yelp', function () {

  // load the service's module
  beforeEach(module('nightLifeApp'));

  // instantiate service
  var Yelp;
  beforeEach(inject(function (_Yelp_) {
    Yelp = _Yelp_;
  }));

  it('should do something', function () {
    expect(!!Yelp).toBe(true);
  });

});
