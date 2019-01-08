var BinarySearchTree = function(value) {
  var newTree = {};
  newTree.value = value;
  newTree.left = [];
  newTree.right = [];
  _.extend(newTree, treeMethods);
  
  return newTree;
};

var treeMethods = {};

treeMethods.insert = function(value) {
  //if the value is smaller than this.value, push to left array
  if (value < this.value) {
    this.left.push(value);
  } else {
    this.right.push(value);
  }
  //if larger     ,, push to right array;
};


treeMethods.contains = function(item) {
  //recursion
};

treeMethods.depthFirstLog = function(cb) {
  //
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
