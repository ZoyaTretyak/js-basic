// 1. Make a function which will throw error with chance 50%.

function rand() {
  const random = Math.floor(Math.random() * 2);
  if (random === 0) {
    throw new Error('redndom is 0');
  }
  return random;
}

console.log(rand());


// 2. Make function which will execute function above, handle error and increase counter of function execution. Counter
//    should save the value on each new function execution.
