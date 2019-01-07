var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = []; // fix me
  _.extend(newTree, treeMethods);
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  //create the new Tree(value)
  //.children array. push(new tree )
  var newNode = Tree(value);
  this.children.push(newNode);
};

treeMethods.contains = function(target) {
  //base case 
  if (target === this.value) {
    return true;
  }
  //for loop
  //recursion
  for (var i = 0; i < this.children.length; i++) {
  //else recursive call
    //if this.children[i].value === target
    // return true
    //else this.children[i].contains(target)
    if (this.children[i].contains(target)) {
      return true; 
    }
    //return this.children[i].contains(target);
  }
  return false;
};

// for (var i = 0; i < node.children.length; i++) {
//     //recursively go through children of the nodes (if they have children), to find all children nodes with className
//     var childrenResults = getElementsByClassName(className, node.children[i])
//     nodes = nodes.concat(childrenResults)
//   }
//   return nodes;

/*
 * Complexity: What is the time complexity of the above functions?
 */
