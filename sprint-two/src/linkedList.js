var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var newNode = Node(value);
    if (list.head) {
      list.tail.next = newNode;
      list.tail = newNode;
    } else {
      list.tail = newNode;
      list.head = newNode;
    }
  };

  list.removeHead = function() {
    if (!list.head) {
      return undefined;
    }
    var temp = list.head;
    list.head = list.head.next;
    return temp.value;
  
  };

  list.contains = function(target) {
    if (list.head) {
      if (list.head.value === target) {
        return true;
      }
      list.head = list.head.next;
      return list.contains(target);
    } else {
      return false;
    }
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
