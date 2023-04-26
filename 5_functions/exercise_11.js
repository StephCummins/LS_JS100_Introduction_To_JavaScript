/* Using the code from Exercise 9, are the left and right variables on lines 1 
and 2 the same as the left and right variables on lines 10-12? Explain 
your reasoning. */

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

/* No, they're different. The left and right variables declared in “let left” 
and “let right” are global variables, but the left and right variables declared 
as function parameters (function multiply(left, right)) are local variables that 
only have block scope within that function. */