/**
 * Problem :: Given an array arr, find and return two indices of the array that add up to weight or return -1 if there is no combination that adds up to weight.
 */

function findSum(arr, weight) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === weight) {
        return [i, j];
      }
    }
  }
  return [-1];
}

let arr = [1, 2, 3, 4, 5];
console.log(findSum(arr, 9));

//Time Complexity of the algorithm is :- O(n) * O(n) = O(n^2) -> Quadratic Time Complexity

//Let's try to do in Linear Time Complexity

function findSumBetter(arr, weight) {
  let hashTable = {};

  for (let i = 0; i < arr.length; i++) {
    let currentElement = arr[i],
      difference = weight - currentElement;

    console.log("Current element :: ", currentElement);
    console.log(hashTable[currentElement]);

    if (hashTable[currentElement] != undefined) {
      return [hashTable[currentElement], i];
    } else {
      hashTable[difference] = i;
    }
    console.log("hashTable :: ", hashTable);
  }

  return [-1];
}

let arr2 = [4, 82, 23, 1, 15, 6, 7, 80, 9, 8];
let resutl = findSumBetter(arr2, 17);
console.log("result  :: ", resutl);
