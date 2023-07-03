/**
 * Returns a single value: the function's accumulated result.
 * Does not execute the function for empty array elements
 *
 * array.reduce(callback[, initialValue])
 * array.reduce(function(total, currentValue, currentIndex, arr), initialValue)
 *
 */

let nums = [1, 2, 3, 4, 5, 5];
let sum = nums.reduce((result, item) => result + item);
console.log(sum); // 20

let string = ["Hello", " ", "World!"];
let concat = string.reduce((result, item) => result + item);
console.log(concat); //Hello World!

function maxNum(numbers) {
  return numbers.reduce((max, current) => {
    if (current > max) {
      return current;
    }
    return max;
  }, numbers[0]);
}

let numb = [4, 2, 9, 7, 5];
let max = maxNum(numb);
console.log(max); // 9
