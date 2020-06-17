// Question:
// Given a 2d grid map of '1's (land) and '0's (water), count the number of islands. 
// An island is surrounded by water and is formed by connecting adjacent lands horizontally 
// or vertically. You may assume all four edges of the grid are all surrounded by water.

// Example 1:

// Input:
// 11110
// 11010
// 11000
// 00000

// Output: 1
// Example 2:

// Input:
// 11000
// 11000
// 00100
// 00011

// Output: 3

/**
 * @param {character[][]} grid
 * @return {number}
 */
const numIslands = function(grid) {
  let visited = new Array(grid.length).fill(new Array(grid[0].length).fill(false))
  let counter = 0
  for(let row=0; row< grid.length; row++) {
    for(let column=0; column< grid[row].length; column++) {
      // if(visited[row][column] !== true && grid[row][column] === '1') {
      if(visited[row][column] === false) {
        counter++
        markIsland(grid, row, column, visited)
      }
    }  
  }
  return counter
}

const markIsland = function(grid, row, column, visited) {
  if(row < 0 || row >= grid.length || column < 0 || column >= grid[row].length) {
    return
  }
  if(visited[row][column] === true) {
    return
  }

  visited[row][column] = true
  if(grid[row][column] === '0') {
    return
  }
  
  markIsland(grid, row, column + 1, visited)
  markIsland(grid, row, column - 1, visited)
  markIsland(grid, row+1, column, visited)
  markIsland(grid, row-1, column, visited)
}

const grid1 = 
[["1","1","1","1","0"],
["1","1","0","1","0"],
["1","1","0","0","0"],
["0","0","0","0","0"]]

const grid2 = 
[["1","1","0","0","0"],
["1","1","0","0","0"],
["0","0","1","0","0"],
["0","0","0","1","1"]]

const result  = numIslands(grid1)
console.log('result', result)
