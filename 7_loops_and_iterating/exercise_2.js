/* Write a function that computes and returns the factorial of a number by 
using a for loop. The factorial of a positive integer n, signified by n!, is 
defined as the product of all integers between 1 and n, inclusive: */

let rlSync = require("readline-sync");
let number = Number(rlSync.question("Provide a positive integer: "));
let answer = 1;

function factorial(number) {
  for (let i = 1; i <= number; i += 1) {
    answer *= i;
  }
  return answer;
}

console.log(factorial(number));