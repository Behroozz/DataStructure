
// JavaScript Array: 
// http://blog.benoitvallon.com/category/data-structures-in-javascript/
function HashTable(size) {
  this.values = {},
    this.numberOfValues = 0
  this.size = size
}

//O(1) Insertion
HashTable.prototype.add = function (key, value) {
  let hash = this.calculateHash(key)
  if (!this.values.hasOwnProperty(hash)) {
    this.values[hash] = {}
  }
  if (!this.values[hash].hasOwnProperty(key)) {
    this.numberOfValues++
  }
  this.values[hash][key] = value
}

//O(1) remove
//{1: {KEY1: VALUE1}, 2: {KEY2: VALUE2}}
HashTable.prototype.remove = function (key) {
  let hash = this.calculateHash(key)
  if (this.values.hasOwnProperty(hash) &&
    this.values[hash].hasOwnProperty(key)) {
    delete this.values[hash][key]
    this.numberOfValues--
  }
}

//O(1) Search
HashTable.prototype.search = function (key) {
  const hash = this.calculateHash(key)
  if (this.values.hasOwnProperty(hash) && this.values[hash].hasOwnProperty(key)) {
    return this.values[hash][key]
  } else {
    return null
  }
}

HashTable.prototype.calculateHash = function (key) {
  return key.toString().length % this.size
}
HashTable.prototype.length = function () {
  return this.numberOfValues
}

HashTable.prototype.print = function () {
  let string = ''
  console.log(this.values)
  for (let value in this.values) {
    console.log(value)
    for (let key in this.values[value]) {
      console.log(key)
      string += this.values[value][key] + ' '
    }
  }
  console.log(string.trim())
}

let hashTable = new HashTable(3)
hashTable.add('first', 1)
hashTable.add('second', 2)
hashTable.add('third', 3)
console.log(hashTable.search('second'))
console.log(hashTable.length())
hashTable.remove('third')
hashTable.print()
