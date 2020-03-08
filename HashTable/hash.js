// Given nums = [2, 7, 11, 15], target = 9,

// Because nums[0] + nums[1] = 2 + 7 = 9,
// return [0, 1].

// var twoSum = function(nums, target) {
//   let hashMap = {}
//   for(let i=0; i< nums.length; i++) {
//     const diff = target - nums[i]
//     if(diff in hashMap) {
//       return [hashMap[diff], i]
//     }
//     hashMap[nums[i]] = i
//   }
// }

// const result = twoSum([2,7,11,15,4], 11)
// console.log('result', result)


// s = "leetcode"
// return 0.

// s = "loveleetcode",
// return 2.

// var firstUniqChar = function(s) {
//   let obj = {} 
//   // Of over iterable element  like string, or array
//   // in iterate over objet key values, object properties
//   for(let i of s) {
//     obj[i] = obj[i] ? obj[i] + 1 : 1
//   }

//   for(let i in obj) {
//     if(obj[i] === 1) {
//       return i
//     }
//   }
//   return -1
// };

// console.log(firstUniqChar('leetcode'))


// Given two arrays, write a function to compute their intersection.
// Example 1:
// Input: nums1 = [1,2,2,1], nums2 = [2,2]
// Output: [2]
// Example 2:
// Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
// Output: [9,4]

// const findIntersection = (arr1, arr2) => {
//   let intersection = []
//   const arr1Sum = new Set(arr1)
//   arr1Sum.forEach((item) => {
//     if(arr2.includes(item)) {
//       intersection.push(item)
//     }
//   })
//   return intersection
// }

// const result = findIntersection([4,9,5], [9,4,9,8,4])
// console.log('result', result)


// Input:
// const first = ["Shogun", "Tapioca Express", "Burger King", "KFC"]
// const second = ["Piatti", ,"Tapioca Express",  "The Grill at Torrey Pines", "Hungry Hunter Steakhouse", "Shogun"]
// Output: ["Tapioca Express"]
// Explanation: The only restaurant they both like is "Shogun".
// Example 2:
// Input:
// let first =  ["Shogun", "Tapioca Express", "Burger King", "KFC"]
// let second = ["KFC", "Shogun", "Burger King"]
// Output: ["Shogun"]
// Explanation: The restaurant they both like and have the least index sum is "Shogun" with index sum 1 (0+1).

// const findRestaurant = (rest1, rest2) => {
//   let min = Infinity
//   let intersection = ''
//   let hashMap = {}
//   for(let i=0; i< rest1.length; i++) {
//     if(!hashMap[rest1[i]]) {
//       hashMap[rest1[i]] = i
//     }
//   }

//   for(let i=0; i< rest2.length; i++) {
//     if(hashMap[rest2[i]] !== undefined) {
//       hashMap[rest2[i]] += i
//       if(min > hashMap[rest2[i]]) {
//         min = hashMap[rest2[i]]
//         intersection = rest2[i]
//       }
//     }
//   }

//   return intersection
// }


// const result = findRestaurant(first, second)
// console.log('result', result)

// Given an array of integers and an integer k, find out whether there are two distinct indices i and j in the array such that nums[i] = nums[j] and the absolute difference between i and j is at most k.

// Example 1:

// Input: nums = [1,2,3,1], k = 3
// Output: true
// Example 2:

// Input: nums = [1,0,1,1], k = 1
// Output: true
// Example 3:

// Input: nums = [1,2,3,1,2,3], k = 2
// Output: false

// let containsNearbyDuplicate = function(nums, k) {
//   if(nums.length === 0) return false

//   hashMap = {}
//   let result = false
//   nums.forEach((element, i) =>  {
//     if(hashMap[element] === undefined) {
//       hashMap[element] = i
//     } else {
//       if(Math.abs(hashMap[element] - i) === k) {
//         result = true
//       }
//     }
//   })
//   return result
    
// };


// const result = containsNearbyDuplicate([1,2,3,1,2,3], 2)
// console.log('result', result)


// Given an array of strings, group anagrams together.

// Example:

// Input: ["eat", "tea", "tan", "ate", "nat", "bat"],
// Output:
// [
//   ["ate","eat","tea"],
//   ["nat","tan"],
//   ["bat"]
// ]


// let groupAnagram = (arr) => {
//   let hashMap = {}
//   for(let i=0; i< arr.length; i++) {
//     let sortedElement = arr[i].split('').sort().join('')
//     if(hashMap[sortedElement] === undefined) {
//       hashMap[sortedElement] = [arr[i]]
//     } else {
//       hashMap[sortedElement] = hashMap[sortedElement].concat(arr[i])
//     }
//   }

//   return Object.values(hashMap)
// }

// let myArr = ["eat", "tea", "tan", "ate", "nat", "bat"]
// const result = groupAnagram(myArr)
// console.log('result', result)


const IPS = [1,2,3,2,1]

const getIPFreq = (arr) => {
  let hashMap = {}

  for(let i=0; i< arr.length; i++) {
    if(hashMap[arr[i]] === undefined) {
      hashMap[arr[i]] = 1
    } else {
      hashMap[arr[i]] += 1
    }
  }

  return hashMap
}

const getAveFreq = (hashMap) => {
  return Object.values(hashMap).reduce((acc, curr) => {
    acc +=curr
    return acc
  }, 0)
}
