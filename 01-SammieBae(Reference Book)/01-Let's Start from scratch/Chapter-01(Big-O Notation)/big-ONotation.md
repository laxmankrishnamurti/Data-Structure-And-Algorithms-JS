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

**Descending Order based on time complexity**

_O(n^n) ===> O(On^3) ===> O(n^2) ===> O(n) ===> O(log n) ===> O(1)_

[Basics of Logarithms](./logarithm.md)

**Logarithmic time complexity**

```js
// Print elements that are a power of 2 between 2 to n.

function printN(n) {
  for (let i = 2; i <= n; i *= 2) {
    console.log(i);
  }
}
printN(1000000);
```

- Time complexity
  - log(base 2)1000000 = 19(max)

## Rules of Big-O Notation

The goal of algorithm analysis is to find efficiency of the algorithm. However, it can be challenging to calculate f(n) which consists two things

- f(n) : Algorithms's complexity
- f(n)time : the time complexity
- f(n)space: the space complexity

Hence, f(n) = f(n)time + f(n)space

It means efficiency of an algorithm includes two things the space and the time complexity. But Big-O notation provides some fundamental rules that help us to compute for f(n).

### **1. Coefficient rule**

We do not consider any coefficient value in an algorithms's time complexity becasue we assume that n can be infinity so the coefficient will become negligible.

```js
function printNOne(n) {
  for (let i = 1; i <= n; i++) {
    console.log(i);
  }
}

function printNTwo(n) {
  for (let i = 1; i <= n; i++) {
    console.log(i);
  }

  for (let j = 1; j <= n; j++) {
    console.log(j);
  }
}
```

It seems like first algorithm has lower time complexity than second one. But it dosen't like that. Let's analyze.....

- Time complexity of printNOne is O(n)
- Time complexity of printNTwo is :

  - First loop

    - total number of operations can be N
      - Time complexity would be O(n)

  - Second loop

    - total number of operations can be N
      - Time complexity would be O(n)

  - Now, total number of operations will be = N + N = 2N. Hence, the time complexity of printNTwo would be O(2n) ===> 2O(n) ===> O(n)
    - 2 can be negligible as respect to n.

- Hence, both have same time complexity.

### **2. Sum rule**

The sum rule simply states that if a resultant time complexity is a sum of two different time complexities, the resultant Big-O notation is also the sum of two different Big-O notations.

```js
// This is same as the printNTwo function

function printNTwo(n) {
  for (let i = 1; i <= n; i++) {
    console.log(i);
  }

  for (let j = 1; j <= n; j++) {
    console.log(j);
  }
}
```

At the end of the day _printNTwo()_ depends on the inner two loops's complexities. Untill both loop will not run the function will not able to give any kind of results. It means it depends upon both loops which has different time complexity.

### **3. Product rule**

The product rule states that Big-O is multiplied when the time complexities are multiplied. And this will only happens when number of operations will be increased than N. Like we generally see this kind of situation in the nested loop.

```js
function printNTwo(n) {
  for (let i = 1; i <= n; i++) {
    console.log(i);
    for (let j = 0; j <= n; j++) {
      console.log(j);
    }
  }
}
```

### **4. Transitive rule**

The transitive rule is a simple way to state that the same time complexity has the same Big-O.

EX:- If f(n) is O(g(n)) and g(n) is O(h(n)), the f(n) is O(h(n)).

For instance, if A is larger than B, and B is larger than C, then it is obvious that A will be larger than C.

This is what transitive rule is trying to say.

```js
function returnValue(n) {
  let arr = [];
  for (let i = 0; i < n.length; i++) {
    for (let j = 0; j < n.length; j++) {
      arr.push(n[j]);
    }
  }

  return arr;
}

function getValue(n) {
  let value = returnValue(n);

  return value;
}
```

In this case the time complexity of _getValue()_ function is not just _O(1)_ it totally depends upon the _returnValue()_ algorithm's efficiency that how fast it can deliver the value.

Now, we can clearly see that the time complexity of the _returnValue()_ is _O(n sqare)_.

Hence the time complexity of the _getValue()_ function will also be _O(n sqare)_.
