function getHashTable(arr) {
  let maxHashNumber = Math.max(...arr);
  let hashTable = Array(maxHashNumber + 1).fill(0);

  for (let i = 0; i < arr.length; i++) {
    hashTable[arr[i]] += 1;
  }

  return hashTable;
}

let array = [
  1, 2, 3, 4, 5, 4, 3, 2, 3, 4, 5, 4, 3, 2, 3, 4, 3, 2, 1, 2, 3, 2, 4, 5, 4, 3,
  2, 3,
];
let hashT = getHashTable(array);
console.log("Occurance of 5", hashT[5]);
