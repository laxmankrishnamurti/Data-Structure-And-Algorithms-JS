# Why in Javascript?

The answer is simple because it the only language that can be used to write the entire stack, including the front-end, mobile(native and hybrid) platforms, and back-end. As a Javascript developer it is crucial for me to understand how data structures work and how to design algorithms to build applications.

# Chapter - 01 (Time Complexity)

# What is Big-O Notation?

The Big-O Notation measures the worst-case complexity of an algorithm. In Big-O Notation, n represents the number of inputs. To be more precise, Big-O Notation is important because it tells us how efficient an algorithm is.

- O(n)

## What does it mean by "Worst-case complexity"?

It refers to the maximum amount of time or resources(such as memory) that an algorithm will require to complete its task.

## Common Big-O complexities.

- O(1) :: It does not change with respect to input sapce. Hence, O(1) is referred to as being constant time.

  Ex :- Accessing an array's element by it's indexing value.

- O(n)

  - "Worst-case scenario"
  - Linear time

- O(n^2)

  - Quadratic time

- O(n^3)
  - Cubic time

## What exaclty Time-complexity is?

Time complexity dosen't mean that how long an algoright takes time to accompolish a task but instead of this what time complexity is "How many numbers of operations that an algorithm requires to accompolish the task as input grows".

Hence, Time complexity is directly perposnal to the number of operations.

If number of operations reduces as input grows then we can say that the algorithm is best in that case. OR number of operations increases not to much as relative to the number of inputs grow.

# Chapter - 02 (JavaScript unique parts)

## What does it mean by scope?

The scope is what defines the access to Javascript variables. "To be more precise scope simply states that the place where a JavaScript variable is accessable" OR "The place where we can access a variable that place of called the scope of that varibale."

## Variable declaration using "var" keyword.

var is one keyword that is used to declare a variable. But this type of variable declaration is being different from the variable that is declared by using "let" and "const". Because it is a type of global variable that can float everywhere.

let say we declare a function at the top of the script and after that we delcare a variale using var keyword at the bottom of the script; now you might be thinking that we cannot access the varibale before it's declaration but you are wrong. Because i told you earlier that this type of variable declaration works slightly different. Even though we can reassign it's variable value in the function as well.

This is something known as "Variable Hoisting".

```javascript
function hello() {
  username = "Laxman";
  console.log("Hello ", username);
}

hello();

var username;

//Output :- Hello Laxman
```

If we do the same thing by declaraing "let" or "const" we got an refference error. The most important point that we should keep in our mind is because of the "username" varibale(declare via var-keyword) is floating to the top so that's why we would able to initialized it's value.

## What is function scope?

Function scope referes to the context within a function where variable are accessible. What does it mean? let's understand...

If we declare a variable inside a function is only accessable within that function and will not accessable outside of the function, called "Function scope".

```javascript
function functionScope() {
  let username1 = "Laxman";
  var username2 = "Harshad";

  console.log("username1 is : ", username1);
}

functionScope();
console.log("username2 is : ", username2); //error :- ReferenceError: username2 is not defined
```

In function scope, it dosen't matter that what's the keyword we are using to declare a variable, will not be accessable outside from the function scope.

It is same a inner functions, like that :-

```javascript
function outerFunction() {
  var outerVariable = "Outer";

  function innerFunction() {
    var innerVariable = "Inner";
    console.log("Outer variable is : ", outerVariable); //Output :- Outer
    console.log("Inner variable is : ", innerVariable); //Inner  :- Inner
  }

  innerFunction();

  console.log("Outer variable is : ", outerVariable); //Output :- Outer
  console.log("Inner variable is : ", innerVariable); //Inner :- Reference Error
}

outerFunction();

console.log("Outer variable is : ", outerVariable); //Output :- ReferenceError
console.log("Inner variable is : ", innerVariable); //Output :- ReferenceError
```

Hence,
If we declared a variable inside a function and we are using that variable in any expression; first of javascript interpreter(or compiler) will check whether the variable is present or not in that scope. If it will not present in the scope it will throw an reference error.

Note :- Every function has it's own scope called "function scope". If we used any variable value in a function, it needs to that variable to accompolist the task so it starts finding the used variable in it's scope. If it will get the variable then we no need to worry about; but if not. it will starts finding the variable into the global scope. At the end to the process if it will not get any such kind of variable in the both function scope and global scope it will throw an referenceError and says that such kind of variable dosen't exist or not declared.

## Variable declaration with "let" keyword.

Any variables declared in this way are in the closest block scope. What does it mean by Block scope? let's understand.....

Block scope refers to this :- {}; Yes, The code that we write inside the curly praces/parentheses are in block scope. To be more precise the enviroment inside the {} is knwon as block scope.

"let" keyword dosen't give the freedom as "var" keyword. we can initialize a variable value which is declared with the var keyword before it's declaration. But "let" keyword don't allow us to do that, if we try to do such silly thing it will give an referenceError.

Scope property will same for that kind of variables.

## Primitive data-types in JavaScript.

There are seven primitive data types in JavaScript. They are :- boolean, number, string, undefined, object, function, symbol

- About undefined :: undefined is a primitive value that is assigned to a variable that has just been declared.

Note :-

- In JavaScript, Array is also a type of Object. And Null has type of "object".

```javascript
var username = null;
console.log(typeof username); //output :- object
```

- Function is also a type of object but when we check it's type it will show function.

```javascript
function hello() {
  console.lig("Hello world!!!");
}

console.log(typeof hello);

//Output :- function
```

## Truthy / Falsey check

This is called boolean type values. It can be either "true" or "false". It is mostly used in if() statement block to do some operations based on certain conditions. In many Programming languages, the parameter inside if() statement must be a boolean type. However, Javascipt(and other dynamically typed language) is more flexible with this. They consider trutly and falsey values in this way :-

- False
  false
  0
  Empty string (both '' and "")
  NaN (Not a number)
  undefined
  null

- True
  true
  Any number other than 0
  Non-empty string
  Non-empty object

# Chapter - 03 (Numbers)

## What is prime factorization?

I know at this point of stage this question dosen't make sense too much but just for understanding lets know about prime factorization.

Prime factorization is the process of breaking down a number into its smallest prime factors. And believe me guys this is not as much easy as you think. And this is more than of it's own defination.

ex:- 18 :: 18 / 2 = 9; 9 / 3 = 3; 3 / 3 = 1
Hence,
Prime factorization of 18 is :- 2 _ 3 _ 3. which can also represent in this form :- 2 \* 3^2

- Application

  - Cryptography (Fundamental for encryption)
  - Simplifying fractions
  - Finding LCM & GCD | HCF
  - Solving Diophantine Equations

    - Ex :- Finding solution for this equation : 12x + 15y = 1

  - Understanding number properties
  - Efficient computation

## How Floating-point numbers works internally

```javascript
//Before going into it's detail, let's analize the result of the code

function isEqual(x, y) {
  return x === y;
}

// console.log(isEqual((0.1 + 0.2), 0.3))  //Output :- false
// console.log(isEqual(0.3, 0.3))          //Output :- true

//You might be woundering that with the same arguments how does it possible to get two different answers? Let's understand it..........

/**
 * Actually it starts from how computer processor understand floating-point numbers. Because storing an integer value into it's memory is going to be easy as respect to storing a floating-point numbers. Why? -----------> let's understand this
 *
 * Integer to Binary :- Storing an integer value into computer's memory is easy because each bit of integer has a significant value means it can be only 0 or 1 with a fixed value. But it not goes same as floating-point numbers. Because we already know that a floating-point number may have infinite numbers so it needs to be rounded so that computer can store the floating number.
 *
 * Because, computer has limited numbers of bits into it's memory such as either it can be 32-bit or 64-bit. Hence,
 *              Computer can only store the value that has limited fixed numbers and that can easily converted into binary format. And one of the biggest challenge with the floating-point number is, it is difficult to convert a floating-point number into binary format. It takes to much steps or process to convert a floating-point number into binary format. So, it becomes more complicated for computer processor to sotre a floating-point numbers. And because of this reason it is harder to compare floating-point number and do some methematical computation, because it can produce tiny errors.
 *
 * Hence,
 *        Keeping all these problems in the mind computer scientist creates a standard way to handle floating-points number in computing which is known as "IEEE-754"
 */

//First of all let's learn how to convert a floating-point into binary format. For example let's convert 120.254 into binary format.

//Step-00 :: Let's brakdown the number into "Integer" and "Fraction format". Here 120 is the Interger value and the 0.254 is the Fraction value.

//Step-01 :: First of all convert the integer value into binary format and then convert the Fraction value into binary format.
/**
 * (120)base 2 = (111000)
 * (0.254)base 2 = (01000001....)   Approx. value
 */

//Step-03 :: Combine both binary representation, which looks like:- 111000.01000001
//Step-04 :: Starts applying standardization method of IEEE-754
//Step-01 :: Normalize the binary representation in the from :-
//(1.m * 2^e-127)   For Single-floating precision   (32-bit)
//(1.m * 2^e-1023)  For double-floating precision   (64-bit)
//here, m = Mantissa   : e = Exponent
//The Normalize value is :- 1.1100001000001 * 2^-5 (because redix point shifted by 5)
//Mantissa value is :- 1100001000001

//Step-02 :: Evaluate all the values
//Mantissa = 1100001000001
//Exponent :: (e - 127) = -5;    e = -5 + 127;    e = 122
//Convert the exponent into binary representation :: 1111010

//Step-03 :: Put all these values into their own place or in it's format
//IEEE-754 FORMAT
// (32-bit) Sign-bit(1 bit space)    ::  Exponent(8-bit space)   :: Mantissa(23-bit space)

//The binary form of the number in single floating-precision is ::
//  SIGN        EXPONENT        MANTISSA
//   0         11110100     11000010000010000000000
//Final Binary representation looks like this :- 01111010011000010000010000000000

//Step-04 :: To convert this into double floating precision we need to just compair the exponent value with this := e - 1023 = Actual exponent vlaue

//On the line-number-31 we consider the approximate binary value of the decimal/fraction. It could be anuthing as per our need. This binary value can be different when conputer convert this into more precizable format. It means computer is going to take more bits for accurate computation that can be different from our values.

// As of now we understand that how computer treats a floating-point number. So, let's disscuss about our previous problem and try to understand that why this is happening.

function checkEqual(a, b) {
  return a === b;
}

console.log(checkEqual(0.3, 0.3)); //Output : true

//Note :- We got "true" because the value is same so it's precision value is also be the same. Because the precision value for the second argument should be the same as first argument because both values are same.

console.log(checkEqual(0.1 + 0.2, 0.3)); //Output : false

//Note :- We got "false". Let's understand why this is happening.......

//Because, Every floating-point number may have different-different values because of it's precision. For example:- For every time if we put 0.1 as a single argument the processor treates as the same value. But if we want to get 0.1 by adding these two numbers :- 0.05 + 0.05 :: Then it will not going to happen becaue of the Precision of the fraction value.

//Hence, the value we are trying to achieve which is 0.3 by adding these two numbers such as (0.1 + 0.2) will not be the same becasue 0.1 has different precision value and 0.2 has different precision value.

/**
 * Let's understand in a easy way
 *
 * Understand how the processor will store the number
 * 0.1 = 0.000110010011......
 * 0.2 = 0.001100110011......
 * 0.3 = 0.010011001100......
 *
 * console.log(0.1 + 0.2)          //Output :- 0.30000000000000004
 * sum of 0.1 and 0.2 is :- 0.01001100110011001100111...
 * but the actual value of 0.3 is :- 0.01001100110011001100110011001100
 *
 * which is not same as we got while adding the two argumants. hence, the result will be false.
 */

//You might be woundering that does 0.3 as absolute value and the 0.3 which is sum of two values will never be the same?        -

//No, it's not like that. To avoid this small correction we have EPSILON_VALUE. Let's have a look :-

console.log(0.1 + 0.2); //Output :- 0.30000000000000004

function isEqualCheck(a, b) {
  return Math.abs(a - b) < Number.EPSILON;
}

console.log(isEqualCheck(0.1 + 0.2, 0.3)); //Output :- true (as we want)

/**
 * What is Number.EPSILON and what it does?
 *
 * Number.EPSILON returns the smallest interval between two representable numbers. This is useful for the problem with floating-point approximation as we face the problem previously.
 *
 * Number.EPSILON is used in floating-point arithmetic to determine whether the difference between two numbers is small enough to be considered negligible.
 */

console.log(0.1 + 0.2); //Output : 0.30000000000000004
console.log(0.3); //Output : 0.3

console.log(0.1 + 0.2 - 0.3); //Output :- 5.551115123125783e-17

let diff = 5.551115123125783e-17;
console.log(diff < Number.EPSILON); //Output :- true

//Note :- It means the difference between sum of 0.1 & 0.2 and 0.3 is smaller than the value of "Number.EPSILON" so that's why it can be negligible. Hence, Both value should be equal.

console.log(Math.abs(0.1 + 0.2 - 0.3)); //Output :- 5.551115123125783e-17
//Note :- Math.abs(arguments) calculate the absolute value.
```

# Chapter - 04 (Strings)

## what is String?

String is a collection of characters. In JavaScript, String is an type of Object. JavaScript's native String primitive comes with various common string functioon.

//JavaScript native string declaration

```javascript
let username = "Laxman Krishnamurti";
```

string function like :- <code>.charAt(index)</code>, <code>.substring(initial index, final index)</code>....etc

## String Comparison

Most programming language have a function that allows us to compare strings. In JavaScript, this can be done simply by using
less-than(<) and grater-than(>) operators.

- If we are comparing two strings of different lengths, it starts comparing from the start of the string untill the length of
  the smaller string.

## String Search

First of all we have to think that what we are looking for in a particular stinrg. Do we want to serch a string within a string
or just a character or letter within a string?

With that we have two pre-built in function that does that particular task.

- Let say we have to find a particular string within a string. In that case we can use the <code>.indexOf(parameter)</code>.

  - The prameter should be a string and keep in mind that the function is a case-sensitive.
  - This function will return the position of the input string within the string and if nothing is found, then (-1) is returned.

- Let say we want to search the string after a certain index value then we can pass in optional parameter in the same function.

  - <code>.indexOf(parameter-1, index)</code>

- If we want to check whether a string starts from a particular string or not or end with a particular string or not, In this
  situation we use <code>.startWith(paramerter)</code> & <code>.endsWith(parameter)</code> - Both function is also a case-sensitive function

## String Decomposition

Decomposition -> Dividing an string into multiple chunks in the form of an array. We use <code>.split(seperator)</code> functon to split a string and convert it into an array format.

```javascript
let username = "Laxman";
console.log(username.split(""));

//output : ["L", "a", "x", "m", "a", "n"]
```

## String replacement

The <code>.replace(string, replaceString)</code> function helps us to replace a specified string within a string variable with another string.

## What is Regular Expressions?

Regular expressions(regexes) are a set of characters that define a search pattern. Regexes are immensely helpful for checking the validity of user input in javascript. Learning how to use regexes is a massive task of its own, but as a javascript developer, it is important us to know the basics of regexes.

- 1. RegExp has the following two functions.

  - search() :: Tests for matches in a string. This returns the index of the match. To be more precise it finds the first substring match in a regular expression search.
  - match() :: Tests for matches. This return all the matches.

- 2. The JavaScript string object also has the following two regex-related functions that accept the RegExp object as on argument.

  - exec() :: Tests for matches in a string. This returns the first match.
  - test() :: Tests for matches in a string. This returns boolean value.

- 3. Basic Regex rule ::

  - /regexe/ :: write the Regexes between the forward slash.

  - ^ :: Indicate the start of a string/line.

  - \d :: Finds any digit

  - [ abc ] :: Finds any character between the brackets

  - [^abd] :: Finds any character not between the brackets

  - [0-9] :: Finds any digit between the brackets

  - [^0-9] :: Finds any digit not between the brackets

  - [x|y] :: Finds any of the alternatives specified

```javascript
var str = "JavaScript DataStructures";
var n = str.search(/DataStructures/);
console.log(n);

//output : 11 (Index of the character D, which is the first character of the matched regex)
```

## Commonly Used Regexes

- 1. Any Numeric Characters

```javascript
var reg = /\d+/;
```

- 2. Only Numeric Characters

```javascript
var reg = /^\d+$/;
```

- 3. Floating Numeric Characters

```javascript
var reg = /^[0-9]*\.[0-9]*[0-9]+$/;
```

- 4. Only Alphanumeric Characters

```javascript
var reg = /[a-zA-Z0-9]/;
```
