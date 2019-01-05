var Stack = function() {  
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var size = 0;

  // Implement the methods below
  someInstance.push = function(value) { 
    storage[size] = value;               
    size++  ;
  };

  someInstance.pop = function() {
    if (size === 0){
      return undefined;
    } else {     
      size--
      let temp = storage[size] // the last item (a,b,c) --> let c be the temp
      delete storage[size] // delete the last item --> (a,b)
      return temp; // return the last item --> return (c)
    }
  };

  someInstance.size = function() {
    return size;
  };

  return someInstance;
};
