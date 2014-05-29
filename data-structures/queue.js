function LinkedListItem (itemValue, nextItem){ 
  this.itemValue = itemValue;
  this.nextItem = nextItem;
}

function LinkedList(headValue){ 
  this.headItem = new LinkedListItem(headValue,null);
} 

//o(n) complexity
LinkedList.prototype.enqueueItem = function(itemValue){
  //get last item
  var itemPointer = this.headItem;
  var newItem = new LinkedListItem(itemValue, null);

  if(itemPointer){
    while (itemPointer.nextItem != null){
      itemPointer = itemPointer.nextItem;
    }
    itemPointer.nextItem = newItem;
  } else { //empty list
    this.headItem = newItem;
  }
}

//o(1) complexity
LinkedList.prototype.dequeueItem = function(){ 
  var dequeuedItem = this.headItem; 
  this.headItem = dequeuedItem.nextItem;

  return dequeuedItem.itemValue;
}

//o(n) complexity
LinkedList.prototype.findLength = function(){ 
  if (!this.headItem) { 
    return 0;
  }

  var len=1 ;
  var itemPointer = this.headItem;
  while (itemPointer.nextItem != null){
    itemPointer = itemPointer.nextItem;
    len++;
  } 
  return len;
}

//o(n) complexity
LinkedList.prototype.reverse = function(){ 
  var previousItem = null; 
  var itemPointer = this.headItem;

  while(itemPointer.nextItem){ 
    var next = itemPointer.nextItem;
    itemPointer.nextItem = previousItem; 

    previousItem = itemPointer;
    itemPointer = next;
  }

  itemPointer.nextItem = previousItem;
  this.headItem = itemPointer;
}

//o(n) coplexity
LinkedList.prototype.findMedian = function(){ 
  var middlePointer = this.headItem; 
  var skippingPointer = this.headItem;

  while(skippingPointer.nextItem && skippingPointer.nextItem.nextItem){ 
    middlePointer = middlePointer.nextItem;
    skippingPointer = skippingPointer.nextItem.nextItem;
  }

  return even(this.findLength()) ? average(middlePointer.itemValue, middlePointer.nextItem.itemValue) : middlePointer.itemValue;
}

function average(){ 
  var total = 0; 
  for (var i = 0; i < arguments.length; i++){ 
    total += arguments[i];
  }
  return total/arguments.length;
}

function even(number){
  return number % 2 ==0 
}

module.exports = LinkedList;
