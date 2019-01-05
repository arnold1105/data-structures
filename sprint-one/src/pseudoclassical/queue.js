var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage ={}
  this.firstOut = 0;
  this.lastIn = 0;
};

Queue.prototype.enqueue =  function(value) {
		this.storage[this.lastIn] = value;
		this.lastIn++;
	},

	Queue.prototype.dequeue = function(){
	  if (this.lastIn - this.firstOut === 0){
	  	return undefined;
	  } else {
	  	let temp = this.storage[this.firstOut];	
	  	delete this.storage[this.firstOut];
	  	this.firstOut++
	  	return temp;
	  }
	},

	Queue.prototype.size = function(){
		return this.lastIn - this.firstOut
	}
