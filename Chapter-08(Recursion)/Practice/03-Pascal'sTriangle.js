/**
 * What is Pascal's Triangle?
 *
 * Pascal triangle is a triangle whose element is the summation of it's top(left & right) values.
 *
 * Print this Triangle
 *
 *              1
 *             1 1
 *            1 2 1
 *           1 3 3 1
 *          1 4 6 4 1
 *        1 5 10 10 5 1
 */

function generatePascalTriangle(rows) {
  const triangle = [];

  for (let i = 0; i < rows; i++) {
    triangle[i] = new Array(i + 1);
    triangle[i][0] = 1; // First element is always 1
    triangle[i][i] = 1; // Last element is always 1

    for (let j = 1; j < i; j++) {
      triangle[i][j] = triangle[i - 1][j - 1] + triangle[i - 1][j];
    }
  }

  return triangle;
}

function printPascalTriangle(rows) {
  const triangle = generatePascalTriangle(rows);
  //   console.log("Jagged array : ", triangle);

  triangle.forEach((row) => {
    // console.log(row.join(" "));
    console.log(row.join(" "));
  });
}

// Example usage:
printPascalTriangle(6);

/**
 * Pascal's triangle with Recursion
 */

// Base case :: The base case for pascal's triangle is that the top element(row=1, col=1) is 1. Everything else is derived from this fact alone. Hence, when the column is 1, return 1, and when the row is 0, return 0.

//Divide and conquer :: By the mathematical definition of Pascal's triangle, a term of Pascal's triangle is defined as the sum of its upper terms. Therefore, this can be expressed as the following:

function pascalTriangle(row, col) {
  if (col == 0) {
    return 1;
  } else if (row == 0) {
    return 0;
  } else {
    return pascalTriangle(row - 1, col) + pascalTriangle(row - 1, col - 1);
  }
}

let row = 5;
let col = 2;
let result = pascalTriangle(row, col);
console.log(`row-${row}, col-${col} :: result ${result}`);

//Function will get terminated if there is single value hit the base-case.

// Stack: [pascalTriangle(5, 2), pascalTriangle(4, 2), pascalTriangle(3, 2), pascalTriangle(2, 2), pascalTriangle(1, 2)]
// pascalTriangle(1, 2) is out of bounds, returns 0.
// Stack after pascalTriangle(1, 2) returns: [pascalTriangle(5, 2), pascalTriangle(4, 2), pascalTriangle(3, 2), pascalTriangle(2, 2)]
// pascalTriangle(2, 2) also calls pascalTriangle(1, 1).
// Stack: [pascalTriangle(5, 2), pascalTriangle(4, 2), pascalTriangle(3, 2), pascalTriangle(2, 2), pascalTriangle(1, 1)]
// pascalTriangle(1, 1) calls pascalTriangle(0, 1) (returns 0) and pascalTriangle(0, 0) (returns 1).

// Stack shrinks as results are returned:
// [pascalTriangle(5, 2), pascalTriangle(4, 2), pascalTriangle(3, 2), pascalTriangle(2, 2)]
// [pascalTriangle(5, 2), pascalTriangle(4, 2), pascalTriangle(3, 2)]
// Final return for pascalTriangle(2, 2) = 1.

// pascalTriangle(3, 2) continues, calling pascalTriangle(2, 1).
// Stack: [pascalTriangle(5, 2), pascalTriangle(4, 2), pascalTriangle(3, 2), pascalTriangle(2, 1)]
// Repeat similar steps, stack unwinds, returning 3 for pascalTriangle(3, 2).

// Similar process for pascalTriangle(4, 2) and pascalTriangle(5, 2).

// The stack will grow and shrink as follows:

// Start: [pascalTriangle(5, 2)]
// Max Depth: [pascalTriangle(5, 2), pascalTriangle(4, 2), pascalTriangle(3, 2), pascalTriangle(2, 2), pascalTriangle(1, 2)]
// Ending: Stack completely unwinds, leaving no calls left after the result is calculated.

// Key Points:
// Each recursive call adds to the stack.
// The function returns and removes the top of the stack as each base case is met.
// The stack eventually empties when the initial call finishes.
