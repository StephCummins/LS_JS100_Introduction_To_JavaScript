/* Write a function that searches an array of strings for every element that 
matches the regular expression given by its argument. The function should return 
all matching elements in an array. */

let words = [
  'laboratory',
  'experiment',
  'flab',
  'Pans Labyrinth',
  'elaborate',
  'polar bear',
];

function allMatches(words, redux) {
  let matches = [];
  for (let value of words) {
    if (redux.test(value) === true) {
      matches.push(value);
    }
  }
  return matches;
}

console.log(allMatches(words, /lab/));