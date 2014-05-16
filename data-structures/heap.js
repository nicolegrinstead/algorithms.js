function Heap(node){ 
  this.contents = node ? [node] : [];
} 

// o(log(n)) complexity - height of tree
Heap.prototype.add = function(node){
  this.contents.push(node);
  this.heapify(this.contents.length-1); 
}

Heap.prototype.addAll = function(nodes){
  for(var i=0; i<nodes.length; i++){ 
    this.add(nodes[i]);
  } 
}

Heap.prototype.heapify = function(index){
  //item parent less then item
  if (this.contents[index] > this.contents[parent(index)]){
    var swapValue = this.contents[index];

    this.contents[index] = this.contents[parent(index)];
    this.contents[parent(index)] = swapValue;

    this.heapify(parent(index));
  }

}
//Have to get a little funny with the parent child equasions b/c it's 0 based index instead of 1
function parent(index){ 
  return Math.floor((index+1)/2)-1;
}

function left(index){ 
  return (2 * (index+1))-1;
}

function right(index){ 
  return (2 * (index+1)) + 1;
}

module.exports = Heap;
