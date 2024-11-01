# Chapter - 01 (Big-O Notation)

The Big-O notation measures the worst-case complexity of an algorithms.

## **What does it mean by worst-case?**

It means, the maximum number of operations and the resources(such as memory) that an algorithm required to complete it's task regardless of input size. Let's understand it .............

```js
function findTarget(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return `index : ${i}`;
    }
  }
}

let result = findTarget(
  [
    [
      1, 2, 3, 4, 5, 12, 3, 34, 20, 4, 26, 4, 2334, 2, 3, 1, 3, 6, 6, 5, 6, 6,
      7, 8, 8, 67,
    ],
  ],
  2
);
```

In this input array the target is _2_ and the algorithm doesn't require to traverse in the entire array to find the target value because it is on the _1st index_. Hence, it only require to do _2-operations_ to find the target value. This not the _worst-case scenario._ Let's have a look on this :-

```js
let result = findTarget(
  [
    [
      1, 3, 4, 5, 12, 3, 34, 20, 4, 26, 4, 2334, 2, 3, 1, 3, 6, 6, 5, 6, 6, 7,
      8, 8, 67, 2,
    ],
  ],
  2
);
```

Now, we can clearly see the same target is on the last index of the array means the algorithm that we have created must run _n-times_ to find the target. This is what we call _the worst-case scenario_ where algorithm is forced to run _n-times_ to complete their task.

## Symbol **_O(n)_**

Where, n represents the input size

## What exactly time complexity is?

Time complexity is not related to the time an algorithm takes. This should not become the criteria to judge an algorithm how fast it is because in this way the time complexity will depends on the machine configuration. A low-level machine takes too much time than a high-configurable machine for the same algorithms.

Hence, total amount of time taken by an algorithm will not become the criteria to judge any particular algorithm. Then what it is? let's go........

_Time complexity of an algorithm is the number of operations that it does to accomplish the task with a given input size._

```js
function findTarget(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; i++) {
      if (arr[i][j] === target) {
        return `Outer index : ${i}, Inner index : ${j}`;
      }
    }
  }
}

let result = findTarget(
  [
    [1, 2, 3, 4, 5],
    [6, 7, 8],
    [9, 0, 10, 11],
  ],
  5
);
```

This algorithm is trying to find an element in a 2D array or in the jagged array(in javascript) and returning the outer and innder index value which is the position of the element in the given array.

Now, for every outer index the algorithm is running an additional loop for traversing in the nested array. Let's see how many numbers of operation it does to find the given target.

- Outer array
  - _n-times_
    - Inner array
      - _n-times_

Where, n is the total length of the array.

- For every single outer element the inner loop will run completely. So, let's calculate total number of operations.

  - Outer length ===> n

    - Inner length ===> n

  - The next element of the array runs after n times, which is the length of the inner array
    - 1 element \* n times
    - n element \* n times
  - So, the time complexity would be ===> n \* n ===> n res to the power 2 ===> O(n^2)

**Mathematical calculations**

- Total length of the outer element is ===> 3

  - First inner element length is ===> 5

    - As of now, the total number of operations is ===> 5 + 1 ===> 6

  - Second inner element length is ===> 3

    - Total number of operations ===> 3 + 1 ===> 4 + 6 ===> 10

  - Third inner element length is ===> 4
    - Total number of operations ===> 4 + 1 ===> 5 + 10 ===> 15

_In short ===> Total number of operations would be ===> [(total length of parent array)*(total length of child array)] ===> 3 \* 5 ===> 15 Operations_

**Hence, time complexity would be ===> _O(n \* n) : in nested conditions_**

## Common time-complexities

1. O(1)

   - O(1) is holy by "Hamid Tizhoosh"

2. O(log n)

3. O(n)

4. O(n^2)

5. O(n^3)

6. O(n^n)

**Descending Order based on number of operation**

_O(n^n) ===> O(On^3) ===> O(n^2) ===> O(n) ===> O(log n) ===> O(1)_

[Basics of Logarithms](./logarithm.md)
