//sorts in o(n^2) worst case
function bubbleSort(itemsToSort){
  while (!sorted(itemsToSort)){ 
    for (var i = 1; i < itemsToSort.length; i++ ){
      if (itemsToSort[i-1] > itemsToSort[i]){
        var temp = itemsToSort[i-1];
        itemsToSort[i-1] = itemsToSort[i];
        itemsToSort[i] = temp;
      } 
    }
  }
  return itemsToSort;
}

function sorted(items){ 
  for (var i = 1; i < items.length; i++ ){
    if (items[i-1] > items[i]){
      return false; 
    } 
  }
  return true;
}

exports.bubbleSort = bubbleSort;
