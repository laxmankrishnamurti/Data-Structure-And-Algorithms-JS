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
// let hashT = getHashTable(array);
// console.log("Occurance of 5", hashT[5]);

// assuming str is in lowercase
function getLowerCharHashTable(str) {
  // for all characters the length will be 256
  const charHashTable = Array(25).fill(0);

  for (let i = 0; i < str.length; i++) {
    // for all characters ===> charHashTable[str[i].charCodeAt(0)]
    charHashTable[str[i].charCodeAt(0) - "a".charCodeAt(0)] += 1;
  }

  return charHashTable;
}

function getCharOcc(str, char) {
  let lowerCharHashTable = getLowerCharHashTable(str);
  return lowerCharHashTable[char.charCodeAt(0) - "a".charCodeAt(0)];
}

const char = "a";
const str = "laaaaaaaaaaaaksjssssdf";
let numOfOcc = getCharOcc(str, char);
console.log(`occurance of ${char} in the string ${str} is ${numOfOcc}`);
