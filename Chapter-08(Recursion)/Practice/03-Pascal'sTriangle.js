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
