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

# In Short

assume, fact(5) = fib(5)

fact(5)

- fact(1) => return 1
- fact(2) = fact(1) + fact(0) = 1 + 0 => return 1
- fact(3) = fact(2) + fact(1) = 1 + 1 => return 2
- fact(4) = fact(3) + fact(2) = 2 + 1 => return 3
- fact(5) = fact(4) + fact(3) = 3 + 2 => return 5

- 5th Fibonacci number is =====> 5
