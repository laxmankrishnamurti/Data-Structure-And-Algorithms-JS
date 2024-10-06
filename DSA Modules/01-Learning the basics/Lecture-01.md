# Basic Input/Output

## Input

In JavaScript to input a value we use _promt()_ method.

```javascript
let userInput = promt("What is your name?");
if (userInput) {
  console.log("username is", userInput);
}
```

Before rendering the DOM on the webpage browser will ask to the user to input their name.

## Output

To display value on the console/terminal(in node.js) we use _console.log()_. Typically, it is mostly used for debugging purpose(Regular logging).

- console ===> Object, provided by javascript (We can think of it like a class)
- log() ===> This is a method of the object

There several methods in console object for example :-

- console.error(message) ===> To display errors on the console.
- console.warn(message) ===> To diaply warnings on the console.
- console.info(value) ===> It's a way to differentiate between regular logging (console.log) and messages that are meant to convey general information or updates.

```javascript
console.log("This is a regular log message"); ===> Align with terminal color
console.info("This is an informational message"); ===> No color (But some browser marked with blue color)
console.warn("This is a warning message"); ===> Marked with yellow color
console.error("This is an error message"); ===> Marked with red color
```

# Data Types

Before storing values int the memroy computer must know the type of data so that it can distribute the required spaces to the value in its' memory.

But because of the dynamic nature of javascript helps programmer to do not worry about the data types too much as compare to strictly typed language such as C, C++, Java, ...etc. It dosen't mean there is no data types are in javascript. It also has several data types but before moving further let's understand what is dynamic and static language?

## Dynamic vs Strictly typed language

Let's make it simple...

1. Dynamic Programming Language

   - Code will not give any kind of type errors if there is no syntax error while compile time.
     - In Dynamically typed language we only see errors if there is any syntax issue that interpreter can intercept.
   - It will throw errors if there is any kind of _type errors_ during it's runtime.
   - Dynamically programming language does not care about the data types too much, interpreter can interpret the type of the data.

2. Statically Typed Programming Language
   - These programming languages's compiler are very strictly check the type of data.
   - It will throw errors during compile time not runtime because for such kind of programming languages type matters a lot.

## Data types in JavaScript.

JavaScript has 8 data-types. They are:

1. String
2. Number
3. Bigint
4. Boolean
5. Undefined
6. Null
7. Symbol
8. Object

<code>Note ===> The object data type can contain both **Built-in objects**, and **user defined objects**</code>

Built-in object type can be:

- objects
- arrays
- dates
- maps
- sets
- intarrays
- floatarrays
- promises
  and more......
