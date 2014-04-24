var LinkedList = require('../data-structures/linked-list.js');
var assert = require("assert");

describe('Linked List', function(){
  it('can create a new list', function(){
    var listUnderTest = new LinkedList(1);
    
    assert.equal(1, listUnderTest.headItem.itemValue);
    assert.equal(null, listUnderTest.headItem.nextItem);
    assert.equal(1, listUnderTest.findLength());
  })

  it('can enqueue an item', function(){
    var listUnderTest = new LinkedList(1);
    listUnderTest.enqueueItem(2);
    
    assert.equal(2, listUnderTest.headItem.nextItem.itemValue);
    assert.equal(2, listUnderTest.findLength());
  })

  it('can dequeue an item', function(){
    var listUnderTest = new LinkedList(1);
    listUnderTest.enqueueItem(2);
    var dequeued = listUnderTest.dequeueItem();
    
    assert.equal(dequeued, 1)
    assert.equal(null, listUnderTest.headItem.nextItem);
    assert.equal(2, listUnderTest.headItem.itemValue);
    assert.equal(1, listUnderTest.findLength());
  })

  it('can dequeue all items', function(){
    var listUnderTest = new LinkedList(1);
    listUnderTest.enqueueItem(2);
    listUnderTest.dequeueItem();
    listUnderTest.dequeueItem();
    
    assert.equal(null, listUnderTest.headItem);
    assert.equal(0, listUnderTest.findLength());
  })

  it('can enqueue an item after all items have been dequeued', function(){
    var listUnderTest = new LinkedList(1);
    listUnderTest.dequeueItem();
    listUnderTest.enqueueItem(3);
    
    assert.equal(3, listUnderTest.headItem.itemValue);
    assert.equal(null, listUnderTest.headItem.nextItem)
    assert.equal(1, listUnderTest.findLength());
  })

  it('can reverse a list', function(){ 
    var listToReverse = new LinkedList(1);
    listToReverse.enqueueItem(2);
    listToReverse.enqueueItem(3);

    listToReverse.reverse();
    
    assert.equal(3, listToReverse.headItem.itemValue);
    assert.equal(2, listToReverse.headItem.nextItem.itemValue);
    assert.equal(1, listToReverse.headItem.nextItem.nextItem.itemValue);

    assert.equal(3, listToReverse.findLength());
  })

  it('can find the median of an odd length list', function(){ 
    var listUnderTest = new LinkedList(1);
    listUnderTest.enqueueItem(2);
    listUnderTest.enqueueItem(3);
    
    assert.equal(2, listUnderTest.findMedian());
  })

  it('can find the median of an even length list', function(){ 
    var listUnderTest = new LinkedList(1);
    listUnderTest.enqueueItem(2);
    listUnderTest.enqueueItem(3);
    listUnderTest.enqueueItem(4);
    
    assert.equal(2.5, listUnderTest.findMedian());
  })
})

