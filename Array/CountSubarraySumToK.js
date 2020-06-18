// Count Subarrays That Sum To K
// Given an array of integers arr and an integer value k, return 
// the total amount of unique, contiguous, subarrays that sum to k in arr.

// Example 1:
// let Input1 = [1, 0, -1, 1] 
// let k1 = 0
// Output: 4
// Explanation: 4 subarrays sum up to 0

//                i j
// [1, 0, -1, 1] [1,1]
// [1, 0, -1, 1] [0,2]
// [1, 0, -1, 1] [1,3]
// [1, 0, -1, 1] [2,3]

// Example 2:
let Input2 = [3, 7, -4, -2, 1, 5] 
let k2 = 3
// Output: 2
// Explanation: 2 subarrays sum up to 3

//                       i j
// [3, 7, -4, -2, 1, 5] [0,0]
// [3, 7, -4, -2, 1, 5] [1,2]

// Constraints:
// The array will not be null or empty (len(arr) > 0)



/**
 * @param {Array<number>} arr
 * @param {number} k
 * @return {number}
 */
const countSubarrays = (arr, k) => {
  let fastStart = 0
  let slowStart = 0
  let end = arr.length
  let sum = 0
  let subArrays = []
  while(fastStart < end) {
    sum =+ arr[fastStart]
    console.log('arr[fastStart]', arr[fastStart])
    console.log('sum', sum)
    if(sum === 0) {
      console.log('fast', fastStart)
      console.log('slow', slowStart)
      break
      // subArrays.push([slowStart, fastStart])
      // slowStart ++
      // fastStart = slowStart
    } else {
      fastStart ++
    }
  }
  return subArrays
}

let Input1 = [1, 0, -1, 1] 
let k1 = 0
const result = countSubarrays(Input1, k1)
console.log('result', result)

// [1,    0,     -1,     1] --> 
// fs ss --> 