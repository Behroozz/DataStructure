// JavaScript DoublyLinkedList List: 
// http://blog.benoitvallon.com/category/data-structures-in-javascript/
function Node(data) {
  this.data = data
  this.next = null
  this.previous = null
}

function doublyLinkedList() {
  this.head = null
  this.tail = null
  this.numOfNodes = 0
}

doublyLinkedList.prototype.add = function (data) {
  let newNode = new Node(data)
  if (!this.head) {
    this.head = newNode
    this.tail = newNode

  } else {
    newNode.previous = this.tail
    this.tail.next = newNode
    this.tail = newNode
  }
  this.numOfNodes++
}

doublyLinkedList.prototype.remove = function (data) {
  let current = this.head
  let prev = this.head
  // a --> b --> c
  //  <--    <--
  while (current) {
    if (current.data === data) {
      if (current === this.head && current === this.tail) {
        this.head = null
        this.tail = null
      } else if (current === this.head) {
        this.head = this.head.next
        this.head.previous = null
      } else if (current === this.tail) {
        this.tail = this.tail.previous
        this.tail.next = null
      } else {
        current.previous.next = current.next
        current.next.previous = current.previous
      }
      this.numOfNodes--
    }
    current = current.next
  }
}

doublyLinkedList.prototype.insertAfter = function (data, toNodeData) {
  let current = this.head
  while (current) {
    if (current.data === toNodeData) {
      let newNode = new Node(data)
      if (current === this.tail) {
        this.add(data)
      } else {
        current.next.previous = newNode
        newNode.previous = current
        newNode.next = current.next
        this.numOfNodes++
      }
    }
    current = current.next
  }
}

doublyLinkedList.prototype.traverse = function (fn) {
  let current = this.head
  while (current) {
    if (fn) {
      fn(current)
    }
    current = current.next
  }
}
