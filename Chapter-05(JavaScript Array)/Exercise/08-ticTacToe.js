function checkRow(rowArr, letter) {
  for (let i = 0; i < 3; i++) {
    if (rowArr[i] !== letter) {
      return false;
    }
  }
  return true;
}

function checkColumn(matrix, columnIndex, letter) {
  for (let i = 0; i < 3; i++) {
    if (matrix[i][columnIndex] !== letter) {
      return false;
    }
  }
  return true;
}

function ticTacToeWinner(matrix, letter) {
  //check rows
  const rowWin =
    checkRow(matrix[0], letter) ||
    checkRow(matrix[1], letter) ||
    checkRow(matrix[2], letter);

  //check columns
  const columnWin =
    checkColumn(matrix, 0, letter) ||
    checkColumn(matrix, 1, letter) ||
    checkColumn(matrix, 2, letter);

  //check diagonals
  let leftToRightDiagonal =
    matrix[0][0] === letter &&
    matrix[1][1] === letter &&
    matrix[2][2] === letter;
  let rightToLeftDiagonal =
    matrix[0][2] === letter &&
    matrix[1][1] === letter &&
    matrix[2][0] === letter;

  return rowWin || columnWin || leftToRightDiagonal || rightToLeftDiagonal;
}

let matrix = [
  ["0", "-", "x"],
  ["-", "0", "x"],
  ["-", "x", "0"],
];

let xStatus = ticTacToeWinner(matrix, "x");
console.log("xStatus :: ", xStatus);

let OStatus = ticTacToeWinner(matrix, "0");
console.log("OStatus :: ", OStatus);
