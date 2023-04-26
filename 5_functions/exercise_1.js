// What does this code log to the console? Does executing the foo function affect the output? Why or why not?

let bar = 1;
function foo() {
  let bar = 2;
}

foo();
console.log(bar);

/* This function will log 1 to the console. Executing the foo() function does 
not affect the output, because a new variable is declared within the foo() function; 
the scope of this variable does not impact the bar variable valued at 1 */