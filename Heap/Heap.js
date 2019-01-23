// A Heap is a special Tree-based data structure in which the tree 
// is a complete binary tree. Generally, Heaps can be of two types:

//Max-Heap: In a Max-Heap the key present at the root node must be 
// greatest among the keys present at all of it’s children. The same 
// property must be recursively true for all sub-trees in that Binary Tree.

//     9
//   |   |
//  8     6
// | |   | |
// 5 2   1 3
//Min-Heap: In a Min-Heap the key present at the root node must be 
// minimum among the keys present at all of it’s children. The same 
// property must be recursively true for all sub-trees in that Binary Tree.
//     1
//   |   |
//  2     3
// | |   | |
// 5 2   6 7

// k --> 2k(left) -->2k+1(right)
// element at x parent is in x/2

// array [9 8 6 5 2 1 3]
// index [0 1 2 3 4 5 6]

// Binary heaps are a specific implementation of a heap whereby 
// each parent can have no more than two children. Additionally, 
// a complete binary heap has every level filled, except for the bottom 
// level. This level gets populated left to right.

// 1
// When the priority queue is empty, we set this.first 
// to a new node with the passed in value and priority.

// 2
// When the new node has a higher priority, we need to set 
// its .next property to the current this.first node, and then reset this.first to be the new node.

// Most uptimized priority Queue can be impelemented by Heap

//https://codeburst.io/implementing-a-complete-binary-heap-in-javascript-the-priority-queue-7d85bd256ecf

class Node {
  constructor(val, priority) {
    this.val = val
    this.priority = priority
    this.next = null
  }
}

// Not uptimized heap
class PriorityQueue {
  constructor() {
    this.first = null
  }

  //  O(n)                   |     
  // {C,3} --> [{A,5}, {B,4}, {D,2}, {E,1}]
  insert(value, priority) {
    const newNode = new Node(value, priority)
    if(!this.first || priority > this.first.priority) {
      newNode.next = this.first
      this.first = newNode
    } else {
      let current = this.first
      while(current.next && priority < current.next.priority) {
        current = current.next
      }
      newNode.next = current.next
      current.next = newNode
    }
  }

  //O(1)
  remove() {
    const first = this.first
    this.first = first.next
    return first
  }
}

// 1
// The priority of the node that gets inserted 
// cannot be greater than its parent.

// 2
// Every level of the heap must be full, except the 
// lowest level, which fills left to right.

// Max-Heap
class compeleteBinaryTreePriorityQueue {
  constructor() {
    this.heap = []
  }

  insert(value, priority) {
    const newNode = new Node(value, priority);
    this.heap.push(newNode);
    let currentNodeIdx = this.heap.length - 1;
    let currentNodeParentIdx = Math.floor(currentNodeIdx / 2);
    while (
      this.heap[currentNodeParentIdx] &&
      newNode.priority > this.heap[currentNodeParentIdx].priority
    ) {
      const parent = this.heap[currentNodeParentIdx];
      this.heap[currentNodeParentIdx] = newNode;
      this.heap[currentNodeIdx] = parent;
      currentNodeIdx = currentNodeParentIdx;
      currentNodeParentIdx = Math.floor(currentNodeIdx / 2);
    }
  }
}


// let myPQ = new compeleteBinaryTreePriorityQueue()
// myPQ.insert('A',9)
// myPQ.insert('B',8)
// myPQ.insert('D',6)
// myPQ.insert('C',5)

// console.log(myPQ)

// myPQ.insert('C',7)

// console.log(myPQ)


class PQNode {
  constructor(value, priority) {
    this.value = value
    this.priority = priority
  }
}

class MaxHeapPriorityQueue {
  constructor() {
    this.heap = []
  }

//     9(A)
//    |   |
//  8(B)  6(D)
//  |
//  5(E) 
// ---> 7(C)

// [A, B, D, E]
// [9, 8, 6, 5]

// [A, B, D, E, C]
// [9, 8, 6, 5, 7]
// [0 ,1, 2, 3, 4]

// currentInx = 4
// parentInx =  Math.floor(4/2) = 2
// while --> this.heap[2] = 6 < 7

// [A, B, C , E, D]
// [9, 8, 7, 5, 6]
// [0 ,1, 2, 3, 4]

// O(logn)
  insert(value, priority) {
    let newNode = new PQNode(value, priority)
    this.heap.push(newNode)
    let currentIndx = this.heap.length -1
    let parentIndx = Math.floor(currentIndx /2)  
    
    while(this.heap[parentIndx] && newNode.priority > this.heap[parentIndx].priority) {
      let parent = this.heap[parentIndx]
      let current = this.heap[currentIndx]

      this.heap[currentIndx] = parent
      this.heap[parentIndx] = current

      currentIndx = parentIndx
      parentIndx = Math.floor(currentIndx/2)
    }
  }

  //O(log n)
  remove() {
    if (this.heap.length < 3) {
      const toReturn = this.heap.pop();
      this.heap[0] = null;
      return toReturn;
    }
    const toRemove = this.heap[0];
    this.heap[0] = this.heap.pop();
    let currentIdx = 1;
    let [left, right] = [2*currentIdx, 2*currentIdx + 1];
    let currentChildIdx = this.heap[right] && this.heap[right].priority >= this.heap[left].priority ? right : left;
    while (this.heap[currentChildIdx] && this.heap[currentIdx].priority <= this.heap[currentChildIdx].priority) {
      let currentNode = this.heap[currentIdx]
      let currentChildNode = this.heap[currentChildIdx];
      this.heap[currentChildIdx] = currentNode;
      this.heap[currentIdx] = currentChildNode;
    }
    return toRemove;
  }
}

let myPQ = new MaxHeapPriorityQueue()
myPQ.insert('A',9)
myPQ.insert('B',8)
myPQ.insert('D',6)
myPQ.insert('E',5)

console.log(myPQ)

myPQ.insert('C',7)

console.log(myPQ)

console.log(myPQ.remove())
console.log(myPQ.remove())
console.log(myPQ.remove())

//console.log(myPQ)

