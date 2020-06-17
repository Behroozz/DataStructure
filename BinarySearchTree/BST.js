class Node {
  constructor(data) {
    this.data = data
    this.left = null
    this.right = null
  }
}

class BST {
  constructor() {
    this.root = null
  }

  add(data) {
    let newNode = new Node(data)

    if(!this.root) {
      this.root = newNode
      return
    }

    let current = this.root
    while(current) {
      if(current.data > newNode.data) {
        if(!current.left) {
          current.left = newNode
          break
        } 
        current = current.left
      } else if(current.data < newNode.data) {
          if(!current.right) {
            current.right = newNode
            break
          }
          current = current.right
      } else {
        console.log('Node already exists')
        break
      }
    }

  }

  remove(data) {
    let removeNode = function(current, data) {
      if(!current) {
        return null
      }
      if(current.data === data) {
        if(!current.left && !current.right) {
          return null
        }
        if(!current.left) {
          current = current.right
          return current
        }
        if(!current.right) {
          current = current.left
          return current
        }
      } else if(current.data > data){
        current.left = removeNode(current.left, data)
        return current
      } else {
        current.right = removeNode(current.right, data)
        return current
      }
    }
    this.root =  removeNode(this.root, data)
  }

  getMin() {
    let current = this.root
    if(!current) {
      return 0
    }
    while(current.left) {
      current = current.left
    }
    return current.data
  }

  getMax() {
    let current = this.root
    if(!current) {
      return 0
    }
    while(current.right) {
      current = current.right
    }
    return current.data
  }

  getHeight(node = this.root) {
    if(node === null) {
      return -1
    }
    if(node.left === null && node.right === null) {
      return 0
    }
    if(node.left === null) {
      return this.getHeight(node.right) + 1
    }
    if(node.right ===  null) {
      return this.getHeight(node.left) + 1
    }
    const lHeight = this.getHeight(node.left)
    const rHeight = this.getHeight(node.right)
    return Math.max(lHeight, rHeight) + 1
  }

  breathFirstSearch() {
    let queue = []
    queue.push(this.root)
    while(queue.length > 0) {
      let node = queue.shift()
      console.log(node.data)
      if(node.left) {
        queue.push(node.left)
      }
      if(node.right){
        queue.push(node.right)
      }
    }
  }

  depthFirstSearch(traverse, data) {
    let preOrder = function(data, node) {
      if(node) {
        if(node.data = data) {
          console.log(node)
          return
        }
        preOrder(data, node.left) 
        preOrder(data, node.right)   
      }
    }

    let inOrder = function(data, node) {
      if(node) {
        inOrder(data, node.left)
        if(node.data = data) {
          console.log(node)
          return
        }
        inOrder(data, node.right)
      }
    }
  
    let postOrder = function(data, node) {
      if(node) {
        postOrder(data, node.left)
        postOrder(data, node.right)
        if(node.data = data) {
          console.log(node)
          return
        }
      }
    }
    let node = this.root
    if(!node) {
      return -1
    }

    switch(traverse) {
      case 'pre-order': {
        preOrder(data, node)
        break
      }
      case 'in-order': {
        inOrder(data, node)
        break
      }
      case 'post-order': {
        postOrder(data, node)
        break
      }
      default:
        console.error('Invalid traverse method.')
        break
    }
  }

  print() {

  }
}

module.exports = {
  BST
}