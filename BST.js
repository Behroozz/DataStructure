function Node(data) {
  this.data = data
  this.left = null
  this.right = null
}

function BST() {
  this.root = null
}

BST.prototype.add = function(data) {
  let node = new Node(data)
  if(!this.root) {
    this.root = node
  } else {
    let current = this.root
    while(current) {
      if(current.data > node.data) {
        if(!current.left) {
          current.left = node
          break
        }
        current = current.left
      } else if(current.data < node.data) {
        if(!current.right) {
          current.right = node
          break
        }
        current = current.right
      } else {
        break
      }
    } 
  }
}

BST.prototype.remove = function(data) {
  let that = this
  let removeNode = function(node, data) {
    if(!node) {
      return null
    }
    if(node.data === data) {
      if(!node.left && !node.right) {
        return null
      }
      if(!node.left) {
        return node.right
      }
      if(!node.right) {
        return node.left
      }

    } else if(node.data > data) {
      node.left = removeNode(node.left, data )
      return node
    } else {
      node.right = removeNode(node.right, data)
      return node
    }
  }
  this.root = removeNode(this.root, data)
}

BST.prototype.printByLevel = function() {
  if(!this.root) {
    return console.log('No root node found');
  }
  var newline = new Node('\n');
  var queue = [this.root, newline];
  var string = '';
  while(queue.length) {
    var node = queue.shift();
    string += node.data.toString() + (node.data !== '\n' ? ' ' : '');
    if(node === newline && queue.length) {
      queue.push(newline);
    }
    if(node.left) {
      queue.push(node.left);
    }
    if(node.right) {
      queue.push(node.right);
    }
  }
  console.log(string.trim());
};

BST.prototype.breathFirstSeach = function() {
  this.queue = []
  this.queue.push(this.root) 
  while(this.queue.length) {
    let node = this.queue.shift()
    console.log(node.data)
    if(node.left) {
      this.queue.push(node.left)
    }
    if(node.right) {
      this.queue.push(node.right)
    }
  }
}

BST.prototype.deapthFirstSearch = function() {
  let current = this.root

}

BST.prototype.preOrder = function(node) {
  if(node) {
    console.log(ndoe.data)
  }
  this.preOrder(node.left)
  this.preOrder(node.right)
}

BST.prototype.inOrder = function(node) {
  if(node){
    this.inOrder(node.left)
    console.log(node.data)
    this.inOrder(node.right)
  }
}

BST.prototype.postOrder = function() {
  if(node) {
    this.postOrder(node.left)
    this.postOrder(node.right)  
    console.log(node)
  }
}

BST.prototype.contain = function(data) {
  let current = this.root
  while(current) {
    if(current.data === data) {
      return true
    } else if(current.data > data) {
      current = current.left
    } else {
      current = current.right
    }
  }
  return false
}

BST.prototype.getMax = function() {
  if(!node) {
    node = this.root
  } 
  while(node.left) {
    node = node.left
  }
  return node.data
}

BST.prototype.getMin = function(node) {
  if(!node) {
    node = this.root
  }
  while(node.right) {
    node = node.right
  }
  return node.data
}

BST.prototype.isBalanced = function() {

}

BST.prototype.getHeight = function(node) {
  if(!node) {
    node = this.root
  }
  return this._getHeight(node)
}
BST.prototype._getHeight = function(node) {
  if(!node) {
    return -1
  }
  let left = this.getHeight(node.left)
  let right = this.getHeight(node.right)
  return this.getMax(left, right) + 1
}

BST.prototype.print = function() {
  if(!this.root) {
    return console.log('No root node found');
  }
  var newline = new Node('|');
  var queue = [this.root, newline];
  var string = '';
  while(queue.length) {
    var node = queue.shift();
    string += node.data.toString() + ' ';
    if(node === newline && queue.length) {
      queue.push(newline);
    }
    if(node.left) {
      queue.push(node.left);
    }
    if(node.right) {
      queue.push(node.right);
    }
  }
  console.log(string.slice(0, -2).trim());
};



var binarySearchTree = new BST();
binarySearchTree.add(5);
binarySearchTree.add(3);
binarySearchTree.add(7);
binarySearchTree.add(2);
binarySearchTree.add(4);
binarySearchTree.add(4);
binarySearchTree.add(6);
binarySearchTree.add(8);
binarySearchTree.print(); // => 5 | 3 7 | 2 4 6 8
binarySearchTree.remove(4)
binarySearchTree.print()

console.log(binarySearchTree.contain(7))
console.log(binarySearchTree.contain(4))
