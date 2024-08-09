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
