// What does the following function do?

function doSomething(string) {
  return string.split(' ').reverse().map((value) => value.length);
}

/* The function takes a string as an argument, then puts the string into an 
array of words, then reverses the order of the elements of the array, then 
creates a new array with the length of each element. */