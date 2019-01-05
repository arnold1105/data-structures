var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  var firstOut = 0;
  var lastIn = 0;

  someInstance.enqueue = function(value) {
    storage[lastIn] = value;                
    lastIn++;
  };

  someInstance.dequeue = function() {
    if (lastIn - firstOut === 0){
      return undefined
    } else {
      let temp = storage[firstOut]; // (a,b,c) --> let temp be the oldest item (a)
      delete storage[firstOut]; // remove the oldest item from (a,b,c) , which is (a)
      firstOut++
      return temp; // return (a)
    }
  };

  someInstance.size = function() {
    return lastIn - firstOut;
  };

  return someInstance;
};
