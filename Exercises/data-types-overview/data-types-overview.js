//1. Declare a variable on each type using two options: plain creation, creation with constructor.
let numberVariable = 123;
console.log(numberVariable);

let numberConstructor = Number(123);
console.log(numberConstructor);

let stringVariable = 'String variable';
console.log(stringVariable);

let stringConstructor= String('value');
console.log(stringConstructor);

let booleanVariable = 7 > 0;
console.log(booleanVariable);

let booleanConstructor = Boolean(' 7 > 0');
console.log(booleanConstructor);

let nullVariable = null; 
console.log(nullVariable);

let objectVariable = {}; 
console.log(objectVariable);

let objectConstructor = Object({}); 
console.log(objectConstructor);

let arrayValue = []; 
console.log(arrayValue);

let undefinedValue; 
console.log(undefinedValue);

let symbolValue = Symbol('4'); 
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

let garden = {tree1: 'chestnut', tree2: 'pine-tree'};
console.log(garden);

let gardenCopy = garden;
 
gardenCopy.tree2 = 'apple-tree';

console.log(garden === gardenCopy);
 
console.log(garden);
console.log(gardenCopy);

// 4. Demonstrate string's backticks features.

let myName = 'Zoya';
console.log(`Hey! My name is ${myName}`);