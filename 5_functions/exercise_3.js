/* Write a program that uses a multiply function to multiply two numbers and 
returns the result. Ask the user to enter the two numbers, then output the 
numbers and result as a simple equation. */

let rlSync = require("readline-sync");

function multiply(num1, num2) {
  return num1 * num2;
}

let firstNumber = rlSync.question("Enter the first number: ");
let secondNumber = rlSync.question("Enter the second number: ");

console.log(`${firstNumber} times ${secondNumber} equals ${multiply(firstNumber, secondNumber)}`);