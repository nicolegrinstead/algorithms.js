var app = require('../etc/fibonacci.js');
var assert = require("assert");

describe('Fibonacci', function(){
  it('can compute fib of 0', function(){
    var fib = app.fibonacci(0);
    
    assert.equal(0, fib);
  })

  it('can compute fib of 1', function(){
    var fib = app.fibonacci(1);
    
    assert.equal(1, fib);
  })

  it('can compute fib of 5', function(){
    var fib = app.fibonacci(5);
    
    assert.equal(5, fib);
  })

  it('can compute fib of 12', function(){
    var fib = app.fibonacci(12);
    
    assert.equal(144, fib);
  })

  it ('can run faster if its been memoized', function(){ 
    var fibMemo = app.memoizedFib(20);

    assert.equal(6765,fibMemo);
  })
})
