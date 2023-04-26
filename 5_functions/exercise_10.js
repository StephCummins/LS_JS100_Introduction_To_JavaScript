// Using the code from Exercise 9, classify each variable name as either global or local. 

function multiply(left, right) {
  let product = left * right;
  return product;
}

function getNumber(prompt) {
  return parseFloat(question(prompt));
}

let left = getNumber('Enter the first number: ');
let right = getNumber('Enter the second number: ');
console.log(`${left} * ${right} = ${multiply(left, right)}`);

// multiply: global
// left and right and parameters of function multiply(): local
// product: local
// getNumber: global
// prompt: local
// parseFloat and question: global (these reference built-in JavaScript functions that are available pretty much anywhere)
// let left and let right: global 
// console: global
