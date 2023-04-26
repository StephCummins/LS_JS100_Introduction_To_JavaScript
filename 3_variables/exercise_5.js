// What does this program log to the console? Why?

let foo = 'bar';
{
  let foo = 'qux';
}

console.log(foo);

// The code logs “bar,” because foo was declared as a new variable altogether inside of the curly braces.
// The console.log function can only access the original foo, assigned a value of "bar"
// The variable foo assigned a value of "qux" is out of scope