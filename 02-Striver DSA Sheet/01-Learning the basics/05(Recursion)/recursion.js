//1.  Print numbers from 1 to n without the help of loops. You only need to complete the function printNos() that takes N as parameter and prints number from 1 to N recursively.

function printNos(n, origin = n) {
  if (n === 0) {
    return;
  }
  printNos(n - 1, origin);
  process.stdout.write(" " + n);

  if (n === origin) {
    process.stdout.write("\n");
  }
}

// printNos(5);

//2. Print "GFG", n times without the loop.

function printStr(n, origin = n) {
  if (n === 0) {
    return;
  }

  process.stdout.write("GFG" + " ");
  printStr(n - 1, origin);

  if (n === origin) {
    process.stdout.write("\n");
  }
}

// printStr(10);

// 4. Print numbers from N to 1 (space separated) without the help of loops.

function printDec(n, origin = n) {
  if (n === 0) {
    return;
  }
  process.stdout.write(n + " ");
  printDec(n - 1, origin);

  if (n === origin) {
    process.stdout.write("\n");
  }
}

// printDec(10);

// 5. Given an integer n, calculate the sum of series 1^3 + 2^3 + 3^3 + 4^3 + … till n-th term.

function sumOfSeries(n) {
  if (n === 1) {
    return 1;
  }

  return n ** 3 + sumOfSeries(n - 1);
}

// console.log(sumOfSeries(3));

//Without recursion

function sumOfCubes(n) {
  // Use BigInt to handle large numbers accurately
  const bigN = BigInt(n);
  const sumOfFirstN = (bigN * (bigN + 1n)) / 2n; // `1n` is BigInt syntax for 1
  return sumOfFirstN ** 2n;
}

// Example usage
// const n = 26501;
// console.log("Sum of series:", sumOfCubes(n).toString()); // Convert BigInt result to string for display
// For BigInt syntax, integers are suffixed with n(e.g., 1n), and all operations are performed using BigInt methods.

/**
 * Conclusion ===> If upper frame has to return something to the below frame the recursive expression should be expressed with the return keyword.
 */

//6. A number n is called a factorial number if it is the factorial of a positive integer. For example, the first few factorial numbers are 1, 2, 6, 24, 120,...etc. Given a number n, the task is to return the list/vector of the factorial numbers smaller than or equal to n.

function factorialVector(n) {
  if (n < 0) {
    return;
  }

  let factorial = 1;
  for (let i = 1; i <= n; i++) {
    factorial *= i;
    if (factorial <= n) {
      process.stdout.write(factorial.toString() + " ");
    }
  }
  console.log("\n");
}

// factorialVector(5);

//With recursion

function factorialVectorWithRecursion(n) {
  if (n === 1) {
    process.stdout.write(n + " ");
    return 1;
  }

  let factorial = n * factorialVectorWithRecursion(n - 1);
  if (factorial <= n) {
    process.stdout.write(factorial + " ");
  }
  console.log();
  return factorial;
}

// factorialVectorWithRecursion(3);

//7. You are given an array of integers arr . Your task is to reverse the given array and return the reversed array.

function reverseArr(arr) {
  for (let i = 0; i < Math.floor(arr.length / 2); i++) {
    let temp = arr[i];
    arr[i] = arr[arr.length - (i + 1)];
    arr[arr.length - (i + 1)] = temp;
  }
  return arr;
}

let reversedArr = reverseArr([1, 2, 3, 4]);
// console.log("reversedArr", reversedArr);

function reverseArrWithRecursion(arr, index = 0) {
  if (index === Math.floor(arr.length / 2)) {
    return;
  }

  let temp = arr[index];
  arr[index] = arr[arr.length - (1 + index)];
  arr[arr.length - (1 + index)] = temp;

  index++;
  reverseArrWithRecursion(arr, index);
  return arr;
}

let reArr = reverseArrWithRecursion([1, 2, 3, 4]);
// console.log("reversed Array", reArr);

// 8. A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

function palindromeStr(s) {
  s = s.replace(/[^a-zA-Z]/g, "");
  s = s.toLowerCase();

  s = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");

  if (s === "" || s === " ") return true;

  var palindrom = function (str, start = 0, end = str.length - 1) {
    if (start >= end) return true;

    if (str.length === 1) return true;

    if (str[start] !== str[end]) return false;

    return palindrom(str, start + 1, end - 1);
  };

  return palindrom(s);
}

let result = palindromeStr("0P");
console.log("Palindrom", result);
