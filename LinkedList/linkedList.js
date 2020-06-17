// https://codeburst.io/linked-lists-in-javascript-es6-code-part-1-6dd349c3dcc3
class Node {
  constructor(data, next = null) {
    this.data = data
    this.next = null
  }
}
//Access	Search	Insertion	Deletion
// O(n)	  O(n)	  O(1)	    O(1)
// head --> [] -> [] -> [] <-- tail
class LinkedList {
  constructor() {
    this.head = null
  }

  length() {
    return this.numberOfNodes
  }

  insertFront(data) {
    const newNode = new Node(data)

    newNode.next = this.head
    this.head = newNode

    return this.head
  }

  insertEnd(data) {
    const newNode = new Node(data)
    if (!this.head) {
      this.head = newNode
      return this.head
    }

    // find the tail and update tail next pointer
    let tail = this.head
    while (tail.next !== null) {
      tail = tail.next
    }
    tail.next = newNode
    return this.head
  }

  // head --> [] -> [] -> [X] -> [] <-- tail

  getAt(index) {
    let current = this.head
    let counter = 0
    while (current) {
      if (counter === index) {
        return current
      }
      current = current.next
      counter++
    }
    return null
  }

  insertAt(data, index) {
    const newNode = new Node(data)

    if (!this.head) {
      this.head = new Node(data)
      return this.head
    }

    if (index === 0) {
      this.head = new Node(data, this.head)
      return this.head
    }

    let node = this.getAt(index - 1)

    newNode.next = node.next
    node.next = newNode

    return this.head
  }

  deleteFirst() {
    if (!this.head) {
      return
    }

    this.head = this.head.next
  }

  deleteLast() {
    if (!this.head) {
      return
    }
    if (!this.head.next) {
      this.head = null
      return
    }
    let previous = this.head
    while (previous.next.next) {
      previous = previous.next
    }
    previous.next = null
  }

  deleteAt(index) {
    if (!this.head) {
      return
    }
    if (index === 0) {
      this.head = null
      return
    }
    let previous = this.getAt(index - 1)
    if (!previous || !previous.next) {
      return
    }
    previous.next = previous.next.next
  }
}

module.exports = {
  LinkedList
}
