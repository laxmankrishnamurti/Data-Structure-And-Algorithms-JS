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
