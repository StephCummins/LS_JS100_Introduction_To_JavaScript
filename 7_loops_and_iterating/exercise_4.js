// Does the following code produce an error? Why or why not? What output does 
// this code send to the console?

for (let i = 0; i < 5;) {
  console.log(i += 1);
}

// The code doesn't produce an error because the body of the for loop increments by 
// 1 each time the loop runs. Because there is an increment, it's not an infinite loop.
// The code will output 1, 2, 3, 4, 5