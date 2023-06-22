console.log(x); // undefined
console.log(y); // can not use y before initialization
console.log(z); // can not use z before initialization

var x = 10;
let y = 30;
const z = 50;

myFunc();

const myFunc = () => {
  console.log("Called!");
};
