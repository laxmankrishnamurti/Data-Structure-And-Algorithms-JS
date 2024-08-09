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
