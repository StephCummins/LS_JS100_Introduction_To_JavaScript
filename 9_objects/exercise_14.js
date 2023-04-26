/* Identify all of the variables, object property names, primitive values,
and objects shown in the following code (assume the code has not been executed). */

function hello(greeting, name) {
  return greeting + ' ' + name;
}

function xyzzy() {
  return { a: 1, b: 2, c: [3, 4, 5], d: {} };
}

const howdy = hello('Hi', 'Grace');
let foo = xyzzy();

// Variables: hello, greeting, name, xyzzy, howdy, foo
// Object Property Names: a, b, c, d and 0, 1, 2 are property names for the [3, 4, 5] array
//Primitive Values: '', 1, 2, 3, 4, 5, "Hi", "Grace", 'a', 'b', 'c', 'd', and 0, 1, 3 for the array indexes [3, 4, 5]
// Objects: {a: 1, b:2, c: [3, 4, 5], d: {} }, c: [3, 4, 5], d: {}, function hello(), function xyzzy()

