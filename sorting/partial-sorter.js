//finds k smallest in o(k*n)
function findSmallestItems(items, numberOfItemsToFind){
  var smallest = [];
  for (var i=0; i < numberOfItemsToFind; i++){ 
    var minIndex = findMinIndex(items);
    smallest[i] = items[minIndex];
    items.splice(minIndex,1);
  }
  return smallest;
}

//finds k largest in o(k*n)
function findLargestItems(items, numberOfItemsToFind){
  var largest = [];
  for (var i=0; i < numberOfItemsToFind; i++){ 
    var maxIndex = findMaxIndex(items);
    largest[i] = items[maxIndex];
    items.splice(maxIndex,1);
  }
  return largest; 
}

function findMinIndex(items){
  var minIndex = null;
  for(var i=0; i< items.length; i++){ 
    if (minIndex==null || items[i] < items[minIndex]) {
      minIndex = i;
    }
  } 
  return minIndex;
}

function findMaxIndex(items){
  var maxIndex = null;
  for(var i=0; i< items.length; i++){ 
    if (maxIndex==null || items[i] > items[maxIndex]) {
      maxIndex = i;
    }
  } 
  return maxIndex;
}

exports.findSmallestItems = findSmallestItems;
exports.findLargestItems = findLargestItems;
