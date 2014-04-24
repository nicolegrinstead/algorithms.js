//sorts in o(n log(n)) worst case
function mergeSort(itemsToSort){
  if(itemsToSort.length <= 1){ //list of 1 or less is sorted
    return itemsToSort; 
  }

  var middlePoint = Math.floor(itemsToSort.length/2);
  var leftArray = itemsToSort.slice(0, middlePoint);
  var rightArray = itemsToSort.slice(middlePoint, itemsToSort.length);

   return merge(mergeSort(leftArray), mergeSort(rightArray));
}

//o(n) to merge each time
function merge(arrayOne, arrayTwo){ 
  var merged = [];
  //while either arary is not empty
  while(arrayOne.length > 0 && arrayTwo.length > 0){ 
    //add the smaller of the first elements into merged
    if (arrayOne[0] < arrayTwo[0] ){ 
      merged.push(arrayOne[0]);
      arrayOne.shift();
    } else { 
      merged.push(arrayTwo[0]);
      arrayTwo.shift();
    }
  }

  merged = merged.concat(arrayOne).concat(arrayTwo);
  return merged;
}

exports.mergeSort = mergeSort;
