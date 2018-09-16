function MyArray() {
  this.array = []
}
//Insertion O(1)
MyArray.prototype.add = function (data) {
  this.array.push(data)
}
//O(n)
MyArray.prototype.remove = function (data) {
  this.array = this.array.filter(item => item !== data)
}
//O(n) search
MyArray.prototype.search = function (data) {
  const searchIndex = this.array.indexOf(data)
  if (searchIndex !== -1) {
    return searchIndex
  }
  return -1
}
//O(1) access
MyArray.prototype.getAtIndex = function (index) {
  return this.array[index]
}
MyArray.prototype.length = function () {
  return this.array.length
}
MyArray.prototype.print = function () {
  console.log(this.array.join(' '))
}

let myArray = new MyArray()
myArray.add(1)
myArray.add(2)
myArray.add(3)

myArray.print()

console.log('search 3 gives index 2:', myArray.search(3))
console.log('getIndexAt 2 gives 3', myArray.getAtIndex(2))
myArray.remove(3)
myArray.print()
myArray.add(5)
myArray.add(5)
myArray.print()
myArray.remove(5)
myArray.print()

//Splice change the original array
let testArray1 = [1, 2, 3, 4, 5]
console.log(testArray1.splice(2, 1))
let testArray2 = [1, 2, 3, 4, 5]
console.log(testArray2.slice(2))
let testArray3 = [1, 2, 3, 4, 5]
console.log(testArray3.splice(5, 5, 6, 7))
console.log(testArray3)
