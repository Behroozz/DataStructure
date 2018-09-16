// JavaScript SinglyLinked List: 
// http://blog.benoitvallon.com/category/data-structures-in-javascript/
function Node(data) {
  this.data = data
  this.next = null
}

function linkedList() {
  this.head = null
  this.tail = null
  this.numberOfNodes = 0
}

linkedList.prototype.add = function (data) {
  let node = new Node(data)
  if (!this.head) {
    this.head = node
    this.tail = node
  } else {
    this.tail.next = node
    this.tail = node
  }
  this.numberOfNodes++
}

// 1 ---> 2 --> 3
// 2 ---> 3
//  tail current head
// prev 
// current
// head
// tail

linkedList.prototype.remove = function (data) {
  let prev = this.head
  let current = this.head
  while (current) {
    if (current.data === data) {
      if (current === this.head) {
        this.head = this.head.next
      }
      if (current === this.tail) {
        this.tail = prev
      }
      prev.next = current.next
      this.numberOfNodes--
    } else {
      prev = current
    }
    current = current.next
  }

}

linkedList.prototype.insertAfter = function (data, toNodeData) {
  current = this.head
  while (current) {
    if (current.data === toNodeData) {
      let newNode = new Node(data)
      if (current === this.tail) {
        this.tail.next = newNode
        this.tail = newNode
      } else {
        newNode.next = current.next
        current.next = newNode
      }
      this.numberOfNodes++
    }
    current = current.next
  }
}

linkedList.prototype.length = function (data) {
  return this.numberOfNodes
}

linkedList.prototype.traverse = function (fn) {
  let current = this.head
  while (current) {
    if (fn) {
      fn(current)
    }
    current = current.next
  }
}

linkedList.prototype.print = function () {
  var string = '';
  var current = this.head;
  while (current) {
    string += current.data + ' ';
    current = current.next;
  }
  console.log(string.trim());
};


let singlyLinkedList = new linkedList();
singlyLinkedList.print(); // => ''
singlyLinkedList.add(1);
singlyLinkedList.add(2);
singlyLinkedList.add(3);
singlyLinkedList.add(4);
singlyLinkedList.print(); // => 1 2 3 4
console.log('length is 4:', singlyLinkedList.length()); // => 4
singlyLinkedList.remove(3); // remove value
singlyLinkedList.print(); // => 1 2 4
singlyLinkedList.remove(9); // remove non existing value
singlyLinkedList.print(); // => 1 2 4
singlyLinkedList.remove(1); // remove head
singlyLinkedList.print(); // => 2 4
singlyLinkedList.remove(4); // remove tail
singlyLinkedList.print(); // => 2
console.log('length is 1:', singlyLinkedList.length()); // => 1
singlyLinkedList.add(6);
singlyLinkedList.print(); // => 2 6
singlyLinkedList.insertAfter(3, 2);
singlyLinkedList.print(); // => 2 3 6
singlyLinkedList.insertAfter(4, 3);
singlyLinkedList.print(); // => 2 3 4 6
singlyLinkedList.insertAfter(5, 9); // insertAfter a non existing node
singlyLinkedList.print(); // => 2 3 4 6
singlyLinkedList.insertAfter(5, 4);
singlyLinkedList.insertAfter(7, 6); // insertAfter the tail
singlyLinkedList.print(); // => 2 3 4 5 6 7
singlyLinkedList.add(8); // add node with normal method
singlyLinkedList.print(); // => 2 3 4 5 6 7 8
console.log('length is 7:', singlyLinkedList.length()); // => 7
singlyLinkedList.traverse(function (node) { node.data = node.data + 10; });
singlyLinkedList.print(); // => 12 13 14 15 16 17 18
singlyLinkedList.traverse(function (node) { console.log(node.data); }); // => 12 13 14 15 16 17 18
console.log('length is 7:', singlyLinkedList.length()); // => 7
