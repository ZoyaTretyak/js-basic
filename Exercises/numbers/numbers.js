//1. Assign by hand same value to 3 variables in binary, octal and hexadecimal format.
const binaryNumber = 0b110111;
const octalNumber = 0o67;
const hexadecimalNumber = 0x37;

console.log(binaryNumber, octalNumber, hexadecimalNumber);

// 2. Implement function `extractNumbers` which will leave only numbers in passed string.
function extractNumbers (text) {
  let number = parseInt(text);
  if (isNaN(number) == true) {
    return console.log('Text should starts with numbers');
  } else {
    return console.log(number);
  }
}
// 3. Declare a variable with decimal value and convert to binary, octal and hexadecimal.
let decimalNumber = 55;

const hex = decimalNumber.toString(16);
const bin = decimalNumber.toString(2);
const oct = decimalNumber.toString(8);

console.log(hex, bin, oct);

// 4. use `Math.random` to generate random value from `0` to `100`.
function randomGenerator(min, max) {
  return Math.round(min + Math.random() * (max - min));
}

console.log(randomGenerator(0, 100));
