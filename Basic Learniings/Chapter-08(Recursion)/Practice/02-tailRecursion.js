// Iterative solution to get nth fibonacci number

function getNthFibonacciNumber(n) {
  let fibNumber = 0,
    last = 1,
    lastlast = 0;

  for (let i = 2; i < n; i++) {
    fibNumber = lastlast + last;
    lastlast = last;
    last = fibNumber;
  }

  return fibNumber;
}

console.log("51 fibonacci number is : ", getNthFibonacciNumber(51));

function getNthFibonacciNumberTailRecursion(n, lastlast, last) {
  if (n == 2) {
    return last;
  }

  return getNthFibonacciNumberTailRecursion(n - 1, last, lastlast + last);
}

console.log(getNthFibonacciNumberTailRecursion(51, 0, 1));

// Tail Recursive function :: As recursive function get closer to the base case the value will be also get evaluate and once the base case is reached the final result will be returned.

//Time Complexity -> O(n)
//Space Complexity -> O(n)
