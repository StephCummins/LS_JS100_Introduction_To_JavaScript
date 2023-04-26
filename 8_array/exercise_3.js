/* Let's make the problem a little harder. In this problem, we're again 
interested in even numbers, but this time the numbers are in nested arrays in a 
single outer array. */

let myArray = [
  [1, 3, 6, 11],
  [4, 2, 4],
  [9, 17, 16, 0],
];
               
myArray.forEach(function(nestedArray) {
  		nestedArray.forEach(function(number) {
    			if (number % 2 === 0) {
      				console.log(number);
    			}
  		});
});	

/* 6, 4, 2, 4, 16, 0 (this is the equivalent of doing a nested for loop; the 
first forEach function is for the nested Arrays, then the second forEach 
function is for each individual number */
