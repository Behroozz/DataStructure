function HashSet() {
  this.set = []
}

HashSet.prototype.add = function(key) {
  if(!this.contains(key)) {
    this.set.push(key)
  }
}

HashSet.prototype.contains = function(key) {
 return this.set.includes(key)
}

HashSet.prototype.remove = function(value) {
  for(let i=0; i< this.set.length; i++) {
    if(this.set[i] === value) {
      this.set.splice(i, 1)
    }
  }
}


let myHashSet = new HashSet()
myHashSet.add(1)
myHashSet.add(1)
myHashSet.add(2)

console.log('myHashSet', myHashSet)
myHashSet.remove(1)
console.log('myHashSet remove', myHashSet)

