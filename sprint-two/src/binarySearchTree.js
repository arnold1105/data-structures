var BinarySearchTree = function(value) {
  var newTree = {};
  newTree.value = value;
  newTree.left = null;
  newTree.right = null;
  _.extend(newTree, treeMethods);
  
  return newTree;
};

var treeMethods = {};

treeMethods.insert = function(value) {
  //create the object
  var newNode = BinarySearchTree(value);
 
  // if (value < this.value) {
  //   if (this.left.length === 0){
  //     this.left.push(newNode);
  //   } else {
  //     var next = this.left[0];
  //     next.insert(value);
  //     // this.left.insert(value)
      
  //   }
  // } else if (value > this.value){
  //     if (this.right.length === 0){
  //       this.right.push(newNode);
  //     } else {
  //       var next = this.right[0];
  //       next.insert(value);
  //     }
  // }
  
  
  
  if (value < this.value) {
    if (!this.left){
      this.left = newNode;
    } else {
      this.left.insert(value)
    }
  } else if (value > this.value){
      if (!this.right){
        this.right = newNode;
      } else {
        this.right.insert(value)
      }
  }
  
  
 
  //if value passed in is greater than this.value
   // if this.left is undefined
    // push to this.left
    //
     //recursion
  // else 
    // if this.right is undefined
      // push to this.right
      //  recursion here
};


treeMethods.contains = function(value) {
  if (value === this.value){
    return true;
  }
  // else if
    //check value > this.value
      //check value === this.right.value
      // else recurse  
  //recursion
  //
};

treeMethods.depthFirstLog = function(cb) {
  //
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
