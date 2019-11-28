
// 1. Make a method in object which will use value from context.

const picture = {
  color: 'blue',
  instrument: 'brush',
  drawTheSky() {
    return this.color;
  }
};
console.log(picture.drawTheSky());

// 2. Call this method on object. Save this method to new variable. Execute variable, context is loosed. Find a way to return object context to function.
const drawTheOcean = picture.drawTheSky;

console.log(drawTheOcean());
console.log(drawTheOcean.call(picture));

// 3. Call function from previous task in other context.

const newPicture = {
  color: 'green',
  instrument: 'brush'
};
console.log(drawTheOcean.call(newPicture));

// 4. Write method in object which will use external context (add in external context some new property to use).
const object = {
  name: 'Zoya',
  lastName: () => {
    this.lastName = 'Testovna';
    return `Welcome ${this.name} ${this.lastName}`;
  }
};
console.log(object.lastName());

// 5. Write a method in object which will return new object which will have method where it using context of parent object.

const obj = {
  a: 'red',
  b() {
    const newObj = {
      b1: () => {
        return `color is ${this.a}`;
      }
    };
    return newObj;
  }
};

console.log(obj.b().b1());
