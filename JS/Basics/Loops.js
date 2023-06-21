for (let i = 0; i < 5; i++) {
  console.log("HelloWorld");
}
// Prints "Hello World" 5 times

const obj = {
  name: "Coder",
  place: "germany",
  year: 2023,
};

for (let key in obj) {
  console.log(`${key} : ${obj[key]}`);
}
// Output: name : Coder place : germany year : 2023

const fruits = ["apple", "banana", "strawberry", "cherry"];

for (let fruit of fruits) {
  console.log(fruit);
}
//Output: apple, banana, strawberry, cherry

let countdown = 10;

while (countdown > 0) {
  console.log(countdown);
  countdown--;
}
// Output: 10,9,8,7,6,5,4,3,2,1

let count = 0;
do {
  console.log(count);
  count++;
} while (count <= 5);
// Output: 0,1,2,3,4,5
