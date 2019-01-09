

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(key, val) {
  var index = getIndexBelowMaxForKey(key, this._limit);
  var bucket = this._storage.get(index);
  //use limitedArray.set function to check if there is a bucket already existing
   // if undefined, create the bucket
  // if (this._storage.get(index) === undefined) {
  if (!bucket) {
    bucket = [];
    this._storage.set(index, bucket);
  }
    
  var isThere = false;
    
  for (var i = 0; i < bucket.length; i++) {
    var tuple = bucket[i];
    if (tuple[0] === key) {
      tuple[1] = val;
      isThere = true;
      break;
    }
  }
    
  if (!isThere) {
    bucket.push([key, val]);
  }
};

HashTable.prototype.retrieve = function(key) {
  var index = getIndexBelowMaxForKey(key, this._limit);
  // var result = this._storage.get(index);
  // return result[1];
  
  var bucket = this._storage.get(index);
  //use limitedArray.set function to check if there is a bucket already existing
   // if undefined, create the bucket
  // if (this._storage.get(index) === undefined) {
  if (!bucket) {
    return undefined;
  }
    
  for (var i = 0; i < bucket.length; i++) {
    var tuple = bucket[i];
    if (tuple[0] === key) {
      return tuple[1];
      break;
    }
  }
  return undefined;
};

HashTable.prototype.remove = function(key) {
  var index = getIndexBelowMaxForKey(key, this._limit);
  //splice index for key and val
  // this._storage.set(index, undefined);
  var bucket = this._storage.get(index);
  //use limitedArray.set function to check if there is a bucket already existing
   // if undefined, create the bucket
  // if (this._storage.get(index) === undefined) {
  if (!bucket) {
    return undefined;
  }
    
  for (var i = 0; i < bucket.length; i++) {
    var tuple = bucket[i];
    if (tuple[0] === key) {
      bucket.splice(i, 1);
      return tuple[1];
    }
  }
  return undefined;
  };



/*
 * Complexity: What is the time complexity of the above functions?
 */


