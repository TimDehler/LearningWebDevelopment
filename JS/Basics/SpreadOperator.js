// Spread Operator for Array
const array1 = [1, 2, 3, 4];
const array2 = [...array1]; // Copying array1 into array 2

const array3 = [...array1, ...array2];

console.log(array1); // Output : [1,2,3,4]
console.log(array2); // Output : [1,2,3,4]
console.log(array3); // Output : [1,2,3,4,1,2,3,4]

// Spread Operator for Object
const obj1 = { a: 1 };
const obj2 = { ...obj1 }; // Copying object1 into obj2
const obj3 = { b: 1 };

const merged = { ...obj1, ...obj3 };

console.log(obj1); // Output: {a:1}
console.log(obj2); // Output: {a:1}
console.log(merged); // Output: {a:1, b:1}

// Spread operator for function calls
const myFunction = (a, b, c) => {
  return a + b + c;
};

const numbers = [1, 2, 3];
const sum = myFunction(...numbers);
console.log(sum); // Output: 6
