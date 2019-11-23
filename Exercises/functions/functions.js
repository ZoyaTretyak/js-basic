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
  return null;
}

console.log(takeMyParametersAmount.length)

// 2. Create a function and log all passed parameters to it. Check the `length` of this function.

function myNewFunc(...args) {
  return console.log(args, args.length);
}
myNewFunc(4, 8, 'ewr', '76', 55);

// 3. Using anonymous function encapsulate function body from global scope.
(function () {
  return console.log('Hey');
})();
