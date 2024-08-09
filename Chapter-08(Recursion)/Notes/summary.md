# Chapter - 08 (Recursion)

## What is Recursion?

Generally, "recursion" refers to the occurences of a thing defined in the terms of itself. In Computer science, a recursive function is a function that calls itself. Recursive functions are often elegant and solve complex problems through the "divide-and-conquer" method. Recursion is very important becasue we are going to see it again and again in the implementation of various data structures.

While applying recursion keep this in mind that, Infinite recursive calls result in "stack overflow". "Stack overflow" is when the maximum number of call stacks of the program exceeds the limited amount of address space (RAM :: The primary memory).

## Rules of Recursion.

- Base Case :: In Recursion, there must be a base case (also referred to as terminating case). Becasue recursive methods call themselves, they will never stop unless this base case is reached. Stack overflow from recursion is most likely the result of not having a proper base case.
