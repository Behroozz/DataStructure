// Access	Search	Insertion	Deletion
// O(n)	O(n)	O(1)	O(1)

function Node(data) {
  this.data = data
  this.next = null
}

//head[100] ---> [1|200] ---> [2|300] ---> [3|400] <--- tail
//[4|]
function linkedList() {
  this.head = null
  this.tail = null
  this.numberOfNodes = 0
}

linkedList.prototype.length = function() {
  return this.numberOfNodes
}

// 1 --> 2 --> [3]
linkedList.prototype.insertToEnd = function(data) {
  let newNode = new Node(data)
  if(!this.head) {
    this.head = newNode
    this.tail = newNode
  } else {
    this.tail.next = newNode
    this.tail = newNode
  }
  this.numberOfNodes ++
}

linkedList.prototype.insertFront = function(data) {
  let newNode = new Node(data)
  if(!this.head) {
    this.head = newNode
    this.tail = newNode
  } else {
    newNode.next = this.head
    this.head = newNode
  }
  this.numberOfNodes ++
}

// head --> 1 --> 2 --> 3 <--tail

linkedList.prototype.insertAfter = function(data, toNodeData) {
  let current = this.head
  if(current === null) {
    this.head = new Node(data)
    this.tail = new Node(data)
  } else {
    while(current) {
      if(current.data === toNodeData) {
        let newNode = new Node(data)
        if(current === this.tail) {
          this.tail.next = newNode
          this.tail = newNode
        } else {
          newNode.next = current.next
          current.next = newNode
        }
      }
      current = current.next
    }
  }
  this.numberOfNodes ++
}

linkedList.prototype.remove = function(data) {
  let current = this.head
  let prev = this.head
  if(current === null) {
    return -1
  } else {
    while(current) {
      if(current.data === data) {
        if(current === this.head) {
          this.head = current.next
        } else {
          prev.next = current.next
        }
        this.numberOfNodes --
      }
      prev = current
      current = current.next
    }  
  }
}

linkedList.prototype.traverse = function() {
}

linkedList.prototype.print = function(operation) { 
  let current = this.head
  let result = ""
  while(current !== null) {
    result += `---> ${current.data}`
    current = current.next
  }
  console.log(`${operation}:  ${result.length === 0 ? 'Head--->' : 'Head'} ${result} <---Tail`)
}

let insertFirstLinkedList = new linkedList();

insertFirstLinkedList.insertFront(1)
insertFirstLinkedList.insertFront(2)
insertFirstLinkedList.insertFront(3)
insertFirstLinkedList.insertFront(4)

insertFirstLinkedList.print('insertFront')
console.log('Length: ', insertFirstLinkedList.length())

/*****************************************/

let insertLastLinkedList = new linkedList();

insertLastLinkedList.insertToEnd(1)
insertLastLinkedList.insertToEnd(2)
insertLastLinkedList.insertToEnd(3)
insertLastLinkedList.insertToEnd(4)

insertLastLinkedList.print('insetToEnd')
console.log('Length: ', insertLastLinkedList.length())


/*****************************************/

insertLastLinkedList.insertAfter(1.5, 1)
insertLastLinkedList.print('insetAfter Head')
console.log('Length: ', insertLastLinkedList.length())

insertLastLinkedList.insertAfter(4.5, 4)
insertLastLinkedList.print('insetAfter Tail')
console.log('Length: ', insertLastLinkedList.length())

let emptyLinkedList = new linkedList()
emptyLinkedList.insertAfter(0.5, 0)
emptyLinkedList.print('insetAfter Empty list')
console.log('Length: ', emptyLinkedList.length())

insertFirstLinkedList.remove(1)
insertFirstLinkedList.print('remove Tail')
console.log('Length: ', insertFirstLinkedList.length())

insertFirstLinkedList.remove(3)
insertFirstLinkedList.print('remove Middle')
console.log('Length: ', insertFirstLinkedList.length())

insertFirstLinkedList.remove(4)
insertFirstLinkedList.print('remove Head')
console.log('Length: ', insertFirstLinkedList.length())

insertFirstLinkedList.remove(2)
insertFirstLinkedList.print('remove Empty')
console.log('Length: ', insertFirstLinkedList.length())



