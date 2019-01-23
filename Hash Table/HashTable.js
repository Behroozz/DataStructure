class HashTable {
  constructor() {
    this.table = new Array(137)
    this.values = []
  }

  hash(string) {
    const H = 37
    let total = 0
    for(let i=0; i< string.length; i++) {
      total += total* H + string.charCodeAt(i)
    }
    total %= this.table.length
    return parseInt(total)
  }

  showDistro() {
    for(const key in this.table) {
      if(this.table[key] !== undefined) {
        console.log(key, ' : ', this.table[key])
      }
    }
  }

  put(data) {
    const pos = this.hash(data)
    this.table[pos] = data
  }

  get(key) {
    return this.table[key]
  }
}

let generticHashTable = new HashTable()
generticHashTable.put('A')
generticHashTable.put('B')
generticHashTable.put('C')
generticHashTable.put('B')
generticHashTable.put('B')

generticHashTable.showDistro()

console.log(generticHashTable.get(66))

// HashTable with Build Chains technique of collision-resolution.
class noCollisionHashTable extends HashTable {
  constructor() {
    super()
    this.buildChains()
  }
  buildChains() {
    for(let i=0 ; i< this.table.length; i++ ){
      this.table[i] = new Array()
    }
  }

  showDistro() {
    for(let key in this.table) {
      if(this.table[key][0] !== undefined) {
        console.log(key, ' : ', this.table[key])
      }
    }
  }

  put(key, data){ 
    const pos = this.hash(key)
    let index = 0
    if(this.table[pos][index] === undefined) {
      this.table[pos][index] = data 
    } else {
      index ++
      while(this.table[pos][index] !== undefined) {
        index ++  
      }
      this.table[pos][index] = data
    }
  }

  get(key){
    const pos = this.hash(key)
    let index = 0
    let result = []    
    while(this.table[pos][index] != undefined) {
      result.push(this.table[pos][index])
      index ++
    }
    return result
  }
}

let myNoCollisionHashTable = new noCollisionHashTable()
myNoCollisionHashTable.put('A', 'AA')
myNoCollisionHashTable.put('B', 'BB')
myNoCollisionHashTable.put('B', 'BB')
myNoCollisionHashTable.put('C', 'CC')
myNoCollisionHashTable.showDistro()
console.log(myNoCollisionHashTable.get('B'))
console.log(myNoCollisionHashTable.get('C'))
