var BinarySearchTree = require('../data-structures/binary-search-tree.js');
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

  it('can fin min', function(){
    var tree = new BinarySearchTree(5);
    tree.addNode(7);                              //            5
    tree.addNode(3);                              //           / \
    tree.addNode(4);                              //          3   7
                                                  //           \
                                                  //            4

    assert.equal(3, tree.findMin());
  })

  it('can fin without recursion', function(){
    var tree = new BinarySearchTree(5);
    tree.addNode(7);                              //            5
    tree.addNode(3);                              //           / \
    tree.addNode(4);                              //          3   7
                                                  //           \
                                                  //            4

    assert.equal(3, tree.findMinNoRecursion());
  })

 it('can be converted to an in order array', function(){
    var tree = new BinarySearchTree(5);
    tree.addNode(7);                              //            5
    tree.addNode(3);                              //           / \
    tree.addNode(1);                              //          3   7
    tree.addNode(4);                              //         / \
                                                  //        1   4

    var inOrder = tree.traverseInOrder();
    assert.deepEqual(inOrder, [1,3,4,5,7]);
 })

  it('can calculate tree height', function(){
    var tree = new BinarySearchTree(5);
    tree.addNode(7);                              //            5
    tree.addNode(3);                              //           / \
    tree.addNode(1);                              //          3   7
    tree.addNode(4);                              //         / \
                                                  //        1   4

    assert.equal(3, tree.findHeight(tree.rootNode));
 })

 it('can find the common ancestor of two nodes', function(){
    var tree = new BinarySearchTree(5);
    tree.addNode(7);                              //            5
    tree.addNode(3);                              //           / \
    tree.addNode(1);                              //          3   7
    tree.addNode(4);                              //         / \
                                                  //        1   4

    assert.equal(3, tree.findCommonAncestor(1,4));
 })

 it('returns undefined if there is no common ancestor', function(){
    var tree = new BinarySearchTree(5);
    tree.addNode(7);                              //            5
    tree.addNode(3);                              //           / \
    tree.addNode(1);                              //          3   7
    tree.addNode(4);                              //         / \
                                                  //        1   4

    assert.equal(undefined, tree.findCommonAncestor(5,1));
 })

 it('can perform depth first serach', function(){
    var tree = new BinarySearchTree(5);
    tree.addNode(7);                              //            5
    tree.addNode(3);                              //           / \
    tree.addNode(1);                              //          3   7
    tree.addNode(4);                              //         / \
                                                  //        1   4

    assert.equal(true, tree.depthFirstSearch(4));
 })

 it('returns false for a depth first search with no matching node', function(){
    var tree = new BinarySearchTree(5);
    tree.addNode(7);                              //            5
    tree.addNode(3);                              //           / \
    tree.addNode(1);                              //          3   7
    tree.addNode(4);                              //         / \
                                                  //        1   4

    assert.equal(false, tree.depthFirstSearch(8));
 })

 it('can perform bredth first serach', function(){
    var tree = new BinarySearchTree(5);
    tree.addNode(7);                              //            5
    tree.addNode(3);                              //           / \
    tree.addNode(1);                              //          3   7
    tree.addNode(4);                              //         / \
                                                  //        1   4

    assert.equal(true, tree.bredthFirstSearch(4));
 })

 it('returns false for a bredth first search with no matching node', function(){
    var tree = new BinarySearchTree(5);
    tree.addNode(7);                              //            5
    tree.addNode(3);                              //           / \
    tree.addNode(1);                              //          3   7
    tree.addNode(4);                              //         / \
                                                  //        1   4

    assert.equal(false, tree.bredthFirstSearch(8));
 })
})

