var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value) {
    // check size of instance
    var storageLength = someInstance.size();

    // if size is greater than zero, increment all existing keys by 1
    // if size is zero, add value at key = 0

    // create an array with just the input value
    var values = [value];

    if (storageLength > 0) {
      // get the keys
      var keys = Object.keys(storage);

      // iterate through the keys to get the values
      for (let i = 0; i < keys.length; i++) {
        // push each value to the values array
        let key = keys[i];
        let value = storage[key];
        values.push(value);
      }
    }

    // iterate throught the values array to add/modify the keys
    for (let i = 0; i < values.length; i++) {
      storage[i] = values[i];
    }

  };

  someInstance.dequeue = function() {
    // get element at size of instance - 1
    var storageLength = someInstance.size();
    var lastElement = storage[storageLength - 1];

    // delete element at that location
    delete storage[storageLength - 1];

    // return element
    return lastElement;

  };

  someInstance.size = function() {
    return Object.keys(storage).length;
  };

  return someInstance;
};
