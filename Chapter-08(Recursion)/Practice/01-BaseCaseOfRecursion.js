// Print n to 0 using recursion

function countDownToZero(n) {
  if (n < 0) {
    return;
  } else {
    console.log("n is : ", n);
    countDownToZero(n - 1);
  }
}

countDownToZero(10);

//print factorial of n

function getFactorialOfN(n) {
  if (n === 1) {
    return 1;
  }
  return n * getFactorialOfN(n - 1);
}

let factorialValue = getFactorialOfN(5);
console.log("Factorial of 5 is : ", factorialValue);

//Factorial of 5 is :  120

//Let's calculate Fibonacci Sequence

/**
 * Solution - 01 (With Iteration)
 */

function getNthFibonacciNumber(n) {
  //edge case
  if (n <= 1) {
    return n;
  }

  let nthFibonacciNumber = 0,
    last = 1,
    lastlast = 0;

  for (let i = 2; i < n; i++) {
    nthFibonacciNumber = last + lastlast;
    lastlast = last;
    last = nthFibonacciNumber;
  }

  return nthFibonacciNumber;
}

let position = 8;
let fibonacciNumber = getNthFibonacciNumber(position);
console.log(`${position}th fibonacci number is : ${fibonacciNumber}`);

/**
 * Solution - 02 (With Recursion)
 */

function getNthFibonacciNumberWithRecursion(n) {
  //Base case
  if (n <= 1) {
    return n;
  }

  return (
    getNthFibonacciNumberWithRecursion(n - 1) +
    getNthFibonacciNumberWithRecursion(n - 2)
  );
}

let position2 = 3;
let fibonacciNumberWithRecursion =
  getNthFibonacciNumberWithRecursion(position2);
console.log(
  `${position2}th fibonacci number is : ${fibonacciNumberWithRecursion}`
);
