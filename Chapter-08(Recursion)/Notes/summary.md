# Chapter - 08 (Recursion)

## What is Recursion?

Generally, "recursion" refers to the occurences of a thing defined in the terms of itself. In Computer science, a recursive function is a function that calls itself. Recursive functions are often elegant and solve complex problems through the "divide-and-conquer" method. Recursion is very important becasue we are going to see it again and again in the implementation of various data structures.

While applying recursion keep this in mind that, Infinite recursive calls result in "stack overflow". "Stack overflow" is when the maximum number of call stacks of the program exceeds the limited amount of address space (RAM :: The primary memory).

## Rules of Recursion.

- Base Case :: In Recursion, there must be a base case (also referred to as terminating case). Becasue recursive methods call themselves, they will never stop unless this base case is reached. Stack overflow from recursion is most likely the result of not having a proper base case.

```javascript
unction getFactorialOfN(n) {
  if (n === 1) {
    return 1;
  }
  return n * getFactorialOfN(n - 1);
}

let factorialValue = getFactorialOfN(5);
console.log("Factorial of 5 is : ", factorialValue);

//Factorial of 5 is :  120

```

#### How does it works internally

When we call factorial(5), the function doesn't just evaluate n \* factorial(n - 1) in one go. Instead, it breaks down the problem step by step and uses the return values of subsequent recursive calls to finally compute the result.

Here's how it works:

1. Internal calls

- Initial Call: factorial(5) is called.

n is 5, so factorial(5) returns 5 \* factorial(4).

- Next Call: factorial(4) is called within factorial(5).

n is 4, so factorial(4) returns 4 \* factorial(3).

- Next Call: factorial(3) is called within factorial(4).

n is 3, so factorial(3) returns 3 \* factorial(2).

- Next Call: factorial(2) is called within factorial(3).

n is 2, so factorial(2) returns 2 \* factorial(1).
Base Case Reached: factorial(1) is called within factorial(2).

n is 1, so factorial(1) returns 1 (this is the base case).

2. Unwinding the call stack

Now, the recursive calls start to return their results, and the multiplication begins:

factorial(1) returns 1.
factorial(2) now has the value 2 _ 1 = 2 and returns 2.
factorial(3) now has the value 3 _ 2 = 6 and returns 6.
factorial(4) now has the value 4 _ 6 = 24 and returns 24.
factorial(5) now has the value 5 _ 24 = 120 and returns 120.

3. Why Each call know the value of "n"

Each time the function factorial is called, a new execution context is created on the call stack. This context holds the value of n for that particular call. So:

When factorial(5) is called, it knows n = 5.
When factorial(4) is called, it knows n = 4.
And so on.
Each call to factorial has its own value of n, and it uses this value to compute the result before returning it to the previous call.

4. Visualization

You can visualize the process like this:

factorial(5) is waiting for factorial(4) to return.
factorial(4) is waiting for factorial(3) to return.
factorial(3) is waiting for factorial(2) to return.
factorial(2) is waiting for factorial(1) to return.
factorial(1) returns 1.

5. Now the stack unwinds:

factorial(2) returns 2.
factorial(3) returns 6.
factorial(4) returns 24.
factorial(5) returns 120.

6. Final Result

The final result of factorial(5) is 120 because each recursive call was resolved, multiplied by its corresponding n, and then passed back up the call stack until the initial call returned the final value.

This is how recursion allows the function to correctly compute the factorial, step by step, even though it seems like it should "lose track" of the values. Each recursive call maintains its own context and knows exactly what n it should be working with.

## Key-points about Recursion.

1. Yes, a recursive function waits for the last recursive call to return a value, which is typically obtained from the base case.

2. The base case is essential because it stops the recursion and provides the initial value that propagates back through all the previous calls.

3. Without reaching the base case, the recursion would continue indefinitely, leading to an infinite loop and eventually causing a stack overflow.

## Let see how the calls will be look like?

- Function calling

```javascript
function getFactorialOfN(5) {
  if (n === 1) {
    return 1;
  }
  return (
    n *
    function getFactorialOfN(4) {
      if (n === 1) {
        return 1;
      }
      return (
        n *
        function getFactorialOfN(3) {
          if (n === 1) {
            return 1;
          }
          return (
            n *
            function getFactorialOfN(2) {
              if (n === 1) {
                return 1;
              }
              return (
                n *
                function getFactorialOfN(1) {
                  if (n === 1) {  //Execution will stop here, becasue n = 1 && Base-case is reached
                    return 1;
                  }
                  return n * getFactorialOfN(n - 1);
                }
              );
            }
          );
        }
      );
    }
  );
}

getFactorialOfN(5);
```

- Call Stack Structure

[View on Eraser![](https://app.eraser.io/workspace/uif1hXiIap9Y4m1Qx7HN/preview)](https://app.eraser.io/workspace/uif1hXiIap9Y4m1Qx7HN)

```javascript
function getNthFibonacciNumberWithRecursion(n) {
  //Base case
  if (n <= 1) {
    return n;
  }

  return (
    getNthFibonacciNumberWithRecursion(n - 1) +
    getNthFibonacciNumberWithRecursion(n - 2)
  );
}

let position2 = 3;
let fibonacciNumberWithRecursion =
  getNthFibonacciNumberWithRecursion(position2);
console.log(
  `${position2}th fibonacci number is : ${fibonacciNumberWithRecursion}`
);
```

### Let see how stack will look like in these function calls

stack-06 :: getNthFibonacciNumberWithRecursion(1) -> return 1
<br/>
stack-05 :: getNthFibonacciNumberWithRecursion(0) -> return 0
<br/>
stack-04 :: getNthFibonacciNumberWithRecursion(1) -> return 1
<br/>
stack-03 :: getNthFibonacciNumberWithRecursion(2) -> stack-04 + stack-05
<br/>
stack-02 :: getNthFibonacciNumberWithRecursion(3) -> stack-03 + stack-06
stack-01 :: Global Execution Context

### Key-Points

1. Each recursive call must be stored in memory untill the base case is resolved. Recursive algorithms take extra memory because of the call stack.

2. Recursive functions have an additional space complexity cost that comes from the recursive calls that need to be stored in the operating system's memory stack. The Stack is accumulated untill the base case is solved. In fact, this is often why an iterative solution may be preferred over the recursive solution.

3. If the base case is implemented incorrectly, the recursive function will cause the program to crash because of a stack overflow error that occurs when there are more than the allowed number of elements in the memory stack.

4. Hence, Base-case should be well-implemented.

## How function get executed in Recursive function.

The above explanation that we have discusses(Line-177 to 184) is wrong. Execution of a recursive function does not happen like that. Let see by taking the same function.................

```js
function fact(n) {
  //Base case
  if (n <= 1) {
    console.log("Base case hit when n is : ", n);
    return n;
  }
  console.log("n is : ", n);
  let result = fact(n - 1) + fact(n - 2);
  console.log("Result is : ", result);
  return result;
}
```

#### 1. Call-Stack Diagram

fact (5)
anonymous

#### 1. Console

n is : 5

#### 2. Call-Stack Diagram

fact(4)
fact(5)
anonymous

#### 2. Console

n is : 5
n is : 4

#### 3. Call-Stack Diagram

fact(3)
fact(4)
fact(5)
anonymous

#### 3. Console

n is : 5
n is : 4
n is : 3

#### 2. Call-Stack Diagram

fact(2)
fact(3)
fact(4)
fact(5)
anonymous

#### 2. Console

n is : 5
n is : 4
n is : 3
n is : 2

#### 1. Call-Stack Diagram

fact(1)
fact(2)
fact(3)
fact(4)
fact(5)
anonymous

#### 1. Console

n is : 5
n is : 4
n is : 3
n is : 2
Base case hit when n is : 1

- Base case hit. Hence, fact(1) returns 1.

```js
let result = 1 + fact(n - 2);
```

#### 1. Once a function returns a value it will unwinded from the call stack. Now, the call stack is looking like this :-

fact(2)
fact(3)
fact(4)
fact(5)
anonymous

- Now, it's time to run the second function which is <code>fact(n-2)</code>

#### 0. Call Stack

fact(0)
fact(2)
fact(3)
fact(4)
fact(5)
anonymous

#### 0. Console

n is : 5
n is : 4
n is : 3
n is : 2
Base case hit when n is : 1
Base case hit when n is : 0

- The function <code>fact(n-2)</code> will return 0 and will unwind from the call stack.

```js
let result = 1 + 0; //Result = 1
```

<code>Result executed First time.</code>

#### 0. Console

n is : 5
n is : 4
n is : 3
n is : 2
Base case hit when n is : 1
Base case hit when n is : 0
Result is : 1

```js
function fact(n) {
  //Base case
  if (n <= 1) {
    console.log("Base case hit when n is : ", n);
    return n;
  }
  console.log("n is : ", n);
  let result = fact(n - 1) + fact(n - 2);
  console.log("Result is : ", result);
  return result;
}
```

You Probabily might be thinking that after printing the result value the function will return the result value. If it will happen then all stack will wind-up. But, it will never unwind like this. Because the function will not return any kind of statement or values untill all execution of the program will not be completed. If function wants to do that first of all it must unwind all above call stack because it is the parent function or we can say that it is the parent call-stack.

#### 3. Call Stack

fact(3)
fact(4)
fact(5)
anonymous

- Now, it's time to run the second function <code>fact(n-2)</code>

#### 1. Now, the call Call Stack will look like.

fact(1)
fact(3)
fact(4)
fact(5)
anonymous

- Base case hit when n is 1.

```js
let result = fact(n - 1) + 1;
let result = 1 + 1; // result = 2
```

#### 1. Console

n is : 5
n is : 4
n is : 3
n is : 2
Base case hit when n is : 1
Base case hit when n is : 0
Result is : 1
Base case hit when n is : 1

#### 3. Call Stack

fact(3)
fact(4)
fact(5)
anonymous

#### 3. Console

n is : 5
n is : 4
n is : 3
n is : 2
Base case hit when n is : 1
Base case hit when n is : 0
Result is : 1
Base case hit when n is : 1
Result is : 2

#### 4. Call Stack

fact(4)
fact(5)
anonymous

- Now, it's time to run the second function <code>fact(n-2)</code>

#### 2. Call Stack

fact(2)
fact(4)
fact(5)
anonymous

#### 2. Console

n is : 5
n is : 4
n is : 3
n is : 2
Base case hit when n is : 1
Base case hit when n is : 0
Result is : 1
Base case hit when n is : 1
Result is : 2
n is : 2

<code>When the context value will change the function will re-run again from top to bottom. Previously the context value is 4. Now, the second function has changed the context value from 4 to 2. It means the printing statement will print the context value because it has been executed prevously when the context value is 2. Now the question is that why the printing statement will not print the context value when second function is executing.</code>

<code>The answer is simple, because before reching the printing statement the second function has been already returned a value and the context value will remain same on which the statement has been already executed.</code>

#### 1. Call Stack

fact(1)
fact(2)
fact(4)
fact(5)
anonymous

#### 1. Console

n is : 5
n is : 4
n is : 3
n is : 2
Base case hit when n is : 1
Base case hit when n is : 0
Result is : 1
Base case hit when n is : 1
Result is : 2
n is : 2
Base case hit when n is : 1

#### 2. Now, the Call Stack will look like

fact(2)
fact(4)
fact(5)
anonymous

- Base case hit, the first function <code>fact(n-1)</code> will return 1.

```js
let result = 1 + fact(n - 2);
```

- Now, its time to run the second function <code>fact(n-2)</code>

#### 0. Call Stack

fact(0)
fact(2)
fact(4)
fact(5)
anonymous

#### 0. Console

n is : 5
n is : 4
n is : 3
n is : 2
Base case hit when n is : 1
Base case hit when n is : 0
Result is : 1
Base case hit when n is : 1
Result is : 2
n is : 2
Base case hit when n is : 1
Base case hit when n is : 0

- Base case hit, the second function will return 0.

```js
let result = 1 + 0; // Result = 1
```

#### 2. Call Stack

fact(2)
fact(4)
fact(5)
anonymous

#### 2. Console

n is : 5
n is : 4
n is : 3
n is : 2
Base case hit when n is : 1
Base case hit when n is : 0
Result is : 1
Base case hit when n is : 1
Result is : 2
n is : 2
Base case hit when n is : 1
Base case hit when n is : 0
Result is : 1

#### 4. Call Stack

fact(4)
fact(5)
anonymous

#### 4. Console

n is : 5
n is : 4
n is : 3
n is : 2
Base case hit when n is : 1
Base case hit when n is : 0
Result is : 1
Base case hit when n is : 1
Result is : 2
n is : 2
Base case hit when n is : 1
Base case hit when n is : 0
Result is : 1
Result is : 3

#### 5. Call Stack

fact(5)
anonymous

<code>Above two call stack is unwinded because both are executed.</code>

- Its time to run the second function <code>fact(n-2)</code>

#### 3. Call Stack

fact(3)
fact(5)
anonymous

#### 3. Console

n is : 5
n is : 4
n is : 3
n is : 2
Base case hit when n is : 1
Base case hit when n is : 0
Result is : 1
Base case hit when n is : 1
Result is : 2
n is : 2
Base case hit when n is : 1
Base case hit when n is : 0
Result is : 1
Result is : 3
n is : 3

<code>Now, the second function has changed the context value. So, the whole function is going to re-run again.</code>

#### 2. Call Stack

fact(2)
fact(3)
fact(5)
anonymous

#### 2. Console

n is : 5
n is : 4
n is : 3
n is : 2
Base case hit when n is : 1
Base case hit when n is : 0
Result is : 1
Base case hit when n is : 1
Result is : 2
n is : 2
Base case hit when n is : 1
Base case hit when n is : 0
Result is : 1
Result is : 3
n is : 3
n is : 2

#### 1. Call Stack

fact(1)
fact(2)
fact(3)
fact(5)
anonymous

#### 1. Console

n is : 5
n is : 4
n is : 3
n is : 2
Base case hit when n is : 1
Base case hit when n is : 0
Result is : 1
Base case hit when n is : 1
Result is : 2
n is : 2
Base case hit when n is : 1
Base case hit when n is : 0
Result is : 1
Result is : 3
n is : 3
n is : 2
Base case hit when n is : 1

```js
let result = 1 + fact(n - 2);
```

#### 2. Call Stack

fact(2)
fact(3)
fact(5)
anonymous

- Now, its time to run the second function <code>fact(n-2)</code>

#### 0. Call Stack

fact(0)
fact(2)
fact(3)
fact(5)
anonymous

#### 0. Console

n is : 5
n is : 4
n is : 3
n is : 2
Base case hit when n is : 1
Base case hit when n is : 0
Result is : 1
Base case hit when n is : 1
Result is : 2
n is : 2
Base case hit when n is : 1
Base case hit when n is : 0
Result is : 1
Result is : 3
n is : 3
n is : 2
Base case hit when n is : 1
Base case hit when n is : 0

```js
let result = 1;
```

#### 2. Call Stack

fact(2)
fact(3)
fact(5)
anonymous

#### 2. Console

n is : 5
n is : 4
n is : 3
n is : 2
Base case hit when n is : 1
Base case hit when n is : 0
Result is : 1
Base case hit when n is : 1
Result is : 2
n is : 2
Base case hit when n is : 1
Base case hit when n is : 0
Result is : 1
Result is : 3
n is : 3
n is : 2
Base case hit when n is : 1
Base case hit when n is : 0
Result is : 3

#### 3. Call Stack

fact(3)
fact(5)
anonymous

- Its time to run the second function <code>fact(n-2)</code>

#### 1. Call Stack

fact(1)
fact(3)
fact(5)
anonymous

#### 1. Console

n is : 5
n is : 4
n is : 3
n is : 2
Base case hit when n is : 1
Base case hit when n is : 0
Result is : 1
Base case hit when n is : 1
Result is : 2
n is : 2
Base case hit when n is : 1
Base case hit when n is : 0
Result is : 1
Result is : 3
n is : 3
n is : 2
Base case hit when n is : 1
Base case hit when n is : 0
Result is : 1
Base case hit when n is : 1

```js
let result = 3;
```

#### 3. Console

n is : 5
n is : 4
n is : 3
n is : 2
Base case hit when n is : 1
Base case hit when n is : 0
Result is : 1
Base case hit when n is : 1
Result is : 2
n is : 2
Base case hit when n is : 1
Base case hit when n is : 0
Result is : 1
Result is : 3
n is : 3
n is : 2
Base case hit when n is : 1
Base case hit when n is : 0
Result is : 1
Base case hit when n is : 1
Result is : 2

#### 3. Call Stack

fact(3)
fact(5)
anonymous

#### 5. Call Stack

fact(5)
anonymous

#### 5. Console

n is : 5
n is : 4
n is : 3
n is : 2
Base case hit when n is : 1
Base case hit when n is : 0
Result is : 1
Base case hit when n is : 1
Result is : 2
n is : 2
Base case hit when n is : 1
Base case hit when n is : 0
Result is : 1
Result is : 3
n is : 3
n is : 2
Base case hit when n is : 1
Base case hit when n is : 0
Result is : 1
Base case hit when n is : 1
Result is : 2
Result is : 5

## In Short

assume, fact(5) = fib(5)

fact(5)

- fact(1) => return 1
- fact(2) = fact(1) + fact(0) = 1 + 0 => return 1
- fact(3) = fact(2) + fact(1) = 1 + 1 => return 2
- fact(4) = fact(3) + fact(2) = 2 + 1 => return 3
- fact(5) = fact(4) + fact(3) = 3 + 2 => return 5

- 5th Fibonacci number is =====> 5

# FINAL CALL

## Let’s break it down and go step by step to understand how the values get computed and passed up through the stack.

### Key Concept: Each Function Call Has Its Own Stack Frame

1. When a function is called, it creates a new stack frame in the call stack.
2. Each stack frame stores its own local variables, including function arguments and return values.
3. When a function completes (i.e., returns a value), its stack frame is popped from the stack, and control goes back to the function that called it, along with the returned value.

#### Example: fib(5)

- Let’s follow the recursion for fib(5) step by step:

  - fib(5) gets called:

    - It needs to compute fib(4) + fib(3), so it pauses and calls fib(4) first.

  - Call fib(4):

    - fib(4) needs to compute fib(3) + fib(2), so it pauses and calls fib(3) first.

  - Call fib(3):

    - fib(3) needs to compute fib(2) + fib(1), so it pauses and calls fib(2) first.

  - Call fib(2):

    - fib(2) needs to compute fib(1) + fib(0), so it pauses and calls fib(1) first.

  - Call fib(1):

    - fib(1) hits the base case, so it immediately returns 1 to fib(2).

  - Return to fib(2):

    - Now fib(2) calls fib(0) to complete its calculation.

  - Call fib(0):

    - fib(0) hits the base case, so it immediately returns 0 to fib(2).

  - Return to fib(2):

    - Now fib(2) has both values: fib(1) = 1 and fib(0) = 0.
    - It computes fib(2) = 1 + 0 = 1 and returns 1 to fib(3).

  - Return to fib(3):

    - Now fib(3) calls fib(1) to complete its calculation.

  - Call fib(1):

    - fib(1) hits the base case and returns 1 to fib(3).

  - Return to fib(3):

    - Now fib(3) has both values: fib(2) = 1 and fib(1) = 1.
    - It computes fib(3) = 1 + 1 = 2 and returns 2 to fib(4).

  - Return to fib(4):
    - Now fib(4) calls fib(2) to complete its calculation.

#### Here’s Where the Key Happens:

- When fib(4) calls fib(2), fib(2) follows the same recursive process, computes its value, and returns it. Even if fib(4) has already indirectly caused fib(2) to be called (through fib(3)), each call to fib(2) creates a new stack frame.
- Each individual call to fib(2) is independent and is calculated within its own stack frame.
- eturn to fib(4):

  - fib(4) eventually gets the value of fib(2), computes fib(4) = 2 + 1 = 3, and returns 3 to fib(5).

- Return to fib(5):
  - Finally, fib(5) calls fib(3) again, which follows the same recursive process, returns its value, and fib(5) can compute fib(5) = 3 + 2 = 5.

### How the Call Stack Passes Values Up:

1. Each time a function call completes (hits a base case or returns), the return value goes back to the caller function.
2. The caller function is the one that initially paused to make the recursive call. Once it receives the return value, it can continue with the next step of its computation.

So, in this case:

3. When fib(3) returns 2 to fib(4), the call to fib(4) resumes.
4. When fib(4) completes and returns 3 to fib(5), the call to fib(5) resumes.

The key is that each function has its own stack frame, which means that every time fib(n) calls fib(n-1) or fib(n-2), the function is paused, the new function is computed, and when the new function returns a value, the paused function resumes with the correct result.

### Visualization of Call Stack for fib(5):

```js
fib(5)
  -> fib(4)
      -> fib(3)
          -> fib(2)
              -> fib(1) -> returns 1
              -> fib(0) -> returns 0
          fib(2) -> returns 1
          -> fib(1) -> returns 1
      fib(3) -> returns 2
      -> fib(2)
          -> fib(1) -> returns 1
          -> fib(0) -> returns 0
      fib(2) -> returns 1
  fib(4) -> returns 3
  -> fib(3)
      -> fib(2)
          -> fib(1) -> returns 1
          -> fib(0) -> returns 0
      fib(2) -> returns 1
      -> fib(1) -> returns 1
  fib(3) -> returns 2
fib(5) -> returns 5 (Line-931 + Line-938)
```

The values bubble back up from the base cases (fib(1) and fib(0)), through the call stack, until fib(5) can be fully evaluated.

## Summary :: KEY TAKEAWAYS

1. Before each recursive function call is made, the expression for the function is conceptually expanded to reflect what it needs to calculate.

- When you call a recursive function like fib(5), it first expresses what it needs to calculate (i.e., fib(4) + fib(3)).
- It then makes recursive calls to compute those smaller values.
- Once all the smaller values are calculated (eventually reaching the base cases), the function returns back up the call stack, filling in the values at each level.

2. Each recursive call creates a new stack frame, and when a base case is reached, the result returns to the paused caller.
3. The call stack manages each independent frame and ensures that once a value is returned, the paused function can resume and complete its own calculation.
4. Even though fib(4) might call fib(3), it won't reuse the value from the previous fib(3)—each call is independent and computed freshly.

This process ensures that the correct values get passed back up through the call stack until the topmost call (fib(5)) gets its final result.

<code>Example :- Start with fib(5): </code>

- The function doesn't directly calculate fib(5). It first "expresses" itself as fib(4) + fib(3).
- It knows that before it can complete the calculation, it needs to compute fib(4) and fib(3).
- Similarly, fib(4) doesn't get calculated immediately. It first "expresses" itself as fib(3) + fib(2).
- Now, the program knows it needs to compute fib(3) and fib(2) to complete the calculation of fib(4).
- When the function calls fib(1), it directly returns 1 because fib(1) is a base case.

  - Similarly, fib(0) directly returns 0.

- Now that fib(2) knows the values of fib(1) and fib(0):

fib(2) computes fib(2) = 1 + 0 = 1, and returns this value to fib(3).
Then, fib(3) knows the value of fib(2):

It already has fib(1) (which is 1), so now it computes fib(3) = 1 + 1 = 2, and returns this value to fib(4).

- This process continues until the original call fib(5) can compute its final result.
