//sorts in o(n^2) worst case
function insertionSort(itemsToSort){
	for (var i = 0; i < itemsToSort.length; i++){
		for(var j = i+1; j< itemsToSort.length; j++){ 
			if (itemsToSort[i] > itemsToSort[j]){
				var temp = itemsToSort[i];
				itemsToSort[i] = itemsToSort[j]; 
				itemsToSort[j] = temp;
			}
		}
	}
	return itemsToSort;
}

exports.insertionSort = insertionSort;
