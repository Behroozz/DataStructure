function Node(data) {
  this.data = data
  this.next = null
  this.prev = null
}

function doublyLinkedList() {
  this.head = null
  this.tail = null
  this.numberOfNodes = 0
}


//Head 100 ---> [a|100] ---> [b|200] ---> [c|300] <--- Tail 300
//         <---         <---         <---         

doublyLinkedList.prototype.append = function(data) {
  const newNode = new Node(data)

  if(!this.head) {
    this.head = newNode
    this.tail = newNode
  } else {
    this.tail.next = newNode
    newNode.prev = this.tail
    this.tail = newNode
  }
}

doublyLinkedList.prototype.prepend = function(data) {
    const newNode = new Node(data)
    if(!this.head) {
      this.head = newNode
      this.tail = newNode
    } else {
      newNode.next = this.head
      this.head = newNode
    }
}

//Head 100 ---> [a|100] ---> [b|200] ---> [c|300] <--- Tail 300
//         <---         <---         <---         
doublyLinkedList.prototype.remove = function(data) {
  if(!this.head) {
    return -1
  }
  let current = this.head
  let prev = this.head

  while(current) {
    console.log(current)
    if(current.data === data) {
      if(current === this.head) {
        this.head = this.head.next
        this.head.prev = null
     } else if(current === this.tail) {
        this.tail = this.tail.prev
        this.tail.next = null
      } else {
        const test = current.prev
        test.next = current.next
        const test2 = current.next
        test2.prev = current.prev
      }
    } else {
      prev = current
      current = current.next 
    } 
  }
}


doublyLinkedList.prototype.traverse = function() {
  
}

doublyLinkedList.prototype.traverseBack = function() {
  
}


doublyLinkedList.prototype.length = function() {
  
}

doublyLinkedList.prototype.print = function() {
  let current = this.head
  let result = ""
  while(current) {
    result += ` <--- ${current.data} ---> `
    current = current.next
  }
  console.log(`Head ---> ${result} <--- Tail`) 
}

const myDoublyLinkedList = new doublyLinkedList()
myDoublyLinkedList.append(1)
myDoublyLinkedList.append(2)
myDoublyLinkedList.append(3)

myDoublyLinkedList.print()

myDoublyLinkedList.prepend(4)
myDoublyLinkedList.print()

myDoublyLinkedList.remove(1)
myDoublyLinkedList.print()