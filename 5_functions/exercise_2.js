/* In the exercises for the previous chapter, you wrote a dynamic greeter 
program named greeter.js. Add a function to this program that solicits the 
user's first and last names in separate invocations; the function should return 
the appropriate name as a string. Use the return values to greet the user with 
their full name. */

let rlSync = require("readline-sync");

function getUserName(prompt1, prompt2) {
  let firstName = rlSync.question(prompt1);
  let lastName = rlSync.question(prompt2);
  return firstName + " " + lastName;
}

console.log(`Hello there, ${getUserName("What is your first name? ", "What is your last name? ")}!`);

