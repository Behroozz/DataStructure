const defaultHashTableSize =  32
class HashTable {
  constructor() {
    this.table = new Array(defaultHashTableSize)
  }

  hash(data) {
    const H =  37
    let total = 0
    for(let i=0; i<data.length; i++) {
      total += total * H + data.charCodeAt(i)
    }
    total %= this.table.length
    return parseInt(total)
  }

  put(data) {
    const pos = this.hash(data)
    this.table[pos] = data
  }

  get(key) {
    return this.table[key]
  }

  print() {
    for(const key in this.table) {
      console.log(key, ' : ', this.table[key])
    }
  }
}

class HashTableWIthChaining extends HashTable {
  constructor() {
    super()
    this.buildChains()
  }

  buildChains() {
    for(let i=0; i< this.table.length; i++) {
      this.table[i] = new Array()
    }
  }

  put(key, data) {
    const pos = this.hash(key)
    let index = 0
    if(this.table[pos][index] === undefined) {
      this.table[pos][index] = data
      return
    }
    index ++
    while(this.table[pos][index] !== undefined) {
      index ++
    } 
    this.table[pos][index] = data
  }

  get(key) {
    const pos = this.hash(key)
    let index = 0
    let result = []
    while(this.table[pos][index] !== undefined) {
      result.push(this.table[pos][index])
      index ++
    }
    return result
  }
}

module.exports = {
  HashTable,
  HashTableWIthChaining
}
