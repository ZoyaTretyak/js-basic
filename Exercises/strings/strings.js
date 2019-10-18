// 1. Assign string with unicode to a variable.

const smile = '\u{263A}';
console.log(smile);

//2. Declare a variable with string with escaped symbols.

const hello = 'Hello. I\'m Zoya';
console.log(hello);

// 3. Declare a variable which will contain name of your favourite animal.

const myFavoriteAnimal = 'cat';
const variable = `My favorite animal is a ${myFavoriteAnimal}`;

// 4. Log a message `My favourite animal is ` with dynamic variable from previous task.

console.log(variable);

// 5. Declare a variable which contain name and surname of your favourite writer in lowercase. Log his/her name with capitals first letters.

const firstName = 'neil';
const lastName = 'gaiman';

const firstLetter1 = firstName[0].toUpperCase();
const firstLetter2 = lastName[0].toUpperCase();

console.log(firstLetter1 + firstName.slice(1) +' '+ firstLetter2 + lastName.slice(1));

// # Additional

// 1. Declare a function which will receive password string. Check is password strong enough:
//   - should contain at least one capital letter;
//   - length no less than 8 characters.
//   - should contain at leas one special character.

function passvordValidation(pwd){
  
  const regexp = /^[a-zA-Z0-9]*$/;
  if (pwd.toLowerCase() === pwd) {
    console.log('Pasword should include at least 1 UpperCase letter');
    return false;
  }
      
  if (pwd.toUpperCase() === pwd) {
    console.log('Pasword should include at least 1 LowCase letter');
    return false;
  }
      
  if (regexp.test(pwd)) {
    console.log('Pasword should be include at least 1 special character');
    return false;
  }
      
  if (pwd.length < 8) {
    console.log('Pasword should be 8 or more characters');
    return false;
  }
      
  return true;
}
  
console.log(passvordValidation('Pa$$Word'));


// 2. Make function which will generate password suggestion based on passed password, and required strongest.