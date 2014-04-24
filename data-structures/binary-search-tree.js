function TreeItem (nodeValue, leftNode, rightNode){ 
  this.nodeValue = nodeValue;
  this.leftNode = leftNode;
  this.rightNode = rightNode;
}

function BinarySearchTree(rootValue){ 
  this.rootNode = new TreeItem(rootValue,null, null);
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
      if (parent.leftNode.nodeValue === currentNode.nodeValue) { 
        parent.leftNode = null;
      } else { 
        parent.rightNode = null;
      }
    }
  }
}

module.exports = BinarySearchTree;
