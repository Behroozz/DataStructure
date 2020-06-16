const { LinkedList } = require('../LinkedList/linkedList')

const myLinkedList = new LinkedList()
myLinkedList.insertFront('A')
myLinkedList.insertFront('B')
myLinkedList.insertEnd('C')
myLinkedList.insertAt('D',1)
console.log('myLinkedList', JSON.stringify(myLinkedList))
// myLinkedList.deleteLast()
// myLinkedList.deleteLast()
myLinkedList.deleteAt(2)

console.log('myLinkedList', JSON.stringify(myLinkedList))