// Destructuring for Arrays
const myArray = [1, 2, 3];

const [a, b, c] = myArray;

console.log(a); // Output: 1
console.log(b); // Output: 2
console.log(c); // Output: 3

// Destructuring for Objects
const myObj = { name: "Coder", age: 21 };
const { name, age } = myObj;

console.log(name); // Output: Coder
console.log(age); // Output: 21

// Destructuring objects with nested entities
const newObj = {
  nickname: "TheCoder",
  adress: {
    city: "fulda",
    state: "germany-hessen",
  },
};

const {
  nickname,
  adress: { city, state },
} = newObj;

console.log(nickname); // Output: TheCoder
console.log(city); // Output: fulda
console.log(state); // Output: germany-hessen

// Assigning default values
const array = [1, 2];
const [x, y, z = 3] = array;

const car = { topSpeed: 275 };
const { topSpeed, brand = "ford" } = car;

// Alternate names
const nObj = { test: "foo", test2: "baa" };
const { test: altname, test2 } = nObj;

console.log(altname); // Output: foo
