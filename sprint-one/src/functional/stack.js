var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  someInstance.push = function(value) {
    var instanceLength = someInstance.size();
    if (instanceLength === 0) {
      storage[0] = value;
    } else {
      storage[instanceLength] = value;
    }
  };

  someInstance.pop = function() {
    var instanceLength = someInstance.size();
    if (instanceLength === 0) {
      return undefined;
    } else {
      var value = storage[instanceLength - 1];
      delete storage[instanceLength - 1];
      return value;
    }
  };

  someInstance.size = function() {
    return Object.keys(storage).length;
  };

  return someInstance;
};
