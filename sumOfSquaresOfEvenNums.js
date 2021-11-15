// Given is the next array of numbers: [1,2,3,4,5,6,7,8,9,10]
// Write a program which will output in the console the sum of squares of even numbers
 
let arr = [1,2,3,4,5,6,7,8,9,10]

let sumOfSquaresOfNums = arr.filter(el => el%2 === 0).map(el => el**2).reduce((a, b) => a + b, 0)

console.log(sumOfSquaresOfNums)

// expected output:
// 220
