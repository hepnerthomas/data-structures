var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
};

// add enqueue method
Queue.prototype.enqueue = function(value) {
  // get queue length
  var queueSize = this.size();

  // create a new array with value
  var values = [value];

  // get keys from queue and iterate through them
  var queueKeys = Object.keys(this.storage);
  for (let key in queueKeys) {
    // get value at each key and add to values array
    var value = this.storage[key];
    values.push(value);
  }

  // iterate through values
  for (let i = 0; i < values.length; i++) {
    // set value at i in queue to corresponding element in values array
    this.storage[i] = values[i];
  }

}

// add dequeue method
Queue.prototype.dequeue = function() {
  // get queue length
  var queueSize = this.size();

  // get element at top of queue and delete it from the queue
  var value = this.storage[queueSize - 1];
  delete this.storage[queueSize - 1];

  // return element
  return value;
}

// add size method
Queue.prototype.size = function() {
  return Object.keys(this.storage).length;
}


