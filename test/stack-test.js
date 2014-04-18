var Stack = require('../stack.js');
var assert = require("assert");

describe('Stack', function(){
  it('can create a new stack', function(){
    var stackUnderTest = new Stack(1);
    
    assert.equal(1, stackUnderTest.topItem.itemValue);
    assert.equal(null, stackUnderTest.topItem.previousItem);
    assert.equal(1, stackUnderTest.findLength());
  })

  it('can push an item', function(){
    var stackUnderTest = new Stack(1);
    stackUnderTest.pushItem(2);

    assert.equal(2, stackUnderTest.topItem.itemValue);
    assert.equal(1, stackUnderTest.topItem.previousItem.itemValue);
    assert.equal(2, stackUnderTest.findLength());
  })

  it('can pop an item', function(){
    var stackUnderTest = new Stack(1);
    stackUnderTest.pushItem(2);
    var pop = stackUnderTest.popItem();

    assert.equal(2, pop);
    assert.equal(1, stackUnderTest.topItem.itemValue);
    assert.equal(null, stackUnderTest.topItem.previousItem);
    assert.equal(1, stackUnderTest.findLength());
  })

  it('can pop all itmes', function(){ 
    var stackUnderTest = new Stack(1);
    stackUnderTest.pushItem(2);
    var pop = stackUnderTest.popItem();
    var pop2 = stackUnderTest.popItem();

    assert.equal(2, pop);
    assert.equal(1, pop2);
    assert.equal(0, stackUnderTest.findLength());
    assert.equal(null, stackUnderTest.topItem);
  })

  it('can push an item after everything has been popped', function(){ 
    var stackUnderTest = new Stack(1);
    stackUnderTest.popItem();
    stackUnderTest.pushItem(2);

    assert.equal(2, stackUnderTest.topItem.itemValue);
    assert.equal(null, stackUnderTest.topItem.previousItem);
    assert.equal(1, stackUnderTest.findLength());
  })

})

