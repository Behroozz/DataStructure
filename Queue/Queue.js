function Queue() {
  this.queue = []
}

Queue.prototype.enqueue = function(data) {
  this.queue.push(data)
}

Queue.prototype.dequeue = function() {
  this.queue.shift()
}

Queue.prototype.peak = function() {
  return this.queue[0]
}

Queue.prototype.length = function() {
  return this.queue.length
}

Queue.prototype.print = function() {
  console.log(this.queue.join('  '))
}

let myQueue = new Queue()
myQueue.enqueue(1)
myQueue.enqueue(2)
myQueue.enqueue(3)

myQueue.print()

myQueue.dequeue()
myQueue.print()

console.log(myQueue.peak())
console.log(myQueue.length())
