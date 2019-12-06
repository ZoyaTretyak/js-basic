const user = {
  name: 'Test',
  surname: 'Testing',
  nickname: 'Piu piu'
};

function greetUser(user, getNameFunc) {
  return `I am happy to see you ${getNameFunc(user)}`;
}

/**
 * @param field - name of property in object
 */
const getGreetNameByField = (field) => (
  function (user) {
    return user[field];
  }
);

//wrap in console log to check
console.log(greetUser(user, getGreetNameByField('name'))); // I am happy to see you Test
console.log(greetUser(user, getGreetNameByField('surname'))); // I am happy to see you Testing
console.log(greetUser(user, getGreetNameByField('nickname'))); //'
