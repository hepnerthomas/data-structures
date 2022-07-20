class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
  }

  // Add size method
  size() {
    return Object.keys(this.storage).length;
  }

  // Add push method
  push(value) {
    this.storage[this.size()] = value;
  }

  // Add pop method
  pop() {
    let value = this.storage[this.size() - 1];
    delete this.storage[this.size() - 1];
    return value;
  }

}