/**
 * There are three types of scope in JS
 * - Global Scope
 * Local / Function scope
 * Block scope
 */

// Global scope variable accessible from anywhere inside the script
let a = 5;

const myFunc = () => {
  console.log(a); // Output: 5
};

{
  let a = 100; // Blockscoped variable only available within the block
  console.log(a); // Output: 100 => inside Blockscope
}
console.log(a); // Output: 5

/**
 * -----------------------------------------------------------------------------------------------------------
 */

let b = 100; // Global scope

const anotherFunc = () => {
  let b = 20; // Function scope

  const childFunc = () => {
    let c = 5; // Local Scope

    console.log(b); // Output: 20
    console.log(c); // Output: 5
  };
  childFunc();

  console.log(b); // Output: 20
  console.log(c); // Error: c is not defined
  // Because b is local scope to ChildFunc()
};

anotherFunc()();
