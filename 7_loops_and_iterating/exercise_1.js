/* Modify the age.js program you wrote in the exercises for the Input/Output 
chapter. The updated code should use a for loop to display the future ages. */

let rlSync = require("readline-sync");
let age = Number(rlSync.question("How old are you? "));

console.log(`You are ${age} years old.`);

for (let newAge = 10; newAge <= 40; newAge += 10) {
  console.log(`In ${newAge} years, you will be ${age + newAge} years old.`);
}