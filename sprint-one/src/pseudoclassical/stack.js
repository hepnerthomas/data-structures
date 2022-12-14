var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
};


// add push method
Stack.prototype.push = function(value) {
  this.storage[this.size()] = value;
}

// add pop method
Stack.prototype.pop = function() {
  var value = this.storage[this.size() - 1];
  delete this.storage[this.size() - 1];
  return value;
}

// add size method
Stack.prototype.size = function() {
  return Object.keys(this.storage).length;
}
