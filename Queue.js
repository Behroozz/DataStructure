//Insert O(1)
//remove O(1)
//Search O(n)
//Access O(n)

function Queue() {
  this.queue = []
}

Queue.prototype.enqueue = function(data) {
  this.queue.push(data) 
}

Queue.prototype.dequeue = function() {
  //Shift from begining , pop from the end
  this.queue.shift()
}

Queue.prototype.peek = function() {
  return this.queue[0]
}

Queue.prototype.length = function() {
  return this.queue.length
}

Queue.prototype.print = function() {
  console.log(this.queue.join(' '))
}

let myQueue = new Queue()
myQueue.enqueue(1)
myQueue.enqueue(2)
myQueue.enqueue(3)
myQueue.print()
console.log(myQueue.length())

myQueue.dequeue()
myQueue.print()

console.log(myQueue.peek())
console.log(myQueue.length())
