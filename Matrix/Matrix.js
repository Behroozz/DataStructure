function matrxiSpiral(matrix) {
  let result = []

  const goAround = (matrix) => {
    if(matrix.length === 0 ) {
      return
    }  
    // right
    result = result.concat(matrix.shift())  

    // down
    for(let i=0; i< matrix.length - 1; i++) {
      result.push(matrix[i].pop())
    }

    //bottom
    result = result.concat(matrix.pop().reverse())

    // up
    for (var k=matrix.length -1; k > 0; k--) {
      result.push(matrix[k].shift());
    }

    return goAround(matrix)

    }
    goAround(matrix)

    return result
}

const spiralMatrix = 
[[1,2,3,4],
[5,6,7,8],
[9,10,11,12],
[13,14,15,16]]

const result = matrxiSpiral(spiralMatrix)
console.log('result', result)

