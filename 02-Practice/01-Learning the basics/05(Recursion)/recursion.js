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

console.log(sumOfSeries(3));

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
