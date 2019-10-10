// 1. Declare a variable which will be encapsulated from global scope.
{
  let newVariable = 'piupiu';
  console.log(newVariable);
}
console.log(newVariable);

// 2. Declare a variable which will appear in global object.
globalMessage = 'Hello';

console.log(global.globalMessage);

// 3. Declare two variables which will be same-names but contain different values
const variable = 123;
{
  const variable = 555;
  console.log(variable);
}
console.log(variable);


// Hoisting. Declare a variable with hosting.

hoistedVar = 'test';

console.log(hoistedVar);

var hoistedVar;
