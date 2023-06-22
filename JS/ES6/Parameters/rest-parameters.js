const fun = (...numbers) => {
  let sum = 0;
  numbers.forEach((element) => {
    sum += element;
  });
  return sum;
};

console.log(fun(1, 2, 3, 4, 5, 6, 7, 8, 9)); // Output 45

const greetSum = (name, ...numbers) => {
  const sum = numbers.reduce((sum, current) => (sum = sum + current));
  console.log(`Hi ${name} your sum is ${sum}`);
};

greetSum("tim", 1, 2, 3); // Output "Hi tim your sum is 6"
