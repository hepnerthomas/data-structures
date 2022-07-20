var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  // create new stack instance
  var newStack = {};

  // Create an empty object called storage
  newStack.storage = {};
  _.extend(newStack, stackMethods);

  // return new stack instance
  return newStack;

};

var stackMethods = {};

// Add push method to stackMethods
stackMethods.push = function(value) {
  var stackLength = this.size();
  this.storage[stackLength] = value;
}

// Add pop method to stackMethods
stackMethods.pop = function() {
  var stackLength = this.size();
  var value = this.storage[stackLength - 1];
  delete this.storage[stackLength - 1];
  return value;
}

// Add size method to stackMethods
stackMethods.size = function() {
  return Object.keys(this.storage).length;
}