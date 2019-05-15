class TreeNode {
  constructor(val) {
    this.val = val
    this.left = null
    this.right = null
  }
}

class BST {
  constructor() {
    this.root = null
  }

  addNode(val) {
    function dfs(node) {
      if(node === null) {
        return new TreeNode(val)
      } else if(val > node.val) {
        node.right = dfs(node.right)
      } else {
        node.left = dfs(node.left)
      }
      return node
    }

    this.root = dfs(this.root)
  }

  addNodes(arr) {
    let tree = this
    arr.forEach(el => tree.addNode(el))
  }

  forEachNode(callback) {
    function dfs(node) {
      if(node === null) return null
      callback(node)
      dfs(node.left)
      dfs(node.right)
      return node
    }

    dfs(this.root)
    return this
  }

  printTree() {
    this.forEachNode(print)
  }

  reverseTree() {
    this.forEachNode(reverse)
  }

  squareTree() {
    this.forEachNode(square)
  }

  reduce(reducer, startVal) {
    function dfs(node, accumulator) {
      if(node === null) return accumulator
      return reducer(node, dfs(node.left, accumulator), dfs(node.right, accumulator))
    }
    return dfs(this.root, startVal)
  }

  countNodes() {
    return this.reduce(count, 0)
  }

  sumTreeNodes() {
    return this.reduce(sum, 0)
  }

  height() {
    return this.reduce(height, 0)
  }

}

function print(node) {
  console.log(node.val)
}

function square(node) {
  node.val = node.val * node.val
}

function reverse(node) {
  [node.left, node.right] = [node.right, node.left]
}



function height(node, left, right) {
  return Math.max(left, right) + 1
}

function count(node, left, right) {
  return 1 + left + right
}

function sum(node, left, right) {
  return node.val + left + right
}


let tree = new BST()

//     40
//   20   60
// 10 30  50 70

tree.addNodes([40, 20, 60, 10, 30, 50, 70])
tree.printTree()
tree.reverseTree()
tree.printTree()
tree.squareTree()
tree.printTree()
console.log('tree.height()', tree.height())
console.log('tree.countNodes()', tree.countNodes())
console.log('tree.sumTreeNodes()', tree.sumTreeNodes())



