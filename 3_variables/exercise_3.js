// What happens when you run the following program? Why do we get that result?

{
  let foo = 'bar';
}

console.log(foo);

// reference error, because foo was declared inside a block, and console.log is outside of the block scope