// Explain why this code logs '510' instead of 15.

console.log('5' + 10);

/* Uses implicit type coercion, and changes the 10 from a number to a string, 
resulting in a string of “510”. Every + expression with a string operand 
produces a string result, no matter what the other operand is. */
