var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newStack = Object.create(stackMethods);
  newStack.storage = {};
  return newStack;
};

var stackMethods = {};

// Add push to stackMethods
stackMethods.push = function(value) {
  // get stack length
  var stackLength = this.size();

  // add value to top of stack
  this.storage[stackLength] = value;
}

// Add pop method to stackMethods
stackMethods.pop = function() {
  // get stack length
  var stackLength = this.size();

  // get value at top of stack
  var value = this.storage[stackLength - 1];

  // delete value from stop of stack
  delete this.storage[stackLength - 1];

  // return value at top of stack
  return value;

}

// Add size to stackMethods
stackMethods.size = function() {
  return Object.keys(this.storage).length;
}