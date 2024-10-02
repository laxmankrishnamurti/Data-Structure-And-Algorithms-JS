// Function array methods like map(), filter() & reduce() they do not change the original array.

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//map() Method

const getMultiplyBy5Value = numbers.map((number) => {
  return number * 5;
});

console.log("Array with multiply by 5 : ", getMultiplyBy5Value);

//filter() method

const getEvenNumbers = numbers.filter((number) => number % 2 === 0);
console.log("Array of even numbers :: ", getEvenNumbers);

//reduce() method

//prev will become undefined if we do not return anything.

numbers.reduce((prev, next, index, arr) => {
  // console.log("prev :: ", prev);
  // console.log("next:: ", next);
  // console.log("index :: ", index);
  // console.log("arr :: ", arr);
  return next;
});

const getSum = numbers.reduce((prev, next) => {
  return prev + next;
}, 0);

console.log("sum of the array is : ", getSum);
