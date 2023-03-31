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

// checking functions has(), add(), values() and size()
// var mySet = new mySet();
// console.log(mySet.has(2));
// console.log(mySet.add(2));
// console.log(mySet.add(2));
// console.log(mySet.add(2));
// console.log(mySet.add(3));
// console.log(mySet.values());
// console.log(mySet.size());
// console.log(mySet.remove(2));
// console.log(mySet.values());
