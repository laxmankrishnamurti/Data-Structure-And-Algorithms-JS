# What is hashing?

Before deep dive into _what hashing is_ let's walk through a problem statement.

_Problem :: Find the number of occurance of a particular number in an array_

```js
// Brute-froce approach

function noOfOccurance(arr, target) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      count++;
    }
  }
  return count;
}

let occurances = noOfOccurance(
  [1, 1, 2, 3, 4, 2, 1, 3, 3, 21, 4, 5, , 6, 4, 3, 2, 4, 6, 6],
  1
);
console.log("Occurance of 6 is", occurance);

//Output :: 3

// Time Complexity

Size of targets * O(size of the input array)
let size of targets = q
size of input array = n

Time complexity can be represented as ===> O(q*n)
```

But what will happen if we increase the size of the array and the number of targets.

let size of array is ===> 10^5
target size ===> 10^5 (means we have to check the number of occurance of each target value which size is 10^5)

_Time complexity will be ===> O(10^5\*10^5) ===> O(10^10)_

Generally computer can compute 10^8 operations within 1second.

so, much time it would take to compute the result for such input sizes ===> 10^2 second ===> 100 seconds ===> 1.4 minutes (Higher response time)

Which is not good for real-world scenarios where client is waiting for almost 2 minutes to get their desired results.

Here, _Hashing_ comes into the picture to solve the problem.

## **What is hashing**

Hashing is used like a cheching which stores data for further use cases.

- It pre-store the value and then fetch the same value if needed.

### Number Hashing

```js
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
```

- **The maximum length of the hash table will be decided from the max value of the input array's element.**
- **Because in the hash table every index will represent the value of the array not the actual index vlaue. The index value in the hash table is the element of the input array and the value on a particular index is nothing but the number of occurance of the input element**

So, to track a history of such occurances there are two main-deciding factors

1. What is the max element value of the input array
2. Array's element is used as an index value in the hashtable and the value of that particular index will be the occurance number.

## Limitations

**_In C++_ (inside int main())**

- If we are dealing with an array of _integers_ we can only store upto [1e6] locally and [1e7] globally.
- With boolean it can go upto [1e7] locally and [1e8] globally.

- **If we try to initialize an array outside the range we will get an segmentation error. Because, memory management unit could not able to allocate that much memory in the RAM.**

**_In JavaScript_**

- Array

  ```js
  const maxArr = Array(1e9);
  console.log("maxArr", maxArr);

  //Output ===> maxArr [ <1000000000 empty items> ]
  ```

  But problems comes when we increase it by 1.

  ```js
  const maxArr = Array(1e10);
  console.log("maxArr", maxArr);

  //Output
  //const maxArr = Array(1e10);
  //RangeError: Invalid array length
  ```

## Things went wrong when i have started allocating values in the array

    ```js
    const maxArr = Array(1e9).fill(0);
    console.log("maxArr", maxArr);

    const maxBool = Array(1e9).fill(Boolean(1));
    console.log("maxBool", maxBool);
    ```

    ```bash
    # Output

    <--- Last few GCs --->

    [15115:0x5a4ff90]     2553 ms: Scavenge 515.0 (549.4) -> 515.0 (549.4) MB, 129.99 / 0.00 ms  (average mu = 1.000, current mu = 1.000) allocation failure;
    [15115:0x5a4ff90]     3631 ms: Mark-Compact 909.8 (944.4) -> 909.5 (944.4) MB, 575.36 / 0.00 ms  (+ 0.4 ms in 44 steps since start of marking, biggest step 0.1 ms, walltime since start of marking 1078 ms) (average mu = 1.000, current mu = 1.000) allocatio

    <--- JS stacktrace --->

    FATAL ERROR: invalid table size Allocation failed - JavaScript heap out of memory
    ----- Native stack trace -----

    ......to much details
    12: 0x1961df6  [node]
    Aborted (core dumped)
    ```

    ```js
    const maxArr = Array(1e8).fill(0);
    console.log("maxArr", maxArr);

    const maxBool = Array(1e8).fill(Boolean(1));
    console.log("maxBool", maxBool);
    ```

    ```bash
    # Output (It had been taken too much time)

    maxArr [
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0,
      ... 99999900 more items
    ]

    <--- Last few GCs --->
    .1[15271:0x6707f90]    62365 ms: Mark-Compact (reduce) 4080.2 (4112.3) -> 4080.2 (4112.3) MB, 3119.74 / 0.00 ms  (+ 0.0 ms in 3 steps since start of marking, biggest step 0.0 ms, walltime since start of marking 3133 ms) (average mu = 0.172, current mu = 0.0[15271:0x6707f90]    65848 ms: Mark-Compact (reduce) 4088.3 (4120.5) -> 4088.3 (4120.5) MB, 3151.49 / 0.00 ms  (+ 0.0 ms in 3 steps since start of marking, biggest step 0.0 ms, walltime since start of marking 3165 ms) (average mu = 0.135, current mu = 0.0

    <--- JS stacktrace --->

    FATAL ERROR: Ineffective mark-compacts near heap limit Allocation failed - JavaScript heap out of memory
    ----- Native stack trace -----

    ......to much details
    16: 0x1961df6  [node]
    Aborted (core dumped)
    ```

    ```js
    const maxArr = Array(1e7).fill(0);
    console.log("maxArr", maxArr);

    const maxBool = Array(1e7).fill(Boolean(1));
    console.log("maxBool", maxBool);
    ```

    ```bash
    # Output (Easiely get printed)

    maxArr [
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0,
      ... 9999900 more items
    ]
    maxBool [
      true, true, true, true, true, true, true, true, true, true,
      true, true, true, true, true, true, true, true, true, true,
      true, true, true, true, true, true, true, true, true, true,
      true, true, true, true, true, true, true, true, true, true,
      true, true, true, true, true, true, true, true, true, true,
      true, true, true, true, true, true, true, true, true, true,
      true, true, true, true, true, true, true, true, true, true,
      true, true, true, true, true, true, true, true, true, true,
      true, true, true, true, true, true, true, true, true, true,
      true, true, true, true, true, true, true, true, true, true,
      ... 9999900 more items
    ]
    ```

**Ideal array length should be [1E7]**

### Character Hashing

```js
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
```

**_Because there are limited characters so there is no limit for of hashing for that_**
