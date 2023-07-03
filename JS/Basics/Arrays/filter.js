/**
 * filter() creates a new Array filled with elements that pass a test
 * provided by a function
 *
 * array.filter(function(currentValue, index, arr), thisValue)
 * index: Optional
 * arr: Optional
 * thisValue: Optional
 */

let numbers = [1, 2, 3, 4, 5, 6];
let evenNums = numbers.filter((num) => num % 2 === 0);
console.log(evenNums);

let obj = [
  { name: "tim", age: 21 },
  { name: "john", age: 55 },
  { name: "senna", age: 21 },
  { name: "person" },
  { age: 22 },
];

let is21 = obj
  .filter((person) => person.age === 21)
  .map((person) => person.name)
  .filter((name) => name === "tim");
console.log(is21);

let hasAge = obj.filter((person) => {
  return person.hasOwnProperty("age");
});
console.log(hasAge);
