// 1. Given three numbers x,y, and p, return the modular exponentiation.

/*
 * Modular exponentiation is a type of exponentiation performed over a modulusm which is useful in computer science and used iin the field of public-key encryption algorithms.
 */

function modularExponentiation(base, exponent, modulus) {
  return Math.pow(base, exponent) % modulus;
}

console.log(modularExponentiation(2, 400, 5));

// This method cannot handle the parameter and will give NaN value.
console.log(modularExponentiation(6e77, 27, 497)); // NaN

// Remark ===> Don't understand, marked for review.

//2. Print all prime less than N.

function checkPrime(n) {
  if (n <= 1) return false;

  if (n % 2 === 0 || n % 3 === 0) return false;

  for (let i = 5; i * i <= n; i += 6) {
    if (n % i === 0 || n % (i + 2) === 0) {
      return false;
    }
  }

  return true;
}

function printPrimeLessThanN(n) {
  let count = 0;
  for (let i = 0; i < n; i++) {
    let isPrime = checkPrime(i);
    if (isPrime) {
      count++;
      process.stdout.write(i + " ");
    }
  }
  console.log("\n");
  console.log(`Total prime numbers less than ${n} is ${count}`);
}

printPrimeLessThanN(100);

//3. Write a program to check whether a number is ugly or not.

/**
 * Ugly number ===> Ugly numbers are those whose only prime factors are 2,3 or 5.
 */

function maxDivide(number, divisor) {
  while (number % divisor === 0) {
    number = number / divisor;
  }

  return number;
}

function checkUgly(number) {
  let num = maxDivide(number, 2);
  num = maxDivide(num, 3);
  num = maxDivide(num, 5);

  return num === 1;
}

console.log("isUgly", checkUgly(5));

/**
 * The time complexity of maxDivide i a logarithmic function which depends on divisor and the number.
 *
 * Time complexity ===> O(log-> base 2 -> of (n))
 */

// 4. Return a vector of ugly number less than equal to n.

function getUglyNumberVector(n) {
  let arr = [];
  for (let i = 1; i <= n; i++) {
    let veify = checkUgly(i);
    if (veify) {
      arr.push(i);
    }
  }

  return arr;
}

console.log("Ugly vector", getUglyNumberVector(180));

// Time complexity of getUglyNumberVector() is => O(log base 2 of n * n (for loop))
// Hence, the time complexity would be O(nlog -> 2 -> n)
