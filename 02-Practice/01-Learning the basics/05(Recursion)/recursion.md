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

This is a type of _infinite recursion_ because when we run the program it will exceed the stack limit because the _printOne_ function will keep calling itself infinite times because there no such condition where function will reach and know this is the point where i should stop the function execution.

**When do we call a function is executed?**

When the last line of the function is executed then we can call the function is executed. But, here after _console.log(1)_ function is waiting for the execution of _printOne()_ and the _printOne()_ itself will also be in the waiting state when it called and the loop will continue until the any function will not return anything.

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

## Recursion with it's base case.

```js
let i = 1;
function printTable(n) {
  if (i === 11) {
    return;
  }
  console.log(n * i);
  i++;
  printTable(n);
}

printTable(2);
```

Here the function _printTable()_ will keep calling itself until the value of i will not be equal to 11.

**Now, the question is where does the waiting function is stored?**

- In the stack space.
  - Yes, when a function is waiting to be executed and inside the function there is one more function that is also waiting to be executed then the first function(parent) will keep in the stack space and will unwinded when the further function is executed. Every parent function will be in the stack space and will have been waiting until its child function will not be executed.

## **How does the memory management work in recursive call?**

1. **Memory stack for recursive call**

   Each time a recursive function calls itself, a new stack frame (or activation record) is created in the call stack. This stack frame stores information like:

   - The current function's parameters
   - Local variables of the function
   - Return address (so the program knows where to return control after the function completes.)

   Hence, each stack frame has a temporarily storage location where it can store values for further execution.

2. **Base case and stack unwinding**

   Once the base case is reached, the function starts to return, and each stack frames begins to _unwind_ or be popped off the stack one by one, releasing memory in the reverse order of function.

3. **Handling Return Values in Recursive Calls**

   For cases where a function requires a value that's the result of another function, the stack frames hold onto the values temporarily until the function completes. Here's what happens:

   - If the function has intermediate results it needs to remember, these are stored in the stack frames as they wait for subsequent recursive calls to complete.

   - Once the value is returned to a function, it's either used immediately or stored temporarily (with temporary stack storage, values are only kept while the recursive call chain is active.) if it's needed further in the recursive chain.

4. **Memoization (Optional memory management)**
   To prevent recalculating values in recursive calls(especially common in case like Fibonacci sequence calculations), memoization if often used.

   - Memoization, by contrast, involves explicitly storing values in a separate data structure outside the stack.
   - This storage remain available across multiple calls and is used to avoid redundent calculations.

**_With memoization, the program can "remember" values even after indivisual recursive calls complete, while with temporary stack storage, values are only kept while the recursive call chain is active._**
