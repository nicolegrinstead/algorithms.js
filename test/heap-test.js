var Heap = require('../data-structures/heap.js');
var assert = require("assert");

describe('Heap', function(){
  it('can create a new heap', function(){
    var heapUnderTest = new Heap(1);
    
    assert.equal(1, heapUnderTest.contents[0]);
    assert.equal(1, heapUnderTest.contents.length);
  })

  it('can add to a new heap', function(){
    var heapUnderTest = new Heap(1);                            //      2
    heapUnderTest.add(2);                                       //     /
                                                                //    1
    assert.equal(2, heapUnderTest.contents[0]);
    assert.equal(1, heapUnderTest.contents[1]);
    assert.equal(2, heapUnderTest.contents.length);
  })

  it('can add many new items and maintian balance', function(){
    var heapUnderTest = new Heap(1);                            //          7
    heapUnderTest.add(2);                                       //        /   \
    heapUnderTest.add(3);                                       //      4      6
    heapUnderTest.add(4);                                       //     / \    / \
    heapUnderTest.add(5);                                       //    1   3  2   5
    heapUnderTest.add(6);
    heapUnderTest.add(7);
                    
    assert.deepEqual([7,4,6,1,3,2,5], heapUnderTest.contents);
  })

  it('can add many new items and maintian balance using add all', function(){
    var heapUnderTest = new Heap(1);
    heapUnderTest.addAll([2,3,4,5,6,7]);
                     
    assert.deepEqual([7,4,6,1,3,2,5], heapUnderTest.contents);
  })

})

