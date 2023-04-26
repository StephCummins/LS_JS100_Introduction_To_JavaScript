/* Identify all of the variables, object property names, primitive values, and objects in the following code. */

function bar(arg1, arg2) {
  let foo = 'Hello';
  const qux = {
    abc: [1, 2, 3, [4, 5, 6]],
    def: null,
    ghi: NaN,
    jkl: foo,
    mno: arg1,
    pqr: arg2,
  };

  return qux;
}

let result = bar('Victor', 'Antonina');

/* Variables: bar, arg1, arg2, foo, qux, result

// Object Property Names: abc, def, ghi, jkl, mno, pqr
// 0, 1, 2, 3 (for the array indexes abc)

// Primitive Values: "Hello", "Victor", "Antonina"
// 1, 2, 3, 4, 5, 6
// 0, 1, 2, 3 (indexes for array abc)
// "abc", "def", "ghi", "jkl", "mno", "pqr"
// null, NaN

// Objects: bar()
// {
    abc: [1, 2, 3, [4, 5, 6]],
    def: null,
    ghi: NaN,
    jkl: foo,
    mno: arg1,
    pqr: arg2,
  }
// [1, 2, 3, [4, 5, 6]]
// [4, 5, 6]
*/