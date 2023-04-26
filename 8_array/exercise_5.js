/* Write a findIntegers function that takes an array argument and returns an 
array that contains only the integers from the input array. Use the filter 
method in your function. */

let array = ["corgi", 11, 24, "evie", "obi", 13, 88, 102];

function findIntegers(array) {
  return array.filter(item => Number.isInteger(item) === true);
}

let integers = findIntegers(array);

console.log(integers);

