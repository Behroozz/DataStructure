const { BST } = require('./BST')

const myBST = new BST()

myBST.add(3)
myBST.add(5)
myBST.add(6)
myBST.add(7)
myBST.add(4)
myBST.add(1)
myBST.add(2)

// console.log('max', myBST.getMax())
// console.log('min', myBST.getMin())
// console.log('height', myBST.getHeight())
// console.log('BreathFirstSearch', myBST.breathFirstSearch())
// myBST.add(1)
// myBST.add(2)
// myBST.add(3)
// myBST.add(4)

console.log(JSON.stringify(myBST))
console.log('DepthFirstSearch', myBST.depthFirstSearch('pre-order', 6))


// myBST.remove(1)

// console.log(JSON.stringify(myBST))