// 1. Get `100` using `+` operator and numeric value `10`.

const piu = 10 + '0';
console.log(piu);

// 2. You have following string: `Amazon annual revenue of US$232.887 billion` extract revenue and count monthly income.

const string = `Amazon annual revenue of US$232.887 billion`;
const monthlyIncome = Math.round(string.slice(28, 35) % 12);

console.log(monthlyIncome);

// 3. Declare variable which will contain logs counter. Log few times with updating this value accordingly.

let logsCounter = 0;

console.log(`logs counter update before ${++logsCounter}`);
console.log(`logs counter update after ${logsCounter++}`);
console.log(logsCounter);





