// 1. Create a function declaration, function expression, lambda function, and using function object.
// function declaration
function functionDeclaration() {}
// function expression
const funcExpression = function () {};
// lambda function
const funcArrow = (param) => {
  return 1;
};
const funcArrow1 = (param) => 1;
// function object
/*eslint-disable */
const funcObject = new Function('a', 'b', 'return a * b');
console.log(funcObject(4,6));

// 2. Get parameters amount of function `takeMyParametersAmount`.

function takeMyParametersAmount(a, b, c) {
  return a + b + c;
}

// 2. Create a function and log all passed parameters to it. Check the `length` of this function.

function myNewFunc(a, b, c, d, r) {}
console.log(myNewFunc.length);

// 3. Using anonymous function encapsulate function body from global scope.
const myVar = 'piu';
const anonymousFunc = function () {
  console.log(myVar);
};
anonymousFunc();
