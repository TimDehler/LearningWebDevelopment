// Modules rely on type="module" in <script> tag
// Modules only work with the HTTP(S) protocol

/**
 * When you import a module into a main JS File, the module's code is executed first
 * before the code in the main file. This is because the module needs to be evaluated
 * and its exports made available before the main file can use them
 */

/**
 * Open import.js and review the according import statements to the different export
 * posibilities
 */

// inline individuall export of a variable
export const name = "coder";

// multiple named exports
const year = 2023;
const state = "hessen";
export { year, state };

// default export (only one per file)
const greet = () => {
  console.log("Hello Coder!");
};

export default greet;
