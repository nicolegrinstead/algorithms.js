var app = require('../etc/summation.js');
var assert = require("assert");

describe('Summation', function(){
  it('can  of compute the summation of all numbers up to 10', function(){
    assert.equal(55, app.iterativeSum(10));
    assert.equal(55, app.memoizedIterativeSum(10));
    assert.equal(55, app.gaussianSum(10));
    assert.equal(55, app.recursiveSum(10));
    assert.equal(55, app.memoizedRecursiveSum(10));
  })

  it('retuns one for summation of one', function(){
    assert.equal(1, app.iterativeSum(1));
    assert.equal(1, app.gaussianSum(1));
    assert.equal(1, app.recursiveSum(1));
  })

})
