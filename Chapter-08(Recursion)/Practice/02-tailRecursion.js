// Iterative solution to get nth fibonacci number

function getNthFibonacciNumber(n) {
  let fibNumber = 0,
    last = 1,
    lastlast = 0;

  for (let i = 2; i <= n; i++) {
    fibNumber = lastlast + last;
    lastlast = last;
    last = fibNumber;
  }

  return fibNumber;
}

console.log("2nd fibonacci number is : ", getNthFibonacciNumber(2));
