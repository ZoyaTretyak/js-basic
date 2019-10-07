// 1. Declare a variable which will be encapsulated from global scope.
if (true) {
    var newVariable = 'piupiu';
}
console.log(newVariable)

// 2. Declare a variable which will appear in global object.
let globalMessage = "Hello";
global.console.log(globalMessage);
//OR
console.log(global.globalMessage);

// 3. Declare two variables which will be same-names but contain different values
let variable = 123;
console.log(variable);
variable = 555;
console.log(variable);

// Hoisting. Declare a variable with hosting.