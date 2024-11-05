console.log(0.1 + 0.2 === 0.3);
console.log(1 / 10);

console.log(Math.floor(0.9));
console.log(Math.round(4.3));
console.log(Math.round(4.7));
console.log(Math.ceil(0.9));

// Number.EPSILON ===> returns the smallest interval between two representable number. This is useful for the problem with floating-point approzimation. It is the smallest difference between two representable numbers.

console.log(Math.abs(0.1 - 0.01)); //0.09000000000000001
console.log(Number.EPSILON); // 2.220446049250313e-16 (2.220446049250313 * 10 res to the power of -16)
console.log(2.220446049250313 / 100000000000000000); // 0.0000000000000002220446049250313

function isEqual(x, y) {
  console.log("x", x);
  console.log("y", y);
  return Math.abs(x - y) < Number.EPSILON;
}
console.log(isEqual(0.1 + 0.2, 0.3)); //true

console.log(0.1 + 0.2); //0.30000000000000004

//Difference between operand one and the EPSILON vlaue

console.log("difference", 0.30000000000000004 - 0.3); // 5.551115123125783e-17 ===> 0.0000000000000005551115123125783
console.log("difference", Math.abs(0.30000000000000004 - 0.3)); // 5.551115123125783e-17 ===> 0.00000000000000005551115123125783
console.log(
  0.00000000000000005551115123125783 < 0.0000000000000002220446049250313
); // true

console.log(
  0.00000000000000005551115123125783 - 0.0000000000000002220446049250313
);
// -1.6653345369377348e-16 ===> -0.00000000000000016653345369377348

// Math.abs() returns the absolute value of a number regardless of (-ve or +ve) value.
console.log("absolute value", Math.abs(10 - 10.1)); // absolute value 0.09999999999999964
console.log("absolute value", Math.abs(10.1 - 10)); // absolute value 0.09999999999999964
console.log("absolute value of Number.EPSILON", Math.abs(Number.EPSILON)); // absolute value of Number.EPSILON 2.220446049250313e-16

console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991
console.log(Number.MAX_SAFE_INTEGER + 100 === Number.MAX_SAFE_INTEGER + 102);
console.log(
  Number.MAX_SAFE_INTEGER + 1.0001 === Number.MAX_SAFE_INTEGER + 10.02
);

/**
 * In order to addtion in MAX_SAFE_INTEGER if we add number where difference is higher it dosen't give us true. But this will not same in floating max value.
 */

console.log(Number.MAX_VALUE); // 1.7976931348623157e+308
console.log(
  Number.MAX_VALUE + 12501.023921 === Number.MAX_VALUE + 20.392934943
); // true

console.log(Number.MIN_SAFE_INTEGER); // -9007199254740991
console.log(Number.MIN_SAFE_INTEGER - 1 === Number.MIN_SAFE_INTEGER - 2); // true
console.log(Number.MIN_SAFE_INTEGER - 1 === Number.MIN_SAFE_INTEGER - 20); // false

// Number.MIN_VALUE is also the closest floating-point to zero and it is bigger than Number.MIN_SAFE_INTEGER
console.log(Number.MIN_VALUE - 1 === -1); // true (this is because writing 5e-324 is equivalent to 0). so, 0-1 === -1
console.log(Number.MIN_VALUE); // 5e-324
console.log(Number.MIN_VALUE - 1.222122 === Number.MIN_VALUE - 2.32323); // false
console.log(Number.MIN_VALUE - 1.222122 === Number.MIN_VALUE - 200.32323); // false

console.log(Infinity); // Infinity
console.log(Infinity > Number.MAX_VALUE); // true
console.log(-Infinity < Number.MIN_VALUE); // true
console.log(-Infinity - 1 === -Infinity - 10); // true (Because nothing can go smaller than -infinity)

function checkPrime(n) {
  if (n <= 1) return false;
  if (n <= 3) return true;

  if (n % 2 === 0 || n % 3 === 0) return false;

  for (let i = 5; i * i < n; i = i + 6) {
    if (n % i === 0 || n % (i + 2) === 0) return false;
  }

  return true;
}

console.log("is prime", checkPrime(23));
// Time complexity ===> O(sqrt(n))

function primeFactorization(n) {
  console.log("n", n);
  while (n % 2 === 0) {
    console.log("first", 2);
    n = n / 2;
  }

  // n must be odd at this point.
  for (let i = 3; i * i < n; i += 2) {
    while (n % i === 0) {
      console.log("second", i);
      n = n / i;
    }
  }

  //if n is a prime number
  if (n > 2) {
    console.log("if prime", n);
  }
}

primeFactorization(23211221);

// Time complexity ===> O(sqrt(n))

/**
 * Random number generator
 */

// Math.random() returns a float between 0 & 1

console.log(Math.random() + 1);
console.log(Math.random() * 25); //floats between 0 and 25 (will not be 0 or 25; only between values)

console.log(Math.random() * 25 + 1); // float between 1 to 26 (always grater than 1 and less than 26)

//Get minimized value to nearest one
Math.ceil(Math.random() * 25 + 1); // between 2 to 26 (both are inclusive)
Math.floor(Math.random() * 25 + 1); // between 1 to 26 (both are inclusive)
Math.round(Math.random() * 25 + 1); // 1 to 26 (inclusive)
