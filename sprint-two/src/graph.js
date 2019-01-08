

// Instantiate a new graph
var Graph = function() {
  this.storage = {};
  this.edge = [];
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  //no connection needed.
  this.storage[node] = node;
  //node = this.storage;
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  //if (node)
  //return true
  // this.storage[node]
  if (this.storage[node]) {
    return true;
  }
  return false;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  //iterate over edge array
  for (var i = 0; i < this.edge.length; i++) {
    // if inner edge array contains node
    var innerEdge = this.edge[i];
    if (innerEdge[0] === node || innerEdge[1] === node) {
      // splice inner edge array
      this.edge.splice(i, 1);
    }
  }
  delete this.storage[node];
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  //array.includes() returns boolean.
  for (var i = 0; i < this.edge.length; i++) {
    if ((this.edge[i][0] === fromNode || this.edge[i][1] === fromNode) && (this.edge[i][0] === toNode || this.edge[i][1] === toNode)) {
      return true;
    }
  }
  return false;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  //push array pair to edge array
  this.edge.push([fromNode, toNode]);
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  // iterate over edge array
    // check if inner array contains both from & to Node
      // then splice out inner array.
  for (var i = 0; i < this.edge.length; i++) {
    var innerEdge = this.edge[i];
    if (innerEdge.includes(fromNode) && innerEdge.includes(toNode)) {
      //splice
      this.edge.splice(i, 1);
    }
  }
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  //recurse over each node and use cb function on each node.
  //iterate over storage obj
  for (key in this.storage) {
    // pass cb func on each node in storage
    cb(this.storage[key]);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


