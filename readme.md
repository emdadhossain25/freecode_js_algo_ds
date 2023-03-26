# Data Structures And Algorithm 

## Stack
Stack is a Data Structure 

```javascript
//  Stack function (LIFO)
var Stack = function () {
  this.storage = {};
  this.count = 0;

//  push function
  this.push = function (x) {
    this.storage[this.count] = x;
    this.count++;
  };

//  pop function (deletes the last inserted item)
  this.pop = function () {
    if (this.count === 0) {
      return undefined;
    }
    this.count--;
    var result = this.storage[this.count];
    delete this.storage[this.count];
    return result;
  };

// peek function to display the last inserted item
  this.peek = function () {
    if (this.count === 0) {
      return undefined;
    }
    return this.storage[this.count - 1];
  };

  // size function to get the size of stack
  this.size = function () {
    return this.count;
  };
};

// calling stack function and loging
let myStack = new Stack();
myStack.push(2);
myStack.push(3);
console.log(myStack.pop());
console.log(myStack.peek());

```