//Unlike Java and c++, JavaScript does not have multidimensional arrya. Instead of this, there are jagged arrays.

/**
 * What are jagged array?
 *
 * A jagged array is an array whose elements are an array itself.
 *
 * Ex :- let numbers = [[1,2,3], [2,2,4], [6,7,2]]
 *
 *The element of jagged array can be of different dimensions and sizes.
 */

function Matrix(rows, columns) {
  var jaggedArray = new Array(rows);
  for (var i = 0; i < columns; i++) {
    jaggedArray[i] = new Array(rows);
  }
  return jaggedArray;
}

console.log(Matrix(3, 3));
//Output : [ [ <3 empty items> ], [ <3 empty items> ], [ <3 empty items> ] ]
/*
This happens like this:-
Initial value of jagged array -> [e,e,e]

1st loop -> [[e,e,e],e,e]
2nd loop -> [[e,e,e],[e,e,e],e]
3rd loop -> [[e,e,e],[e,e,e],[e,e,e]]
*/

let jaggedArr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

//Let's traverse into the jaggedArr and find a particular vlaue

function findTargetInJaggedArray(arr, target) {
  const result = {};
  let catched = false;
  for (let i = 0; i < arr.length; i++) {
    let currentElement = arr[i];
    for (let j = 0; j < currentElement.length; j++) {
      if (currentElement[j] === target) {
        catched = true;
        result.isExist = true;
        result.rowPosition = i;
        result.columnPosition = j;
      }
    }
  }

  if (!catched) {
    result.isExist = false;
  }

  return result;
}

let result = findTargetInJaggedArray(jaggedArr, 5);
console.log("result :: ", result);

//Output : result ::  { isExist: true, rowPosition: 1, columnPosition: 1 }

let result2 = findTargetInJaggedArray(jaggedArr, 50);
console.log("result :: ", result2);

//Output : result ::  { isExist: false }
