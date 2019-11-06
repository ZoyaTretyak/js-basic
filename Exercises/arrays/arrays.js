// 1. Make a function which will generate array with random length and random values.
function arrayGenerator(max) {
  const arraylength = Math.floor(Math.random() * Math.floor(max));
  const arrayNew = Array.from({ length:arraylength }, () => Math.floor(Math.random() * max));
  console.log(arraylength, arrayNew);
}
arrayGenerator(20);

// 2. Make a function which will take array and return copy of it.

function arrayDuplication(originArray) {
  const copyArray = originArray.slice();
  console.log(copyArray);
}
arrayDuplication([1, '45', 6]);

// 3. Make a function which will take array and element and return a index of element in array.

function indexEl(array, element) {
  const indexElement = array.indexOf(element);
  console.log(indexElement);
}
indexEl([1, '45', 'zoya'], 'zoya');

// 4. Make function which will take two arrays and return association of them.
function arrayMerge(array1, array2) {
  const newArray = array1.concat(array2);
  console.log(newArray);
}
arrayMerge([1, '45', 'zoya'], ['test', 'go', 126, 0]);

// 5. Make function that will change element in array by index using reference, and other one - pure function.
const array1 = ['first', 'second', 'third'];
function newArray(array1, index, value) {
  /*eslint-disable */
  array1[index] = value;
  console.log(array1);
}
newArray(array1, 0, '100');

const array2 = ['first', 'second', 'third'];

function newArrayPure(array2, index, value) {
  const copyArray2 = array2;
  copyArray2[index] = value;
  console.log(copyArray2);
}
newArrayPure(array2, 1, 100);
