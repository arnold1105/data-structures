class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
  	this.storage = {}
  	this.firstOut = 0;
  	this.lastIn = 0;
  }

  enqueue(value) {
  	this.storage[this.lastIn] = value;
  	this.lastIn++
  }

  dequeue(){
  	if (this.lastIn - this.firstOut === 0){
  	  return undefined
  	} else {
      let temp = this.storage[this.firstOut];
      delete this.storage[this.firstOut];
      this.firstOut++
      return temp;
  	}
  }

  size(){
  	return (this.lastIn - this.firstOut);
  }


}
