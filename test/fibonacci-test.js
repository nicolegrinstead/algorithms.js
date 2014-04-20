var app = require('../fibonacci.js');
var assert = require("assert");

describe('Fibonacci', function(){
  it('can computer fib of 0', function(){
    var fib = app.fibonacci(0);
    
    assert.equal(0, fib);
  })

  it('can computer fib of 1', function(){
    var fib = app.fibonacci(1);
    
    assert.equal(1, fib);
  })

  it('can computer fib of 5', function(){
    var fib = app.fibonacci(5);
    
    assert.equal(5, fib);
  })

  it('can computer fib of 12', function(){
    var fib = app.fibonacci(12);
    
    assert.equal(144, fib);
  })
})
