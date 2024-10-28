function hashTable(arr) {
  let maxHashNumber = 6;
  let hashTable = Array(maxHashNumber).fill(0);

  console.log(hashTable);
  for (let i = 0; i < arr.length; i++) {
    hashTable[arr[i]] += 1;
  }

  return hashTable;
}

let array = [
  1, 2, 3, 4, 5, 4, 3, 2, 3, 4, 5, 4, 3, 2, 3, 4, 3, 2, 1, 2, 3, 2, 4, 5, 4, 3,
  2, 3,
];
let hashT = hashTable(array);
console.log("Occurance of 5", hashT[5]);
