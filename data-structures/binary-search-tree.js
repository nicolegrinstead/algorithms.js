function TreeItem (nodeValue, leftNode, rightNode){
  this.nodeValue = nodeValue;
  this.leftNode = leftNode;
  this.rightNode = rightNode;
}

function BinarySearchTree(rootValue){
  this.rootNode = new TreeItem(rootValue,null, null);
}

BinarySearchTree.prototype.bredthFirstSearch = function (searchVal){
  var queue = [];
  queue.push(this.rootNode);

  while(queue.length > 0){
    var currentNode = queue.shift();
    if (currentNode.nodeValue == searchVal){
      return true;
    }
    if (currentNode.leftNode) queue.push(currentNode.leftNode);
    if (currentNode.rightNode) queue.push(currentNode.rightNode);
  }

  return false;
}

BinarySearchTree.prototype.depthFirstSearch = function (searchVal, currentNode){
  if (!currentNode) currentNode = this.rootNode;
  if (currentNode.nodeValue == searchVal){
    return true;
  } else if (currentNode.nodeValue > searchVal && currentNode.leftNode){
    return this.depthFirstSearch(searchVal, currentNode.leftNode);
  } else if (currentNode.nodeValue < searchVal && currentNode.rightNode){
    return this.depthFirstSearch(searchVal, currentNode.rightNode);
  }
  return false;
}

BinarySearchTree.prototype.findCommonAncestor = function(value1, value2, currentNode){
  if (!currentNode) currentNode = this.rootNode;
  if (between(currentNode.nodeValue, value1, value2)){
    return currentNode.nodeValue;
  } else if (currentNode.nodeValue > value1 && currentNode.nodeValue > value2){ //traverse left
    return this.findCommonAncestor(value1, value2, currentNode.leftNode);
  } else if (currentNode.nodeValue < value1 && currentNode.nodeValue < value2){ //traverse right
    return this.findCommonAncestor(value1, value2, currentNode.rightNode);
  }
}

BinarySearchTree.prototype.findHeight = function(currentNode){
  if (!currentNode) {
    return 0;
  } else {
    return 1 + max(this.findHeight(currentNode.leftNode), this.findHeight(currentNode.rightNode));
  }
}


BinarySearchTree.prototype.traverseInOrder = function(currentNode, inOrder){
  inOrder = inOrder ? inOrder : [];
  currentNode = currentNode ? currentNode : this.rootNode;

  if (!currentNode.leftNode && !currentNode.rightNode){ //is leaf
    inOrder.push(currentNode.nodeValue);
  } else {
    this.traverseInOrder(currentNode.leftNode, inOrder);
    inOrder.push(currentNode.nodeValue);
    this.traverseInOrder(currentNode.rightNode, inOrder);
  }
  return inOrder;
}

BinarySearchTree.prototype.findMin = function(currentNode){
  currentNode = currentNode ? currentNode : this.rootNode;
  if (currentNode.leftNode){
    return this.findMin(currentNode.leftNode);
  } else {
    return currentNode.nodeValue;
  }
}

BinarySearchTree.prototype.findMinNoRecursion = function(){
  var currentNode = this.rootNode;
  while(currentNode.leftNode != null){
    currentNode = currentNode.leftNode;
  }
  return currentNode.nodeValue;
}

BinarySearchTree.prototype.addNode = function(itemValue, node){
  var currentNode = node ? node : this.rootNode;

  if (!this.rootNode) {
    this.rootNode = new TreeItem(itemValue, null, null);
  } else {
    if (itemValue < currentNode.nodeValue){ //go left
      if (!currentNode.leftNode){
        currentNode.leftNode = new TreeItem(itemValue, null, null);
      } else {
        this.addNode(itemValue, currentNode.leftNode);
      }
    } else { //go right
      if (!currentNode.rightNode){
        currentNode.rightNode = new TreeItem(itemValue, null, null);
      } else {
        this.addNode(itemValue, currentNode.rightNode);
      }
    }
  }

}

//still need a little work for some edge cases like removing a root node
BinarySearchTree.prototype.removeNode = function(deleteValue, node, parent){
  var currentNode = node ? node : this.rootNode;
  var parent = parent ? parent : this.rootNode;

  if (deleteValue < currentNode.nodeValue){ //traverse left
    this.removeNode(deleteValue, currentNode.leftNode, currentNode);
  }
  else if (deleteValue > currentNode.nodeValue) { //traverse right
    this.removeNode(deleteValue, currentNode.rightNode, currentNode);
  }
  else if (deleteValue === currentNode.nodeValue ) { //node found delete here
    if (currentNode.leftNode && currentNode.rightNode){ //two children present
      //find the min on the right and replace parent with it
      var replacementNode = currentNode.rightNode;
      while (replacementNode.leftNode){
        replacementParent = replacementNode;
      }
      currentNode.nodeValue = replacementNode.nodeValue;
      this.removeNode(replacementNode.nodeValue, replacementNode);
    }
    else if (currentNode.rightNode){  //right child present
      if (parent.nodeValue < currentNode.rightNode.nodeValue){
        parent.rightNode = currentNode.rightNode;
      } else {
        parent.leftNode = currentNode.rightNode;
      }
    }
    else if (currentNode.leftNode){ //left child present
      if (parent.nodeValue < currentNode.leftNode.nodeValue){
        parent.rightNode = currentNode.leftNode;
      } else {
        parent.leftNode = currentNode.leftNode;
      }
    }
    else { //no children
      if (parent.leftNode.nodeValue === currentNode.nodeValue) { //it's a right child
        parent.leftNode = null;
      } else {
        parent.rightNode = null;
      }
    }
  }
}

function max (number1, number2){
  return number1 > number2 ? number1 : number2;
}

function between(between, number1, number2){
  if (number1 < between && number2 > between){
    return true;
  } else if (number2 < between && number1 > between){
    return true;
  }
  return false;
}

module.exports = BinarySearchTree;
