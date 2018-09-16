function Stack() {
  this.stack = []
}

Stack.prototype.push = function(data) {
  this.stack.push(data)
}

Stack.prototype.pop =  function() {
  this.stack.pop()
}

Stack.prototype.peek =  function() {
  return this.stack[this.stack.length-1]
}

Stack.prototype.length = function() {
  return this.stack.length
}

Stack.prototype.print =  function() {
  console.log(this.stack.join(' '))
}

let myStack = new Stack()
myStack.push(1)
myStack.push(2)
myStack.push(3)

myStack.print()
myStack.pop()
myStack.print()