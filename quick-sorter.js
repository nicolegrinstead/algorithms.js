//sorts in o(n log(n)) worst case
function quickSort(itemsToSort){
	if (itemsToSort.length <= 1){ // empty or list of one is sorted
		return itemsToSort; 
	}

	//find random pivot point
	var pivot = itemsToSort[getRandomInt(itemsToSort.length)];
	var leftArray = [];
	var rightArray = [];

	for(var i = 0; i < itemsToSort.length; i++){ 
		if (itemsToSort[i] < pivot) { 
			leftArray.push(itemsToSort[i]);
		} else { 
			rightArray.push(itemsToSort[i]);
		}
	}

	return quickSort(leftArray).concat(quickSort(rightArray));
}

function getRandomInt (max) {
    return Math.floor(Math.random() * (max + 1)) ;
}

exports.quickSort = quickSort;
