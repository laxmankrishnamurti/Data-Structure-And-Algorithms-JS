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

<code>There are lots of methods, provided by JavaScript, which is associated with these data types</code>

```javascript
//Numbers
let price = 100;
const age = 21;

//String
let username = "Laxman Krishnamurti";

//Booleans
let isLoggedIn = true;

//Object
const user = {
  name: "Laxman Krishnamurti",
  age: 21,
  email: "laxmankrishnamurti@gmail.com",
};

//Array
const marks = [91, 98, 85, 75, 89];

//Date Object
const date = new Date();

//undefined ===> Variable is declared but value is not defined.
//null ===> Variable is defined but value is still empty.
```

<code>JavaScript variable can hold any type of data. Hence, we can say that javascript types are dynamic</code>

```js
let x; //undefined
x = ""; //Value is "" and the type is undefined
x = 21; //number
x = "Laxman Krishnamurti"; //string
x = true; //boolean
x = ""; //Output :- boolean ===> false
x = " "; //Output :- boolean ==> true
x = {
  //Object
  name: "Laxman Krishnamurti",
  age: 21,
};
x = () => {
  //function
  console.log("Hii there! what's up!");
};
```

- <code>When adding a number and a string, JavaScript will treat the number as string.</code>

```js
let val = 21 + "laxman"; //Output :- 21laxman
let val = "laxman" + 21; //Output :- laxman21
```

- <code>JavaScript evaluates expressions from left to right. Different sequences can produce different results:</code>

```js
console.log(10 + 20 + 30 + "laxman" + 21 + 10); // Output : 60laxman2110
console.log("laxman" + 21 + 10); // Output : laxman2110
```

The right part from the string will treated as a string not a number. Hence, it will concatinate like a string.

If the operand is a string then after that all values are treated as a string.

1. String

- Collection of characters
- With double or single quotes.
- We can use quotes inside a string, as long as they don't match the quotes surrounding the string:

```js
console.log("It's a must!") ===> Correct
console.log('It's a must!') ===> inCorrect
```

2. Number

All javascript numbers are stored as decimal numbers(floating point). Numbers can be written with, or without decimals.

```js
let age = 21;
let age = 21.0;
```

3. Exponential Notation

Extra large or extra small numbers can be written with scientific (exponential) notatio.

```js
let num = 21e1; //Output : 210
let num = 21e10; //Output : 210000000000
let num = 21e-10; //Output : 21/10000000000 ===> 2.1e-9 (2.1 * 10^-9) or (2.1e-9)
```

<pre>
  Note
  Most programming languages have many number types:

  Whole numbers (integers):
  byte (8-bit), short (16-bit), int (32-bit), long (64-bit)

  Real numbers (floating-point):
  float (32-bit), double (64-bit).

  Javascript numbers are always one type:
  double (64-bit floating point).

</pre>

4. JavaScript BigInt

All JavaScript numbers are stored in 64-bit floating-point format. JavaScript BigInt is a new datatype (ES2020) that can be used to store integer values that are too big to be represented by a normal JavaScript Number.

```js
let x = BigInt("123456789012345678901234567890");
console.log("x is", x); //Output : x is 123456789012345678901234567890n
```

<code>We can use the JavaScript _typeof_ operator to find the type of a JavaScript variable.</code>

```js
let x = BigInt("123456789012345678901234567890");
console.log(typeof x); //Output : bigint
```

## If-else statement :: Conditional logic

```js
//Simple if-else statement
if(){
  //do this
}else {
  //do this
}

// Complex nesting
if(x){
  if(){
    if(){

    }else {

    }
  }else if(){

  }else{

  }
}else if(){
  if(){

  }else {

  }
}else {

}
```

## Switch Statement

- Works same as if-else statement but porvides a better way to write conditional logics.
- Switch cases use strict comparison (===). It means a case will only true if both type and values are same.

```js
switch (new Date().getDay()) {
  case 0:
    console.log("Sunday");
    break;
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;

  default:
    console.log("invalid input!");
}
```

If _default_ is not the last case in the switch block, remember to end the default case with a break.

```js
switch (new Date().getDay()) {
  default:
    console.log("invalid input!");
    break;
  case 5:
    console.log("Friday");
  case 6:
    console.log("Saturday");
}
```

<code>Multiple case can use the same code block</code>

```js
let age = 20;
switch (age) {
  case 10:
  case 12:
  case 17:
    console.log("You are not eligible");
    break;
  case 18:
  case 20:
    console.log("You are eligible");
    break;
  default:
    console.log("Invalid input!");
}
```

#### Switching details

- If multiple cases matches a case value, the first case is selected.
- If no matching cases are found, the program continues to the default label.
- If no default label is found, the program continues to the statement(s) after the switch.

## Arrays

- Arrays are just like a vairble but rather than storing a single value it can store multiple values.
- It uses indexing to find the value in his bucket which has O(1).
- Indexing starts from 0.
- There are lots of methods, provided by JavaScript, are associated with an Array Object.

```js
let users = ["Laxman", "Anjali", "Fruti", "Vikram"];
console.log(users[2]); //Output : Fruti

users.push("Kawya Krishnamurti"); //adds the element to the last position
users.pop("Kawya Krishnamurti"); //remove and return the last element
users.find((ele, inde) => {
  return ele;
}); //Advance methods
```

## How do we know how many methods are there which is associated with the data - types?

Using _prototype_ properties.

```js
console.log(Object.getOwnPropertyNames(String.prototype));

//Output ===>
(52)[
  ("length",
  "constructor",
  "anchor",
  "at",
  "big",
  "blink",
  "bold",
  "charAt",
  "charCodeAt",
  "codePointAt",
  "concat",
  "endsWith",
  "fontcolor",
  "fontsize",
  "fixed",
  "includes",
  "indexOf",
  "isWellFormed",
  "italics",
  "lastIndexOf",
  "link",
  "localeCompare",
  "match",
  "matchAll",
  "normalize",
  "padEnd",
  "padStart",
  "repeat",
  "replace",
  "replaceAll",
  "search",
  "slice",
  "small",
  "split",
  "strike",
  "sub",
  "substr",
  "substring",
  "sup",
  "startsWith",
  "toString",
  "toWellFormed",
  "trim",
  "trimStart",
  "trimLeft",
  "trimEnd",
  "trimRight",
  "toLocaleLowerCase",
  "toLocaleUpperCase",
  "toLowerCase",
  "toUpperCase",
  "valueOf")
];
```

There are over 52 methods are there which is associated with the string.

```js
console.log(Object.getOwnPropertyNames(Number.prototype));

//Output ===>
(7)[
  ("constructor",
  "toExponential",
  "toFixed",
  "toPrecision",
  "toString",
  "valueOf",
  "toLocaleString")
];
```

```js
console.log(Object.getOwnPropertyNames(Array.prototype));

//Output
(40)[
  ("length",
  "constructor",
  "at",
  "concat",
  "copyWithin",
  "fill",
  "find",
  "findIndex",
  "findLast",
  "findLastIndex",
  "lastIndexOf",
  "pop",
  "push",
  "reverse",
  "shift",
  "unshift",
  "slice",
  "sort",
  "splice",
  "includes",
  "indexOf",
  "join",
  "keys",
  "entries",
  "values",
  "forEach",
  "filter",
  "flat",
  "flatMap",
  "map",
  "every",
  "some",
  "reduce",
  "reduceRight",
  "toReversed",
  "toSorted",
  "toSpliced",
  "with",
  "toLocaleString",
  "toString")
];
```

# Understanding the nature of JavaScript.

JavaScript is typically a prototype based language. For understanding, we can call it as an Object-Oriented-Programming language.

Prototype ===> An object has access of some other objects' property and methods, the referenced object is called as the prototype of the object which is referencing to the object.

```js
function Admin() {
  cons;
}
```