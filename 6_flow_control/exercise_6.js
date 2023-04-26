// What does this code output to the console?

function isArrayEmpty(arr) {
  if (arr) {
    console.log('Not Empty');
  } else {
    console.log('Empty');
  }
}

isArrayEmpty([]);

/* The output is "Not Empty." The array has no elements and is technically
"empty," but it isn't falsy so the first if statement runs. */