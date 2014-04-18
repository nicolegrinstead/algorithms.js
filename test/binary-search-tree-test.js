var BinarySearchTree = require('../binary-search-tree.js');
var assert = require("assert");

describe('Binary Search Tree', function(){
  it('can create a new tree', function(){
    var tree = new BinarySearchTree(5);
    
    assert.equal(5, tree.rootNode.nodeValue);
    assert.equal(null, tree.rootNode.leftNode);
    assert.equal(null, tree.rootNode.rightNode);
  })

  it('can add a node less than the root', function(){ 
    var tree = new BinarySearchTree(5); 
    tree.addNode(3);

    assert.equal(5, tree.rootNode.nodeValue);
    assert.equal(3, tree.rootNode.leftNode.nodeValue);
    assert.equal(null, tree.rootNode.rightNode); 
 })

 it('can add a node greater than the root', function(){ 
    var tree = new BinarySearchTree(5); 
    tree.addNode(7);

    assert.equal(5, tree.rootNode.nodeValue);
    assert.equal(7, tree.rootNode.rightNode.nodeValue);
    assert.equal(null, tree.rootNode.leftNode);   
 })

 it('can add multiple nodes', function(){ 
    var tree = new BinarySearchTree(5); 
    tree.addNode(7);                              //            5
    tree.addNode(3);                              //           / \          
    tree.addNode(1);                              //          3   7
    tree.addNode(4);                              //         / \  
                                                  //        1   4

    assert.equal(5, tree.rootNode.nodeValue);
    assert.equal(7, tree.rootNode.rightNode.nodeValue);
    var leftNode = tree.rootNode.leftNode;
    assert.equal(3, leftNode.nodeValue);
    assert.equal(1, leftNode.leftNode.nodeValue);
    assert.equal(4, leftNode.rightNode.nodeValue);
 })

 it('can remove a node with no children', function(){ 
    var tree = new BinarySearchTree(5); 
    tree.addNode(7);                              
    tree.addNode(3);   

    tree.removeNode(3);

    assert.equal(5, tree.rootNode.nodeValue);
    assert.equal(7, tree.rootNode.rightNode.nodeValue);
    assert.equal(null, tree.rootNode.leftNode);
  })

 it('can remove a node with left child', function(){ 
    var tree = new BinarySearchTree(5); 
    tree.addNode(7);                              //            5
    tree.addNode(3);                              //           / \          
    tree.addNode(1);                              //          3   7
                                                  //         /   
                                                  //        1  
    tree.removeNode(3);

    assert.equal(5, tree.rootNode.nodeValue);
    assert.equal(7, tree.rootNode.rightNode.nodeValue);
    assert.equal(1, tree.rootNode.leftNode.nodeValue);
  })

 it('can remove a node with left child', function(){ 
    var tree = new BinarySearchTree(5); 
    tree.addNode(7);                              //            5
    tree.addNode(3);                              //           / \          
    tree.addNode(6);                              //          3   7
                                                  //             /
                                                  //            6 
    tree.removeNode(7);

    assert.equal(5, tree.rootNode.nodeValue);
    assert.equal(6, tree.rootNode.rightNode.nodeValue);
    assert.equal(3, tree.rootNode.leftNode.nodeValue);
  })

  it('can remove a node with right child', function(){ 
    var tree = new BinarySearchTree(5); 
    tree.addNode(7);                              //            5
    tree.addNode(3);                              //           / \          
    tree.addNode(4);                              //          3   7
                                                  //           \  
                                                  //            4  
    tree.removeNode(3);

    assert.equal(5, tree.rootNode.nodeValue);
    assert.equal(7, tree.rootNode.rightNode.nodeValue);
    assert.equal(4, tree.rootNode.leftNode.nodeValue);
  })

  it('can remove a node with right child', function(){ 
    var tree = new BinarySearchTree(5); 
    tree.addNode(7);                              //            5
    tree.addNode(3);                              //           / \          
    tree.addNode(9);                              //          3   7
                                                  //               \
                                                  //                9
    tree.removeNode(7);

    assert.equal(5, tree.rootNode.nodeValue);
    assert.equal(9, tree.rootNode.rightNode.nodeValue);
    assert.equal(3, tree.rootNode.leftNode.nodeValue);
  })

  it('can remove a node with two children', function(){ 
    var tree = new BinarySearchTree(5); 
    tree.addNode(7);                              //            5
    tree.addNode(3);                              //           / \          
                                                  //          3   7

    tree.removeNode(5);

    assert.equal(7, tree.rootNode.nodeValue);
    assert.equal(3, tree.rootNode.leftNode.nodeValue);
    assert.equal(null, tree.rootNode.rightNode);
  })
})

