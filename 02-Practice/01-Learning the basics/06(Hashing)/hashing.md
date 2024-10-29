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
