# Introduction to recursion

**Pre-requisits**

- Functions
- Types of functions

## Let's start

When a function calls itself again-&-again until a specified condition is met.

```js
function printOne() {
  console.log(1);
  printOne();
}

function parentFunction() {
  printOne();
}

parentFunction();
```

This is a type of _infinite recursion_ because when we run the program it will exceed the stack limit because the _printOne_ function will keep calling itself infinite times.

**_RangeError_: Maximum call stack size exceeded**

## What does the error is trying to say? Let's figure out....

Lets first understand what is a stack?

- **A stack is a place where functions are loaded and executed in a _Last-In, First-Out order,_ managing function calls and returns.**

- **The depth of call stack is depend on the system environment (ex:- browser, Node.js) on which we are running the program and their resources.**

- **Each environment sets a limit to prevent infinite recursion or excessively deep function calls that would otherwise crash the program. **

- **Maximum call stack**
  - Browsers ===> _10,000 frames to 20,000 frames_
  - Node.js ===> _Around 10,000 frames_
  - System memory and browser or server settings can also impact this limit.

#### **When 'maximum call stack size exceeded' error occurs**

There are two main reasons that cause the problem.

- The error happens when a function is called so many times in succession without returning that it exceeds the environment's call stack limit.
- Recursion function without a proper base case, or situations where functions keep calling one another in a circular manner, can lead to this error.

#### **How to identify and resolve 'maximum call stack size exceeded'?**

- Identify unintended recursive calls or cyclic function calls.
- Set a proper case while using recursion.
