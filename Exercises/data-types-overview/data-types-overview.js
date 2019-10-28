//1. Declare a variable on each type using two options: plain creation, creation with constructor.
const numberVariable = 123;
console.log(numberVariable);

/*eslint-disable no-new-wrappers*/
const numberConstructor = new Number(123);
console.log(numberConstructor);

const stringVariable = 'String variable';
console.log(stringVariable);

const stringConstructor = new String('value');
console.log(stringConstructor);

const booleanVariable = 7 > 0;
console.log(booleanVariable);

const booleanConstructor = new Boolean(' 7 > 0');
console.log(booleanConstructor);

const nullVariable = null;
console.log(nullVariable);

const objectVariable = {};
console.log(objectVariable);

// const objectConstructor = new Object();
// objectConstructor.a = 'test';
// objectConstructor.b = 123;
// console.log(objectConstructor);

const arrayValue = [];
console.log(arrayValue);

let undefinedValue;
console.log(undefinedValue);

const symbolValue = Symbol('4');
console.log(symbolValue);

// 2. Use operator typeof on each of them.
console.log(typeof numberVariable);
console.log(typeof stringVariable);
console.log(typeof booleanVariable);
console.log(typeof nullVariable);
console.log(typeof objectVariable);
console.log(typeof undefinedValue);
console.log(typeof symbolValue);

//3. Demonstrate object's references.

const garden = { tree1: 'chestnut', tree2: 'pine-tree' };
console.log(garden);

const gardenCopy = garden;

gardenCopy.tree2 = 'apple-tree';

console.log(garden === gardenCopy);

console.log(garden);
console.log(gardenCopy);

// 4. Demonstrate string's backticks features.

const myName = 'Zoya';
console.log(`Hey! My name is ${myName}`);

//# Additional
//1. Declare an array containing different data types.
const piu = [213, 'test', 333, 675, {}, true];

console.log(piu);
//2. Iterate through it and collect amount of each data type to object
const objOutput = piu.reduce((acc, value) => {
  const type = typeof value;
  acc[type] = (acc[type] || 0) + 1;

  return acc;
}, {});
console.log(objOutput);
