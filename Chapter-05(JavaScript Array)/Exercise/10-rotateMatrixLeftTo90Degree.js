function rotateMatrixLeftBy90Degree(matrix) {
  let rows = matrix.length - 1;
  const inputMatrix = matrix.map((row) => [...row]);
  for (let i = 0; i < matrix.length; i++) {
    let currentRow = matrix[i];
    for (let j = 0; j < currentRow.length; j++) {
      matrix[i][j] = inputMatrix[j][rows];
    }
    rows -= 1;
  }

  return matrix;
}

let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
let reverseMatrix = rotateMatrixLeftBy90Degree(matrix);
console.log("reversed matrix :: ", reverseMatrix);

/*
Time complexity of the algorithm is - O(n^2)
Space complexity of the algorithm is -> O(n^2)
*/

//Let's find some better solution

function rotateMatrix90Left(matrix) {
  let n = matrix.length;

  for (let x = 0; x < n / 2; x++) {
    for (let y = x; y < n - x - 1; y++) {
      //store current cell in temp variable
      let temp = matrix[x][y];

      //move values from right to top
      matrix[x][y] = matrix[y][n - 1 - x];

      //move vlaues from bottom to right
      matrix[y][n - 1 - x] = matrix[n - 1 - x][n - 1 - y];

      //move vlaues from left to bottom
      matrix[n - 1 - x][n - 1 - y] = matrix[n - 1 - y][x];

      //assigning temp to left
      matrix[n - 1 - y][x] = temp;
    }
  }
  return matrix;
}

// const jaggedArray = [
//   [10, 20, 30],
//   [40, 50, 60],
//   [70, 80, 90],
// ];

const getReverse = rotateMatrix90Left(matrix);
console.log("left by 90 :: ", getReverse);

//Output :  [ [ 9, 8, 7 ], [ 6, 5, 4 ], [ 3, 2, 1 ] ]
