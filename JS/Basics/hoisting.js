
console.log(x); // undefined
var x = 10;

console.log(y); // can not use y before initialization
console.log(z); // can not use z before initialization


let y = 30;
const z = 50;

myFunc(); // Calling a function before it is declared

const myFunc = () => {
  console.log("Called!");
};


