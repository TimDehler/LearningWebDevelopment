/**
 * JS this Keyword
 * The "this keyword in JavaScript is used to refer the object it belongs to"
 *
 *  - in method, "this" refers to owner object
 *  - Alone & in function "this" refers to the global object
 *  - in function, in strict mode, "this" is undefined
 *  - In an event, "this" refers to the element that recieved the event
 */

const person = {
  name: "Coder",
  year: 2023,
  greet: function () {
    console.log(`Hello, ${this.name}`);
  },
};

person.greet(); // Output: Hello, Coder

const sayHello = () => {
  console.log(`Hello, ${this}`);
};
sayHello(); // Output: Hello, [object Window]

("use strict");
const myFunc = () => {
  console.log(`Hello, ${this}`);
};
myFunc(); // Output undefined

// <button onclick="sendMessage()">Click me!</button>
const sendMessage = () => {
  console.log(`Button clicked by ${this.innerText}`);
};
// Output: Button clicked by Click me!
