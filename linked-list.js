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

module.exports = LinkedList;
