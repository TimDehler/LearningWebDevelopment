/**
 * Creates a new array from calling a function for every array element, does
 * not execute the function for empty elements
 * array.map(function(currentValue, index, arr), thisValue)
 * index: Optional
 * arr: Optional
 * thisValue: Optional
 */

let number = [1, 2, 3];
let newNumbers = number.map((num) => num + 1);
console.log(newNumbers); //[2, 3, 4]

let fruits = ["apple", "banana", "cherry"];
let capitalFruits = fruits.map((fruit) => fruit.toUpperCase());
console.log(capitalFruits); // ['APPLE', 'BANANA', 'CHERRY']

let nums = [2, 3, 4];
let sqrtArr = nums.map((num) => num * num);
console.log(sqrtArr); //[4, 9, 16]

let obj = [
  { name: "tim", age: 21 },
  { name: "john", age: 55 },
  { name: "senna", age: 23 },
  { name: "steven", age: 89 },
];

let mapObj = obj.map((person) => {
  return person.name;
});
console.log(mapObj); // ['tim', 'john', 'senna', 'steven']
