class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
  }

  size() {
    return Object.keys(this.storage).length;
  }

  enqueue(value) {
    // Get size of queue
    let queueSize = this.size();

    // Create a new array with value
    let values = [value];

    // Get and iterate through the keys in quene
    let keys = Object.keys(this.storage);
    for (let key in keys) {
      // add value at each key to new values array
      values.push(this.storage[key]);
    }


    // iterate through the values
    for (let i = 0; i < values.length; i++) {
      this.storage[i] = values[i];
    }

  }

  dequeue() {
    // Get size of queue
    var queueSize = this.size();

    // Get value at end of queue
    var topValue = this.storage[this.size() - 1];

    // delete value from queue
    delete this.storage[this.size() - 1];

    // return value
    return topValue;

  }

}
