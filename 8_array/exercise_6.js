/* Use map and filter to first determine the lengths of all the elements in an 
array of string values, then discard the even values (keep the odd values). */

let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];

function oddLengths(strings) {
  		let stringLength = strings.map(word => word.length);
 		let oddLengths = stringLength.filter(number => number %2 !== 0);
  		return oddLengths;
}

console.log(oddLengths(arr)); // [1, 5, 3]
