// Exercises from https://www.w3resource.com/javascript-exercises/javascript-basic-exercise-3.php

// Write a JS programm to print the current window contents
const windowPrint = () => {
  window.print();
};

// Write a JS programm to get the current date
const date = new Date();
let dd = date.getDate();
let mm = date.getMonth() + 1;
const yy = date.getFullYear();

if (dd < 10) {
  dd = "0" + dd;
}
if (mm < 10) {
  mm = "0" + mm;
}
console.log(`${dd}-${mm}-${yy}`);
