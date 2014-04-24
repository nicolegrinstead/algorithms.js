function StackItem (itemValue, previousItem){ 
  this.itemValue = itemValue;
  this.previousItem = previousItem;
}

function Stack(itemValue){ 
  this.topItem = new StackItem(itemValue,null);
} 

//o(1) complexity
Stack.prototype.pushItem = function(itemValue){
  var nextItem = new StackItem(itemValue, this.topItem);
  this.topItem = nextItem;
}

//o(1) complexity
Stack.prototype.popItem = function(){
  var poppedValue = this.topItem.itemValue;
  var secondToTopItem = this.topItem.previousItem;
  this.topItem = secondToTopItem;

  return poppedValue;
}

//o(n) complexity
Stack.prototype.findLength = function(){ 
  if (!this.topItem) { 
    return 0;
  }

  var len=1 ;
  var itemPointer = this.topItem;
  while (itemPointer.previousItem != null){
    itemPointer = itemPointer.previousItem;
    len++;
  } 
  return len;
}

module.exports = Stack;
