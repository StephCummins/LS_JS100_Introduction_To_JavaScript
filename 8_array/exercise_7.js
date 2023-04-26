// Use reduce to compute the sum of the squares of all of the numbers in an array:

let array = [3, 5, 7]

function sumOfSquares(array) {
  return array.reduce((accumulator, currentValue) => {
    return accumulator + (currentValue * currentValue);}, 0);
}

console.log(sumOfSquares(array));

let squared = array.reduce((accumulator, currentValue) => accumulator + (currentValue * currentValue), 0);

console.log(squared);