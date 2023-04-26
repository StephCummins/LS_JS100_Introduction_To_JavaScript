/* Write a function named isNotANumber that returns true if the value passed to 
it as an argument is NaN, false if it is not. */

function isNotANumber(number) {
  if (number !== number) {
    return true;
  }
  return false;
}

console.log(isNotANumber(0/0));