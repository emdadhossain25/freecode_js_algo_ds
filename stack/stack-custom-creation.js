class Stack {
  constructor() {
    // two variables
    this.count = 0; // for size of stack
    this.storage = {}; // for storing key value pair




    // there are three methods for stack
    // push() inserts value
    this.push = function (x) {
      this.storage[this.count] = x;
      this.count++;
    };

    // pop() retrieves last element value and deletes last element
    this.pop = function () {
      if (this.count === 0) {
        return undefined;
      }
      this.count--;
      var result = this.storage[this.count]; // retrieves the last element
      delete this.storage[this.count]; //deletes from storage
      return result;
    };

    // peek() retrieves last element value
    this.peek = function () {
      if (this.count === 0) {
        return undefined;
      }
      return this.storage[this.count - 1];
    };

    // returns the size of stack
    this.size = function () {
      return this.count;
    };
  }
}

var myStack = new Stack();
myStack.push(2);
myStack.push(1);
console.log(myStack.pop());
console.log(myStack.peek());
myStack.push("free code camp");
console.log(myStack.pop());
console.log(myStack.peek());
console.log(myStack.size());