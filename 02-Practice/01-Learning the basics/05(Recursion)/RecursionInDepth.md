# Using Recursion seems like we can also solve the problem using simple loops?

Yes, But recursion is more than that. Loops are generally more efficient for flat, iterative tasks but if we try to solve a nested problem or tree like structure problem then it start becoming complex and need to manage extra states and their time complexity could also higher.

So, that's why in such scenario recursion works very efficiently. Recursion follows a principle, is _divide and conquer_. It breaks a problem into small subproblems, solve it and then combine results.

Recursion can be used to solve problems such as :-

- Hierarchical nature

  - Binary trees
  - Graphs

  Because each recursive call naturally decends through each level of the hierarchy.

- Divide-and-Conquer

  - Quicksort
  - Mergesort

  Algorithms that split a problem into smaller subproblems, solve them, and then combine results often rely on recursion for clarity and simplicity.

- Backtracking

  - N-Queens
  - Maza solving
  - Sudoku

  Recursion is particularly effective for backtracking problems, where we need to explore multiple paths and _backtrack_ if the path is incorrect.

- Functional programming apprach (Immutable States)

  In functional programming, immutable state mens we do not modify the original state directly. Instead, we create a shallow copy with updated values, preserving the original state for tracking or history purposes.

  This align with functional programming principles by avoiding side effects and ensuring state immutability.

# When we should avoid recursion?

Think about the scenario how many call stack is going to be used if i use recursion to solve the problem. This could help to determine whether we should use recursion or not.

If call stack depth is below the 10,000 frames, then it is fine but if it goes beyond the level try to avoid using recursion. Because it caln lead the _stack overflow error_ and could throw run time error.

# When do we call a function is executed?

There are only two conditions by which we can say the function executed successfully such as

1. Either function returns something.
2. The last line of the fucntion is executed.

In both scenario we can call a function is successfully executed.

# Let's deep dive into it.

- Recursion

  A function is calling itself again-&-again until it will not reach to the base level.

  - From where a function starts calling itself, below line will not be executed until the function will not reach to it's base condition.

  - Actually below (from where the recusion started) line will be executed in inverse direction. when the base case is reached below line starts executing with updated lexical values.

  - A recursive function will loaded in the call stack

    - What it does?
      - Stores the parameter value(parameteric values)
      - Stores the local variable of the function
      - Store the return address so the program know where to return control after the function completes. It is like the place, or the address from where the function is called so that program can resume from that point where it had stopped.

  - Recursive program is like a dynamic functions which looks like a single function but behaves differently in the call stack. When we run a recursive program it will split into multiple program with updated parameters which has it's own lexical scope(context).

  - Values that a recursive function stores called _lexical values_.

  - At the end, if recursive function starts evaluated it's calculated value will be stored in the memoization area so that if there is any need of a pre-calculated expressions it can directly inherit the value from the memoization storage.

## There are two different thing which we should keep in our mind.

1. Do something before function reach to the base case, like this

```js
function printStr(n) {
  if (n === 0) {
    return;
  }

  console.log("Function is still trying to reach the base base");
  printStr(n - 1);
}
```

In this recursion we don't care about whether the function is successfully reached to the base case or not. We are just ensuring that just do this and then move ahead. I don't case whether you have reached to the base case or not. yes, this is right. but we should not do this! because the program will thown an _stack overflow error message._

2. First hit the base case and then do something.

```js
function printAcc(n) {
  if (n === 0) {
    return;
  }

  printAcc(n - 1);
  console.log(n);
}
```

**Let's see how the function will look like under the hood?**

let n = 3

```js
// 1st call stack

function printAcc(3){
  if(n === 0){
    return;
  }
  printAcc(3-1);
  console.log(n)
}

// 2nd call stack

function printAcc(2){
  if(n === 0){
    return;
  }
  printAcc(2-1);
  console.log(n)
}

// 3rd call stack

function printAcc(1){
  if(n === 0){
    return;
  }
  printAcc(1-1);
  console.log(n)
}

// 4th call stack

function printAcc(0){
  if(n === 0){
    return;
  }

  //Below code will not going to execute becase the function will terminated from the if block.
  printAcc(0-1);
  console.log(n);
}
```

```bash
# Output

1
2
3
```

#### **This is all about Recursion**
