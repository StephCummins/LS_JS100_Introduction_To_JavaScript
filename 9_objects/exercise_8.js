/* Create a function that creates and returns a copy of an object. The function
should take two arguments: the object to copy and an array of the keys that you 
want to copy. Do not mutate the original object. */

let objToCopy = {
  foo: 1,
  bar: 2,
  qux: 3,
};

function copyObj(sourceObject, keys) {
  let destinationObject = {};
  if (keys) {
    keys.forEach(function(key) {
      destinationObject[key] = sourceObject[key];
    });
  } else {
    return Object.assign(destinationObject, sourceObject);
  }
  return destinationObject;
}

let newObj = copyObj(objToCopy);
console.log(newObj);

let newObj2 = copyObj(objToCopy, ['foo', 'qux']);
console.log(newObj2);

let newObj3 = copyObj(objToCopy, [ 'bar' ]);
console.log(newObj3);