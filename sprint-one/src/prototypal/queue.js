var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  var newQueue = Object.create(queueMethods);
  newQueue.storage = {};

  return newQueue;
};

var queueMethods = {};


// Add enqueue method to queueMethods
queueMethods.enqueue = function(value) {
  // Get length of queue
  var queueLength = this.size();

  // Create an array of values with value as the first element
  var values = [value];

  // Get and iterate through keys of queue
  var keys = Object.keys(this.storage);
  for (let i = 0; i < keys.length; i++) {
    // for each key, push value to the values list
    values.push(this.storage[keys[i]]);
  }

  // Iterate through values
  for (let i = 0; i < values.length; i++) {
    // set value at key in queue to be equal to value at i
    this.storage[i] = values[i];
  }

}

// Add dequeue method to queueMethods
queueMethods.dequeue = function() {
  // Get length of queue
  var queueLength = this.size();

  // Get and remove element at top of queue
  var value = this.storage[queueLength - 1];
  delete this.storage[queueLength - 1];

  // Return element
  return value;
}

// Add size method to queueMethods
queueMethods.size = function() {
  return Object.keys(this.storage).length;
}