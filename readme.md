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

## Set

Set is a data structure, where no duplicate element

```javascript
class mySet {
  constructor() {
    var collection = [];

    // has
    // check for element exists inside the collection
    this.has = function (e) {
      return collection.indexOf(e) !== -1;
    };

    // size
    // returns the size of the collection
    this.size = function () {
      return collection.length;
    };
    //add
    // adds element to the collection if not already present
    this.add = function (e) {
      if (!this.has(e)) {
        collection.push(e);
        return true;
      }
      return false;
    };

    // values
    // return values of collection
    this.values = function () {
      return collection;
    };
    //remove
    // removes an item from collection if present
    this.remove = function (e) {
      if (this.has(e)) {
        var index = collection.indexOf(e);
        collection.splice(index, 1);

        return true;
      }
      return false;
    };
    // union
    // takes oneset and adds to the existing set to form a new set
    this.union = function (otherSet) {
      var firstSet = this.values();
      var secondSet = otherSet.values();
      var unionSet = new mySet();

      firstSet.forEach(function (element) {
        unionSet.add(element);
      });

      secondSet.forEach(function (element) {
        unionSet.add(element);
      });
      return unionSet;
    };

    // intersect
    // checks two sets and returns common elements
    this.intersection = function (checkingSet) {
      var intersectionSet = new mySet();
      var intersectionFirstSet = this.values();
      intersectionFirstSet.forEach(function (e) {
        if (checkingSet.has(e)) {
          intersectionSet.add(e);
        }
      });
      return intersectionSet;
    };

    // difference
    // returns uncommon elements btween two sets elements in a new set
    this.difference = function (checkingDifferenceSet) {
      var newSet = new mySet();
      var firstSet = this.values();
      firstSet.forEach(function (e) {
        if (!checkingDifferenceSet.has(e)) {
          newSet.add(e);
        }
      });
      return newSet;
    };

    //sub set
    // returns boolean if every element in a set is present in another set
    this.subset = function (checkingSubset) {
      var firstSet = this.values();
      return firstSet.every(function (e) {
        return checkingSubset.has(e);
      });
    };
  }
}

var setA = new mySet();
var setB = new mySet();
setA.add("a");
setB.add("b");
setB.add("c");
setB.add("a");
setB.add("d");
console.log(setA.union(setB).values());
console.log(setB.intersection(setA).values());
console.log(setB.difference(setA).values());
console.log(setA.subset(setB));
```

## Queue

// is a data structure to hold data . FIFO (First In First Out)

```javascript
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
```

## Priority Queue

inserts elements based on elements priority, lower priority goes first in the queue

```javascript
// priority queue is a queue with index priority
// the element with highest priority index will be push in down
class PriorityQueue {
  constructor() {
    let collection = [];

    // enqueue
    this.enqueue = function (e) {
      if (this.isEmpty()) {
        collection.push(e);
      } else {
        var added = false;
        for (let i = 0; i < collection.length; i++) {
          //check element and collection priority
          if (e[1] < collection[i][1]) {
            collection.splice(i, 0, e);
            added = true;
            break;
          }
        }
        if (!added) {
          collection.push(e);
        }
      }
    };
    //dequeue
    this.dequeue = function () {
      var value = collection.shift();
      return value;
    };

    //front
    this.front = function () {
      return collection[0];
    };

    // print collection
    this.printCollection = function () {
      console.log(collection);
    };
    // size of the queue
    this.size = function () {
      return collection.length;
    };

    this.isEmpty = function () {
      return collection.length === 0;
    };
  }
}

var priorityQueue = new PriorityQueue();
priorityQueue.enqueue(["emdad", 2]);
priorityQueue.enqueue(["larson", 3]);
priorityQueue.enqueue(["hossain", 1]);
priorityQueue.printCollection();
console.log(priorityQueue.dequeue());
console.log(priorityQueue.front());
priorityQueue.printCollection();
```
