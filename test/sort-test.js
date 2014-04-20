var insertionSorter = require('../insertion-sorter.js');
var bubbleSorter = require('../bubble-sorter.js');
var assert = require("assert");
var unsorted = [4,5,3,14,7,0,9,10,44,1,13,77,34,26];
var sorted = [ 0, 1, 3, 4, 5, 7, 9, 10, 13, 14, 26, 34, 44, 77 ];

describe('Sorters', function(){ 
	it ('insertion sort should sort an array of unsorted items', function(){ 
		var insertionReturn = insertionSorter.insertionSort(unsorted);
		assert.deepEqual(sorted, insertionReturn);
	})

	it ('bubble sort should sort an array of unsorted items', function(){ 
		var bubbleReturn = bubbleSorter.bubbleSort(unsorted);
		assert.deepEqual(sorted, bubbleReturn);
	})
})
