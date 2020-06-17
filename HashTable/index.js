// https://www.bigocheatsheet.com/
// https://rohan-paul.github.io/javascript/2018/01/01/Algorithm-in-JavaScript-Hash_Table/
const { HashTable, HashTableWIthChaining } = require('./HashTableWithCollisionHandling')

const myHashTable = new HashTable()
myHashTable.put('A')
myHashTable.put('A')
myHashTable.put('B')
myHashTable.put('C')

myHashTable.print()

const myHashTableWIthChaining = new HashTableWIthChaining()
myHashTableWIthChaining.put('A', 'AA')
myHashTableWIthChaining.put('A', 'AB')
myHashTableWIthChaining.put('A', 'AC')
myHashTableWIthChaining.put('B', 'BB')
myHashTableWIthChaining.put('C', 'CC')
myHashTableWIthChaining.print()
const key = myHashTableWIthChaining.get('A')
console.log('key', key)