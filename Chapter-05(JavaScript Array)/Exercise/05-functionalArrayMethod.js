// Function array methods like map(), filter() & reduce() they do not change the original array.

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const getMultiplyBy5Value = numbers.map((number) => {
  return number * 5;
});

console.log("Array with multiply by 5 : ", getMultiplyBy5Value);
