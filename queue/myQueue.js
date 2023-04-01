// is a data structure to hold data . FIFO (First In First Out)

class Queue {
  constructor() {
    var collection = [];
    // print(prints the statement)
    this.print = function (e) {
      console.log(e);
    };

    // enqueue(push at end of the array)
    this.enque = function (e) {
      collection.push(e);
    };

    // deque (return and delete first item)
    this.deque = function () {
      return collection.shift();
    };

    // front (returns the first item of the array)
    this.front = function () {
      return collection[0];
    };
    // size (returns size of the array)
    this.size = function () {
      return collection.length;
    };
  }
}

// driver code to run the method
var queue = new Queue();
console.log(queue.size());
queue.print("d");
queue.enque("2");
queue.enque("3");
console.log(queue.deque());
console.log(queue.front());
console.log(queue.deque());
