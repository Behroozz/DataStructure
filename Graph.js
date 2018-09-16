class Graph {
  constructor(noOfVert) {
    this.noOfVert = noOfVert;
    this.AdjList = new Map();
  }
  addVertex(v) {
    this.AdjList.set(v, []);
  }
  addEdge(v, w) {
    this.AdjList.get(v).push(w);
    this.AdjList.get(w).push(v);
  }

  printGraph() {
    let keys = this.AdjList.keys();
    for(let key of keys) {
      let values = this.AdjList.get(key);
      console.log(key + '--> ' + values.join(','));
    } 
  }
}


let myGraph = new Graph(3);
myGraph.addVertex('A');
myGraph.addVertex('B');
myGraph.addVertex('C');
myGraph.addEdge('A','B');
myGraph.addEdge('A','C');
myGraph.printGraph();


Graph.prototype.bfs =  function(startingPoint) {
  vistited = [];
  let q = new Queue();

  for(let i=0; i< this.noOfVert; i++) {
    visited[i] = false;
  }

  // [A---> B,C]
  // [B ---> C]
  //3
  //[false,false,false]
  //['A']
  //[true,false,false]
  q.enqueue(startingPoint)
  visited[startingPoint] = true;

  //A --> [B, C]
  // B ---> C
  while(!q.isEmpty()) {
    let getQueueElement = q.dequeue();
    let AdjVertecesList = this.AdjList.get(getQueueElement);

    for(let adj of AdjVertecesList ) {
      let value = AdjVertecesList[adj];
      if(!visited[value]) {
        vistited[value] = true;
        q.enqueue(value);
      }
    }
  }
}


Graph.prototype.DFS =  function DFS(startingPoint) {
  let visited = [];
  for(let i=0; i< this.AdjList; i++) {
    visited[i] = false;
  }

  this.DFSUtil(startingPoint, visited);
}

function DFSUtil(startingPoint, visited) {
  visted[startingPoint] = true;
  console.log(startingPoint);

  let get_adj = this.AdjList.get(startingPoint);
  for(let i in get_adj) {
    let get_value = this.AdjList.get(i);

  }
  this.DFSUtil()

}



class Node {
  constructor(element) {
    this.element =element;
    this.next = null;
  }
}

class LinkedList {
  constructor(head) {
    this.head = head;
    this.size = 0;
  }

  addNode(element) {
    let Node = new Node(element);
    if(this.head === null) {
      this.head = Node;
    } else {
      current = this.head;
      while(current.next) {
        current = current.next
      }
      current.next = Node;
    }
    this.size ++;
  }

  insetAt(element, index) {
    if(index && index > this.size) {
      return -1;
    } else {
      let Node = new Node(element);
    if(indx === 0) {
      Node.next = this.head;
      this.head = Node;
    } else {
      let current, prev;
      let itr = 0;

      current = this.head;
      while(itr < index) {
        itr ++;
        prev = current;
        current =  current.next;
      }

      prev.next = Node;
      Node.next = current;
    }
    this.size ++;
    }
  }
}







class Node {
  costructor(element) {
    this.element = elemenet;
    this.next = null;
  }
}

class LinkedList {
  constructor(head) {
    this.head = head;
    this.size = 0;
  }
}


class Graph {
  constructor(noOfVert) {
    this.noOfVert = noOfVert;
    this.AdjList = new Map();
  }

  addVertex(v) {
    this.AdjList.push(v, []);
  }

  addEdge(v,w){
    this.AdjList.get(v).push(w);
    this.AdjList.get(w).push(v);
  }
}



class Queue {
  constructor() {
    this.items = [];
  }

  enqueue(item) {
    this.items.push(item);
  }

  dequeue() {
    this.items.unshift()
  }

  front() {
    return this.items[0];
  }
}


class Stack {
  constructor() {
    this.items = [];
  }

  push(item) {
    this.items.shift(item)
  }

  pop() {
    this.items.pop();
  }


}

//clouser
var passed = 3;
let addTo = function() {
  var inner = 2;
  return passed + inner;
}

console.log(addTo())


var addTo = function(passed) {
  var addSum = function(inner) {
    return (passed + inner);
  }
  return addSum;
}


var addThree = new addTo(3)


var addTo = function(passed) {
  var add = function(inner) {
    return passed + innner
  }

  return add;
}


let addThree = addTo(3)
addThree(1)
addThree(2)























