const fun = (...numbers) => {
  let sum = 0;
  numbers.forEach((element) => {
    sum += element;
  });
  return sum;
};

console.log(fun(1, 2, 3, 4, 5, 6, 7, 8, 9)); // Output 45
