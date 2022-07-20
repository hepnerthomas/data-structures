var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  // Create new queue
  var newQueue = {};

  // Add queue storage
  newQueue.storage = {};
  // Add queue methods
  _.extend(newQueue, queueMethods);

  // Return new queue
  return newQueue;

};

var queueMethods = {};

// Add enqueue method to queueMethods
queueMethods.enqueue = function(value) {
  // Create an array for queue values with value as first element
  var queueValues = [value];

  // Get keys of queue
  var keys = Object.keys(this.storage);

  // iterate through keys of queue
  for (let i = 0; i < keys.length; i++) {
    let value = this.storage[keys[i]];
    queueValues.push(value);
  }

  // iterate through values
  for (let i = 0; i < queueValues.length; i++) {
    // add each value to queue storage at key i
    this.storage[i] = queueValues[i];
  }

};

// Add dequeue method to queueMethods
queueMethods.dequeue = function() {
  var queueLength = this.size();
  var value = this.storage[queueLength - 1];
  delete this.storage[queueLength - 1];
  return value;
}


// Add size method to queueMethods
queueMethods.size = function() {
  return Object.keys(this.storage).length;
}