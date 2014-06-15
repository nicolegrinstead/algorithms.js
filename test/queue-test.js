var Queue = require('../data-structures/queue.js');
var assert = require("assert");

describe('Queue', function(){
  it('can create a new list', function(){
    var queueUnderTest = new Queue(1);
    
    assert.equal(1, queueUnderTest.headItem.itemValue);
    assert.equal(null, queueUnderTest.headItem.nextItem);
    assert.equal(1, queueUnderTest.findLength());
  })

  it('can enqueue an item', function(){
    var queueUnderTest = new Queue(1);
    queueUnderTest.enqueueItem(2);
    
    assert.equal(2, queueUnderTest.headItem.nextItem.itemValue);
    assert.equal(2, queueUnderTest.findLength());
  })

  it('can dequeue an item', function(){
    var queueUnderTest = new Queue(1);
    queueUnderTest.enqueueItem(2);
    var dequeued = queueUnderTest.dequeueItem();
    
    assert.equal(dequeued, 1)
    assert.equal(null, queueUnderTest.headItem.nextItem);
    assert.equal(2, queueUnderTest.headItem.itemValue);
    assert.equal(1, queueUnderTest.findLength());
  })

  it('can dequeue all items', function(){
    var queueUnderTest = new Queue(1);
    queueUnderTest.enqueueItem(2);
    queueUnderTest.dequeueItem();
    queueUnderTest.dequeueItem();
    
    assert.equal(null, queueUnderTest.headItem);
    assert.equal(0, queueUnderTest.findLength());
  })

  it('can enqueue an item after all items have been dequeued', function(){
    var queueUnderTest = new Queue(1);
    queueUnderTest.dequeueItem();
    queueUnderTest.enqueueItem(3);
    
    assert.equal(3, queueUnderTest.headItem.itemValue);
    assert.equal(null, queueUnderTest.headItem.nextItem)
    assert.equal(1, queueUnderTest.findLength());
  })

  it('can reverse a list', function(){ 
    var listToReverse = new Queue(1);
    listToReverse.enqueueItem(2);
    listToReverse.enqueueItem(3);

    listToReverse.reverse();
    
    assert.equal(3, listToReverse.headItem.itemValue);
    assert.equal(2, listToReverse.headItem.nextItem.itemValue);
    assert.equal(1, listToReverse.headItem.nextItem.nextItem.itemValue);

    assert.equal(3, listToReverse.findLength());
  })

  it('can find the median of an odd length list', function(){ 
    var queueUnderTest = new Queue(1);
    queueUnderTest.enqueueItem(2);
    queueUnderTest.enqueueItem(3);
    
    assert.equal(2, queueUnderTest.findMedian());
  })

  it('can find the median of an even length list', function(){ 
    var queueUnderTest = new Queue(1);
    queueUnderTest.enqueueItem(2);
    queueUnderTest.enqueueItem(3);
    queueUnderTest.enqueueItem(4);
    
    assert.equal(2.5, queueUnderTest.findMedian());
  })
})

