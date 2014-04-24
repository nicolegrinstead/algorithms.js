var insertionSorter = require('../insertion-sorter.js');
var bubbleSorter = require('../bubble-sorter.js');
var quickSorter = require('../quick-sorter.js');
var mergeSorter = require('../merge-sorter.js');
var partialSorter = require('../partial-sorter.js');
var random = require('../random.js');
var assert = require("assert");

var sorted = [];
var unsorted = [];

describe('Sorters', function(){ 
  beforeEach(function(){
    unsorted = [4,5,3,14,7,0,9,10,44,1,13,77,34,26];
    sorted = [ 0, 1, 3, 4, 5, 7, 9, 10, 13, 14, 26, 34, 44, 77 ];
  })

  it ('insertion sort should sort an array of unsorted items', function(){ 
    var insertionReturn = insertionSorter.insertionSort(unsorted);
    assert.deepEqual(insertionReturn, sorted);
  })

  it ('bubble sort should sort an array of unsorted items', function(){ 
    var bubbleReturn = bubbleSorter.bubbleSort(unsorted);
    assert.deepEqual(bubbleReturn, sorted);
  })

  it ('quick sort should sort an array of unsorted items', function(){ 
    var quickReturn = quickSorter.quickSort(unsorted);
    assert.deepEqual(quickReturn, sorted);
  })

  it ('merge sort should sort an array of unsorted items', function(){ 
    var mergeReturn = mergeSorter.mergeSort(unsorted);
    assert.deepEqual(mergeReturn, sorted);
  })

  it('partial sort should be able to find the k smallest items', function(){ 
    var randomK = random.getRandomInt(sorted.length);
    
    var partialSortReturn = partialSorter.findSmallestItems(unsorted, randomK);
    assert.deepEqual(partialSortReturn, sorted.slice(0, randomK));
  })

  it('partial sort should be able to find the k largest items', function(){ 
    var randomK = random.getRandomInt(sorted.length);
    
    var partialSortReturn = partialSorter.findLargestItems(unsorted, randomK);
    var expected = sorted.slice(sorted.length - randomK, sorted.length).reverse()

    assert.deepEqual(partialSortReturn, expected);
  })
})
