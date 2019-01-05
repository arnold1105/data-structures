class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
    this.length = 0;
  }


  push(value) { 
    this.storage[this.length] = value;               
    this.length++  ;
  }

  pop() {
    if (this.length === 0){
      return undefined;
    } else {     
      this.length--
      let temp = this.storage[this.length] // the last item (a,b,c) --> let c be the temp
      delete this.storage[this.length] // delete the last item --> (a,b)
      return temp; // return the last item --> return (c)
    }
  }

  size() {
    return this.length;
  }

}