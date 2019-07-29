// https://leetcode.com/explore/learn/card/introduction-to-data-structure-binary-search-tree/140/introduction-to-a-bst/1008/
// https://khan4019.github.io/front-end-Interview-Questions/bst.html
// IS VALID BST
//    2
//   / \
//  1   3

// Input: [2,1,3]
// Output: true

//     5
//    / \
//   1   4
//      / \
//     3   6

// Input: [5,1,4,null,null,3,6]
// Output: false
// Explanation: The root node's value is 5 but its right child's value is 4.

// let input = [2,1,3]

// function TreeNode(val, isRoot=false) {
//   this.root = isRoot
//   this.val = val
//   this.left = this.right = null
// }

// function createBinaryTree(arr) {
//   return arr.reduce((tree, value) => tree ? insertNode(tree, value) : new TreeNode(value, true), null)
// }

// function insertNode(tree, value) {
//   let node = tree
//   let key
//   while(node.val !== value) {
//     key = value < node.val ? 'left' : 'right'
//     if(!node[key]){
//       node[key] = new TreeNode(value)
//       break
//     }
//     node = node[key]
//   }
//   return tree
// }

// const myTree = createBinaryTree([2,1,3])
// console.log('myTree', myTree)

function TreeNode(value) {
  this.value = value
  this.left = this.right = null
}

function BST() {
  this.root = null
}

BST.prototype.insertNode = function(val) {
  let root = this.root

  if(!root) {
    this.root = new TreeNode(val)
    return
  }

  let currentNode = root
  let newNode = new TreeNode(val)

  while(currentNode) {
    if(val < currentNode.value) {
      if(!currentNode.left) {
        currentNode.left = newNode
        break
      } else {
        currentNode = currentNode.left
      }
    } else {
      if(!currentNode.right) {
        currentNode.right = newNode
        break
      } else {
        currentNode = currentNode.right
      }
    }
  }
}

BST.prototype.removeData = function(value) {
  this.root = removeNode(this.root, value)

  function removeNode(node, value) {
    // console.log('node', node)
    // console.log('value', value)
    if(node === null) {
      return null
    } else if(value < node.value) {
      node.left = removeNode(node.left, value)
      return node
    } else if(value > node.value) {
      node.right = removeNode(node.right, value)
      return node
    } else {
      if(node.right === null && node.right === null) {
        node = null
        return node
      }
      if(node.left === null) {
        node = node.right
        return node
      }
      if(node.right === null) {
        node = node.left
        return node
      }
    }
  }
}

BST.prototype.isValidBST = function() {
  let root = this.root

  if(!root) {
    return true
  }

  function helper(root, min, max) {
    if(!root) {
      return true
    }

    if(min!== null && root.left < min || max!== null && root.right > max) {
      return false
    }

    return helper(root.left, min, root.val) && helper(root.right, root.val, max)
  }

  return helper(root, null, null)
}

BST.prototype.breathFirstTraversal = function() {
  let root = this.root
  let queue = []

  queue.push(root)
  while(queue.length !== 0) {
    for(let i=0; i< queue.length; i++) {
      let current = queue.shift()

      console.log('current.value', current.value)

      if(current.left) {
        queue.push(current.left)
      }

      if(current.right) {
        queue.push(current.right)
      } 
    }
  }
}

BST.prototype.depthFirstSearch = function(method) {
  let root = this.root
  switch(method) {
    case('pre-order'): 
      traversePreOrder(root)
    case('post-order'):
      traversePostOrder(root)
    case('in-order'): 
      traverseInOrder(root)  
  }

  function traversePreOrder(root) {
    let current = root
    if(!current) {
      return
    } 
    console.log('current', current.value)
    traversePreOrder(current.left)
    traversePreOrder(current.right)
  }

  function traversePostOrder(root) {
    let current = root
    if(!current) {
      return
    } 
    traversePostOrder(current.left)
    traversePostOrder(current.right)
    console.log('current', current.value)
  }

  function traverseInOrder(root) {
    let current = root
    if(!current) {
      return
    } 
    traverseInOrder(current.left)
    console.log('current', current.value)
    traverseInOrder(current.right)
  }
}

BST.prototype.getMin = function() {
  let current = this.root
  if(!current) {
    return 
  }

  while(current.left) {
    current = current.left
  }

  return current.value
}

BST.prototype.getMax = function() {
  let current = this.root
  if(!current) {
    return 
  }

  while(current.right) {
    current = current.right
  }

  return current.value
}


BST.prototype.getKthSmallest = function(k) {
  let root = this.root
  let count = k
  let response = []

  // inOrderHelper(root)
  response = dfsAlternative(root, count)
  return response

  // 1) in oder recursive
  // ALWAYS RETURN SORTED
  function inOrderHelper(root) {
    if(root === null) return

    inOrderHelper(root.left)

    count--

    if(count === 0) {
      response.push(root.value)
      return
    }

    inOrderHelper(root.right)
  }

  function dfsAlternative(root, count) {
    if(root === null) return 
    let stack = []

    let current = root
    while(true) {
      while(current !== null) {
        stack.push(current)
        current = current.left
      }

      if(stack.length === 0) break

      current = stack.pop()
      count--
      if(count === 0) return current.value
      current = current.right
    }
    return -1
  }
}

BST.prototype.maxPathSum = function() {
  let max = -Infinity
  getMaxSum(this.root)
  return max

  function getMaxSum(root) {
    if(root === null) return 0

    const leftBranch = getMaxSum(root.left)
    const rightHeight = getMaxSum(root.right)

    const currentPath = leftBranch + root.value + rightHeight

    max = Math.max(max, currentPath)

    return root.value + Math.max(leftBranch, rightHeight)
  }
}

function maxDepth(root, num) {
  if(root === null)  return 0

  if(root.left === null && root.right) return num

  if(root.left && root.right) {
    return Math.max(maxDepth(root.left, num+1), maxDepth(root.right, num+1))
  } else if(root.right) {
    return maxDepth(root.right, num+1)
  } else {
    return maxDepth(root.left, num+1)
  }

}

//Calling next() will return the next smallest number in the BST.

//     5
//    / \
//   1   4
//      / \
//     3   6

// BSTIterator iterator = new BSTIterator(root);
// iterator.next();    // return 1
// iterator.next();    // return 3
// iterator.hasNext(); // return true
// iterator.next();    // return 4
// iterator.hasNext(); // return true
// iterator.next();    // return 5
// iterator.hasNext(); // return true
// iterator.next();    // return 6
//iterator.hasNext(); // return false

BST.prototype.next = function* (current) {
  if(current === undefined) {
    current = this.root
  }

  if(current === null) {
    return
  }  

  yield* this.next(current.left)
  yield current.value
  yield* this.next(current.right)
}

BST.prototype.getIterator = function () {
  return new BST(this).next(this.root);
};


const getHeight = (node) => {
  if(!node) return 0
  let leftHeight = getHeight(node.left)
  let rightHeight = getHeight(node.right)
  return Math.max(leftHeight, rightHeight) + 1
}

const isBalanced = (node) => {
  if(!node) {
    return true
  }

  if(node.left !== null && node.left.value > node.value) {
    return false
  }

  if(node.right !== null && node.right.value < node.value) {
    return false
  }

  return (isBalanced(node.left) && isBalanced(node.right))
}

function getAncestor(node, target) {
  if(!node) {
    return false
  }

  if(node.value === target) return true

  if(getAncestor(node.left, target) || getAncestor(node.right, target)) {
    console.log('Ancestor', node.value)
    return true
  }

  return false
}


// Given a binary search tree and a node in it, find the in-order successor of that node in the BST.
// The successor of a node p is the node with the smallest key greater than p.val.

// Input: root = [2,1,3], p = 1
// Output: 2
// Explanation: 1's in-order successor node is 2. Note that both p and the return value is of TreeNode type.

// Input: root = [5,3,6,2,4,null,null,1], p = 6
// Output: null
// Explanation: There is no in-order successor of the current node, so the answer is null

//  2
// 1 3

function inorderSuccessor(root, p) {

  function getMin(root) {
    let current = root
    if(!current) {
      return 
    }
  
    while(current.left) {
      current = current.left
    }
  
    return current.value
  }
  let current = root
  
  if(!root || !p) {
    return false
  }

  if(root.right) {
    return getMin(root.right)
  }
  let result = null
  while(current!== null) {
    if(current.value < p) {
      current = current.right
    } else if(current.value > p) {
      current = current.left
      result = current
      return 
    } else {
      break
    }
  }
  return result
}

//  5
// 1  7
//   6  8
//    null 11 
let bst = new BST()
bst.insertNode(5)
bst.insertNode(1)
bst.insertNode(7)
bst.insertNode(6)
bst.insertNode(8)
bst.insertNode(11)


// var i = bst.getIterator();
// var current;
// while (!(current = i.next()).done) {
//   console.log('current value:', current);
// }

// const kthSmallest = bst.getKthSmallest(1)
// console.log('kthSmallest', kthSmallest)

// const maxDepthNumber = maxDepth(bst.root, 1)
// console.log('maxDepth', maxDepthNumber)

// Given a non-empty binary tree, find the maximum path sum.
// For this problem, a path is defined as any sequence of nodes from some starting node to any node 
// in the tree along the parent-child connections. The path must contain at least one node and does 
// not need to go through the root.
// Example 1:

// Input: [1,2,3]

//        1
//       / \
//      2   3

// Output: 6
// Example 2:

// Input: [-10,9,20,null,null,15,7]

//    -10
//    / \
//   9  20
//     /  \
//    15   7

// Output: 42

// const maxPathSumNumber = bst.maxPathSum()
// console.log('maxPathSumNumber', maxPathSumNumber)

// 5 
// 1  7
//    6 8
//       11


//  5
// 1 7 
//   6 11
console.log('bst', JSON.stringify(bst))
//https://www.geeksforgeeks.org/implementation-binary-search-tree-javascript/
bst.removeData(8)
console.log('bst after remove', JSON.stringify(bst))

