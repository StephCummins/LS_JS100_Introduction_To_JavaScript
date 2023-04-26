// What does this code log to the console? Why?

let array1 = [1, 2, 3];
let array2 = array1;
array1[1] = 4;
console.log(array2);

/* [1, 4, 3] While array variables are independent, array elements are 
dependent. The variables array1 and array2 point to the same array [1, 2, 3], 
so any changes you make to the array’s individual elements affect both 
variables. */

