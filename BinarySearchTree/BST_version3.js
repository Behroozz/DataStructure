class Node {
  constructor(data) {
    this.data = data
    this.left = null
    this.right = null
  }
}

class Tree {
  constructor() {
    this.root =  null
  }

  insetNode(value) {
    const newNode = new Node(value)
    if(!this.root) {
      this.root = newNode
    } else {
      let currentRoot = this.root
      while(currentRoot) {
        if(currentRoot.data < newNode.data) {
          if(!currentRoot.right) {
            currentRoot.right = newNode
            break
          } else {
            currentRoot = currentRoot.right
          }
        } else {
          if(!currentRoot.left) {
            currentRoot.left = newNode
            break
          } else {
            currentRoot = currentRoot.left
          }
        }
      }
    }
  }

  // Left / Root/ Right
  // Sorted 1,2,3
  inOrder(root) {
    let current = root
    if(!current) {
      return
    }
    this.inOrder(current.left)
    console.log('Inorder:', current.data)
    this.inOrder(current.right)
  }

  // Root / Left / Right
  preOrder(root) {
    let current = root
    if(!current) {
      return
    }
    console.log('preOrder:',current.data)
    this.preOrder(current.left)
    this.preOrder(current.right)
  }

  // Left / Right /  Root
  postOrder(root) {
    let current = root
    if(!current) {
      return
    }
    this.postOrder(current.left)
    this.postOrder(current.right)
    console.log('preOrder:',current.data)

  }

  breathFirstSearch(root) {
    let current = root
    let stack = []
    if(!current) {
      return
    }
    stack.push(current)
    while(stack.length !== 0) {
      for(let i=0; i< stack.length ; i++) {
        let node = stack.shift()
        console.log('breath first search', node.data)
        if(node.left) {
          stack.push(node.left)
        } 
        if(node.right) {
          stack.push(node.right)
        }
      }
    }
  }
}

const myTree = new Tree()
myTree.insetNode(4)
myTree.insetNode(2)
myTree.insetNode(5)
myTree.insetNode(8)
myTree.insetNode(3)

  //   4
  // 2    5
  //   3    8
  // {
  //   "root": {
  //     "data": 4,
  //     "left": {
  //       "data": 2,
  //       "left": null,
  //       "right": {
  //         "data": 3,
  //         "left": null,
  //         "right": null
  //       }
  //     },
  //     "right": {
  //       "data": 5,
  //       "left": null,
  //       "right": {
  //         "data": 8,
  //         "left": null,
  //         "right": null
  //       }
  //     }
  //   }
  // }
console.log(JSON.stringify(myTree))

myTree.inOrder(myTree.root)
// myTree.preOrder(myTree.root)
// myTree.postOrder(myTree.root)

// myTree.breathFirstSearch(myTree.root)