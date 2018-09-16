// JavaScript set: 
// http://blog.benoitvallon.com/category/data-structures-in-javascript/
function Set() {
  this.values = []
  this.numberOfValues = 0
}

//O(n) Insertion
Set.prototype.add = function (value) {
  //https://wsvincent.com/javascript-tilde/
  if (!~this.values.indexOf(value)) {
    this.values.push(value)
    this.numberOfValues++
  }
}

//O(n) Deletion
Set.prototype.remove = function (value) {
  const index = this.values.indexOf(value)
  if (~index) {
    this.values.splice(index, 1)
    // this.values = this.values.filter(item => item !== value)
    this.numberOfValues--
  }
}

//Search O(n)
Set.prototype.contains = function (key) {
  return (this.values.indexOf(key) !== -1)
}

Set.prototype.union = function (set) {
  let newSet = new Set()
  this.values.forEach(item => newSet.add(item))
  this.values.forEach(item => newSet.add(item))
  return newSet
}

Set.prototype.intersect = function (set) {
  let newSet = new Set()
  this.values.forEach(item => {
    if (set.contains(item)) {
      newSet.add(item)
    }
  })
  return newSet
}

Set.prototype.difference = function (set) {
  let newSet = new Set()
  this.values.forEach(item => {
    if (!set.contains(item)) {
      newSet.add(item)
    }
  })
  return newSet
}

Set.prototype.isSubset = function (set) {
  return set.values.every(value => {
    return this.contains(value)
  }, this)
}

Set.prototype.length = function () {
  return this.numberOfValues
}

Set.prototype.print = function () {
  console.log(this.values.join(' '))
}

var set = new Set();
set.add(1);
set.add(2);
set.add(3);
set.add(4);
set.print(); // => 1 2 3 4
set.remove(3);
set.print(); // => 1 2 4
console.log('contains 4 is true:', set.contains(4)); // => true
console.log('contains 3 is false:', set.contains(3)); // => false
console.log('---');
var set1 = new Set();
set1.add(1);
set1.add(2);
var set2 = new Set();
set2.add(2);
set2.add(3);
var set3 = set2.union(set1);
set3.print(); // => 1 2 3
var set4 = set2.intersect(set1);
set4.print(); // => 2
var set5 = set.difference(set3); // 1 2 4 diff 1 2 3
set5.print(); // => 4
var set6 = set3.difference(set); // 1 2 3 diff 1 2 4
set6.print(); // => 3
console.log('set1 subset of set is true:', set.isSubset(set1)); // => true
console.log('set2 subset of set is false:', set.isSubset(set2)); // => false
console.log('set1 length gives 2:', set1.length()); // => 2
console.log('set3 length gives 3:', set3.length()); // => 3
