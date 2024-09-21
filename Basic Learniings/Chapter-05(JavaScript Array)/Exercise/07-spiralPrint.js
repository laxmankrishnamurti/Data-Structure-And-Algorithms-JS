/*
Print ::
1   2   3   4   5
6   7   8   9   10
11  12  13  14  15
16  17  18  19  20
*/

const matrix = [
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10],
  [11, 12, 13, 14, 15],
  [16, 17, 18, 19, 20],
];

function spiralPrint(m) {
  for (let i = 0; i < m.length; i++) {
    let currentRow = m[i];
    let rowString = "";
    for (let column = 0; column < currentRow.length; column++) {
      rowString += currentRow[column] + "  ";
    }
    console.log(rowString);
  }
}

spiralPrint(matrix);
