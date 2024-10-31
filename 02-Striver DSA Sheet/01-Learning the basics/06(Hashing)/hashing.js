/**
 * Number Hashing
 */

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

const maxArr = Array(1e7).fill(0);
// console.log("maxArr", maxArr);

const maxBool = Array(1e7).fill(Boolean(1));
// console.log("maxBool", maxBool);

/**
 * Character Hashing
 */

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
// let numOfOcc = getCharOcc(str, char);
// console.log(`occurance of ${char} in the string ${str} is ${numOfOcc}`);

/**
 * Segmentation
 */

function segmentation(arr, target) {
  const segmentSize = 1e7;
  const segments = Math.ceil(1e8 / segmentSize);
  const occurances = Array.from(
    { length: segments },
    () => new Uint32Array(segmentSize)
  );

  let max = Math.max(...arr);

  if (max > 1e8 || target > 1e8) {
    return `Invalid input`;
  }

  // changing occurances

  for (let i = 0; i < arr.length; i++) {
    let index = arr[i];
    let segmentIndex = Math.floor(index / segmentSize);
    let innerIndex = index % segmentSize;

    occurances[segmentIndex][innerIndex] += 1;
  }

  let index = target;
  let segmentIndex = Math.floor(index / segmentSize);
  let innerIndex = index % segmentSize;

  return occurances[segmentIndex][innerIndex];
}

let occuranceResult = segmentation(
  [
    1, 3, 4, 2, 4, 45, 56, 7, 7, 6, 54, 3, 3, 5, 67, 8, 89, 9, 9, 8, 7, 67, 56,
    54, 10000000, 10000000, 10000000, 10000000, 10000000,
  ],
  20
);
console.log("occuranceResult", occuranceResult);
