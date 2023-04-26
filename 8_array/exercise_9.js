/* Without using a for, while, or do/while loop, write some code that checks 
whether the number 3 appears inside these arrays: */

let numbers1 = [1, 3, 5, 7, 9, 11];
let numbers2 = [];
let numbers3 = [2, 4, 6, 8];

// Solution 1:
console.log(numbers1.includes(3));
console.log(numbers2.includes(3));
console.log(numbers3.includes(3));

// Second solution using .some() method:
const three = (element) => element === 3;

console.log(numbers1.some(three));
console.log(numbers2.some(three));
console.log(numbers3.some(three));
