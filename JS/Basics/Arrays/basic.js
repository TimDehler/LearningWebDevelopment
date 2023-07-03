let array = [1, 2, 3];
console.log(array.toString()); // 1,2,3

array = ["Hello", "World"];
// Replaces the seperator (default ",")
console.log(array.join("-")); // Hello-World

array = ["a", "b", "c"];
// .pop() overwrites the original array and removes the last entity
console.log(array.pop()); // c (Removed)
console.log(array); // ["a", "b"]

array = ["a", "b", "c"];
// .push() adds an entity to the end of the array changing the original array
console.log(array.push("z")); // 4 (Length of the array after push)
console.log(array); // ["a", "b", "c", "z"]

array = ["a", "b", "c"];
// .shift() overwrites the original array removing the first entity
console.log(array.shift()); // a (Removed)
console.log(array); // ["b", "c"]

array = ["a", "b", "c"];
// .unshift() orverwrites the original array adding an entity at the front
console.log(array.unshift("z")); // 4 (Length)
console.log(array); // ["z", "a", "b", "c"]

let ary = [1, 2],
  ary2 = [3, 4],
  ary3 = ["a"];
let concatArry = ary.concat(ary2, ary3);
console.log(concatArry); // [1,2,3,4,"a"]

let nums = [5, 3, 6, 2],
  str = ["b", "a", "z"];
console.log(nums.sort()); // [2,3,5,6]
console.log(str.sort()); // ["a","b","z"]

array = ["a", "b", "c", "d"];
console.log(array.splice(1, 2, "X")); // ["b", "c"]
console.log(array); // ["a", "X", "d"]

let numbers = [11, 22, 33, 44, 55];
// .slice() does not affect the original array it just returns another arr
let slicedArr = numbers.slice(2, 4);
console.log(slicedArr); // [33, 44] | New Array

numbers = [1, 2, 3, 4, 5];
console.log(numbers.reverse()); // [5, 4, 3, 2, 1]

let arr = [1, 2, 3, 4, 5, 6];
str = "this is a string";
console.log(Array.isArray(arr)); // true
console.log(Array.isArray(str)); // false
