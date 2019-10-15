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