var Stack = function () {
  this.storage = {};
  this.count = 0;

  this.push = function (x) {
    this.storage[this.count] = x;
    this.count++;
  };

  this.pop = function () {
    if (this.count === 0) {
      return undefined;
    }
    this.count--;
    var result = this.storage[this.count];
    delete this.storage[this.count];
    return result;
  };

  this.peek = function () {
    if (this.count === 0) {
      return undefined;
    }
    return this.storage[this.count - 1];
  };
  this.size = function () {
    return this.count;
  };
};

let myStack = new Stack();
myStack.push(2);
myStack.push(3);
console.log(myStack.pop());
console.log(myStack.peek());
