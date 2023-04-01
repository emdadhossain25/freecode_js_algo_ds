// priority queue is a queue with index priority
// the element with highest priority index will be push in front/first
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
