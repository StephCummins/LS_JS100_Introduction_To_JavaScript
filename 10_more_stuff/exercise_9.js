/* Without using Object.is, write a function that will return true if the 
argument is -0, and false if it is 0 or any other number. */

function negativeZero(number) {
  if (2 / number < 0) {
    return true;
  } else {
    return false;
  }
}

console.log(negativeZero(-0));