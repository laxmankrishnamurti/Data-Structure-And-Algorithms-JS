function getCommonElement(multiDimenArr) {
  let hashTable = {};
  let common = [];

  let firstNestArr = multiDimenArr[0];
  for (let k = 0; k < firstNestArr.length; k++) {
    hashTable[firstNestArr[k]] = 0;
  }

  let allKeys = Object.getOwnPropertyNames(hashTable);

  for (let i = 1; i < multiDimenArr.length; i++) {
    let currentArr = multiDimenArr[i];
    for (let j = 0; j < currentArr.length; j++) {
      if (allKeys.includes(String(currentArr[j]))) {
        hashTable[currentArr[j]] += 1;
      }
    }
  }

  for (let key in hashTable) {
    if (hashTable[key] === multiDimenArr.length - 1) {
      common.push(+key);
    }
  }
  console.log("hashTable :: ", hashTable);
  return common;
}

let result = getCommonElement([
  [6, 23, 4, 5, 6, 7, 78, 6],
  [1, 2, 3, 5, 5, 3, 6, 78],
  [1, 1, 2, 3, 5, 79, 7, 78, 423, 6],
]);
console.log("Common element  :: ", result);

//Note :: Whether the given array is sorted or unsorted it can return the all common elements which is in the array.

//Let's calculate the Time-Complexity of the algorithm

/*
1st loop -> O(n) 
2nd loop -> O(n^2) 
3rd loop -> O(n)

Worst Time complexity of the algorithm is -> O(n^2) :: Quadratic
*/
