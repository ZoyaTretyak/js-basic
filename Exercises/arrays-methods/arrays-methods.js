// # Arrays methods

// 1. Create a function - predicate which will return `true` if passed element present in array and `false` - if not.
const checkElement = (arr,element) => {
  arr.includes(element);
  return true;
};
console.log(checkElement([3, 4, 5], 1));

// 2. Create a function which will check that all array elements are even.
const even = (arr) => arr.every(element => element % 2);
console.log(even([1,3,5,7,9]));

// 3. Create a function which will check that passed parameter is `array`;

const checkIsArray = (element) => Array.isArray(element);
console.log(checkIsArray([2,4,5]));

// 4. Create a function which will take `array`, `indexToInsert`, `element` and will insert passed element to provided index in array.
const insertElement = (arr, indexToInsert, element) => {
  arr.splice(indexToInsert, 0, element);
  return arr;
};
console.log(insertElement([1,3,5,7,9], 0, 4));
