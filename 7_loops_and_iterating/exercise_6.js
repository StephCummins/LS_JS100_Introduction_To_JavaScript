/* Reimplement the factorial function from exercise 2 using recursion. Once 
again, you may assume that the argument is always a positive integer. */

let rlSync = require("readline-sync");
let number = Number(rlSync.question("Provide a positive integer: "));

function factorial (number) {
  if (number === 1) return number;
  return number * (factorial(number - 1));
}

console.log(factorial(number));