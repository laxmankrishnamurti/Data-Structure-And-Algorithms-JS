# Why in Javascript?

The answer is simple because it the only language that can be used to write the entire stack, including the front-end, mobile(native and hybrid) platforms, and back-end. As a Javascript developer it is crucial for me to understand how data structures work and how to design algorithms to build roboust and extendable system.

# Chapter - 01 (Time Complexity)

# What is Big-O Notation?

The Big-O Notation measures the worst-case complexity of an algorithm. In Big-O Notation, n represents the number of inputs. To be more precise, Big-O Notation is important because it tells us how efficient an algorithm is.

- O(n)

## What does it mean by "Worst-case complexity"?

It refers to the maximum amount of time (number of operations -> Internally it referes to CPU cycles) or resources(such as memory) that an algorithm will require to complete its task.

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

## What is Encryption?

Encryption is extremely important when protecting people's information online. While browsing on internet we have the message, like :- <b>Your connection to this site is not secure</b>

This likely means the website that we are trying to access does not have the proper <code>Secure Socket Layer(SSL)</code> which is knwon as SSL certificate.

As of now we understand that why Encryption is important. So, let's try to encrypt user's data online.

We know that HTTP connection follows the Client-server Architecture. It states that client sends a request to the server and server receives that request and validate and then respond back. This is how it works. There is only two entity that is envolved in the system. But this about the scenario where a middle man comes up and try to read the server's response. Let say user is trying to login into their bank account so he enter all credentials like :- bank account number, account password, account pin, card details, secret pin...etc.

Once user enter all details and hit submit button then the data will moved to the server, but before reching to the server a middle man stolen the data and keep it's a copy. So, now the middle man has all details about the user's bank account so he can easily withdraw money from the user account and user will get a debit message. Haaaaaa...........

To prevent that we use Encryption. Let's disscuss what are the way that is possible to encrypt data not only encryption but we have to prevent the data from the middle man(Man in the middle attack).

- Way :: 01 (Symmetric Encryption)

we can have a public key to encrypt and decrypt data. Server sends a public key to the client and client encrypt the user data with the help of the server's public key and sent it back to the server. And server can decrypt the data with the same public key. This type of encryption is called <b>Symmetric Encryption</>, because there is a single key.

Problem :: When server is sending the public key the middle man can also get the public key and save a copy of the public key and again when client encrypt the message, the message can be stolen by the middle man(Hacker) and will decrypt the data using the public key that he stolen.

let's try to do something for encryption and decryption

- Way :: 02 (Asymmetric Encryption)

In this type of encryption we have two keys Public key and Private key. Public key is used for encryption and Private key is used for Decryption. Let's deep dive into it.

Server sends the public key to the client and client generates a session key using the public key and encrypt the data and after that client sends the encrypted data to the server. When the encrypted data reached to the server, it will decrypt the data using the private key and sends a response back to the client.

Problem :: When server is sending the public key to the client hacker may copy it. And can send a public key that is generated by the hacker and client did the same and send the encrypted data to the server, and here hacker will attack(acts as a Proxy) and get a copy the encrypted data and because the data is encrypted by the client using hacker's public key hacker can decrypt the data with their own private key.

- Way :: 03 (SSL Certification)

In this way the process will be the same as Asymmetric Encryption but the difference is we will get help from a SSL Certificate provider and we will generate a digital signature for our website. Let's deep dive into it.

Server has Public and Private key, Client has the server's public key. Hacker may have the server's public key. I hope this is clear. Let's more further.

Server will ask a SSL Certificate to the certificate provider. The provider will take our server's public key and it has also Public key and a Private key. So, the provider will generate a signature using our server's public key and it's own public key and send it back to the server.

Now, server will send server's public key and the signature that is created by the SSL certificate service provider to the client. And now client have the server public key, so it will authenticate the public key before encrypting the data. It will simply send the public key and the signature that is sent by the sever, to the SSL certificate service provider and the provider will agian generate a signature and math the received signature, if both are same then encryption is going to happen by the client otherwise it will throw an error.

Advantage :- Let say somehow hacker get the server public key and send to the client that is not equal to the server public key. So, whenever the signature is generated it will not match because the public key is not as same as server public key.

This is how we can Encrypt the user data.

<code>The most commonly used public-key encryption algorithm is the RSA Algorithm.</code>

# Chapter - 05 (JavaScript Array)

- Array :: Arrays are one of the most fundamental data structures. It is also like a variable but the special thing is that it can store multiple values within a single variable. Their data-type may vary.

For any data structure, developers are interested in time and space complexity associated with the four fundamental operation: Access, Insertion, Deletion, and Search.

- Time complexity of <code>.push()</code>, <code>.pop()</code>, <code>.unshift()</code> ....etc is O(n) in theory. But it should be noted that practically, this totaly depends on the JavaScript engine that runs the code. This applies to all natively supported
  javascript object.

- Unlike Java and c++, JavaScript does not have multidimensional arrya. Instead of this, there are jagged arrays.

- What are jagged array?
-
- A jagged array is an array whose elements are an array itself.
-
- Ex :- let numbers = [[1,2,3], [2,2,4], [6,7,2]]
- The element of jagged array can be of different dimensions and sizes.

// And doing practice on arrays, jagged array.

# Chapter - 06 (JavaScript Oject)

## What is Prototype?

Each object in JavaScript has a hidden property called **proto** that points to another object, called its prototype.

```javascript
const user1 = {
  username: "Laxman krishnamurti",
  age: 21,
  accountBalance: 4000,
};

const user2 = {
  username: "Harshad Mehta",
  age: 23,
  profession: "Trading",
};

user2.__proto__ = user1;

console.log(user2.accountBalance); //Output : 4000
console.log(user1.profession); //Output : undefined (Because user1 is not inherited user1)

user1.__proto__ = user2;
console.log(user1.profession);
```

- Notes :: In JavaScript, inheritance typically goes in one direction(uni-directional): from the prototype to the object. This means that the user1 object cannot inherit properties from the user2 object if user2 is set as the prototype of user1. The inheritance is one-way: user2 can inherit from user1, but not the other way around.

## What is Inheritance?

If an object needs a property or methods that it dosen't have, it looks for it in its prototype. If the prototype also dosen't have it, the search continues up to chain of prototypes untill it is found or the end of the chain is reached.

```javascript
const user1 = {
  username: "Laxman krishnamurti",
  age: 21,
  accountBalance: 4000,
};

const user2 = {
  username: "Harshad Mehta",
  age: 23,
  profession: "Trading",
};

user2.__proto__ = user1;

console.log(user2.accountBalance); //Output : 4000
console.log(user2.name); //Output : undefined
```

## What is Prototypal Inheritance?

Prototypal inheritace in javascript is a way for objects to share properties and methods when one object is based on another object, it can use the properties and methods of the first object without copying them.

## Constructor and Varibales

- Any properties declared with <code>this.propertyName</code> will be available publicaly. This means that the object's properties can be directly accessed in other scopes.

```javascript
function UserClass(name, age) {
  this.name = name;
  this.age = age;
}

const userOne = new UserClass("Kawya Krishnamurti", 21);
console.log("userOne :: ", userOne);

//Output : userOne ::  UserClass {name: 'Kawya Krishnamurti', age: 21}

//access the public variable that is delcared in the class
console.log(userOne.name); //Output : Kawya Krishnamurti
console.log(userOne.age); //Output : 21
```

//Note :- In Object-oriented-programming language there is a concept of private variable. But in JavaScript private variable is not supported.

//TO mimic a private variable, instead of using the this.propertyName, we can declare a local variable and have getter/setter that allow access to that variable. In this way, the variable is available only to the constructor's scope. The variable is only accessable by the defined interfacing functions. These getter and setters cannot be added outside of the constructor.

```javascript
function PersonClass(profession, salary) {
  var profession = profession;
  var salary = salary;
}

const personOne = new PersonClass("Trading", 30000);
console.log(personOne);
//Output : PersonClass {}

PersonClass.prototype.getProfession = function () {
  console.log(this.profession);
};

PersonClass.prototype.getSalary = function () {
  console.log(this.salary);
};

personOne.getProfession(); //Output : undefined
personOne.getSalary(); //Output : undefined
```

//note : Because the object is empty so that's why when it will see the current context it gets an empty object cause as result of undefined. Because both variables are in the constructor scope it will only accessable within that scope so we need to define both methods within the scope.

```javascript
function Person() {
  var Localprofession;
  var Localsalary;

  this.getProfession = function () {
    return Localprofession;
  };

  // adding setter for profession
  this.setProfession = function (profession) {
    Localprofession = profession;
  };

  this.getSalary = function () {
    return Localsalary;
  };

  //adding setter for salary

  this.setSalary = function (salary) {
    Localsalary = salary;
  };
}

const instanceOneOfPerson = new Person();
console.log(instanceOneOfPerson);

//Output : Person {getProfession: ƒ, getSalary: ƒ (There is no any public variable exist in that object because both are declared in the constructor scope)

instanceOneOfPerson.getProfession(); //Output : undefined
instanceOneOfPerson.getSalary(); //Output : undefined

//Note : because setter is missing that sets the variable values

instanceOneOfPerson.setProfession("Coding");
instanceOneOfPerson.setSalary(50000);

console.log(instanceOneOfPerson.getProfession()); //Output : Coding
console.log(instanceOneOfPerson.getSalary()); //Output : 50000
```

# Chapter - 07 (JavaScript Memory Management)

## Introduction

In any program, a variable takes up some memory. In Low-level programming languages such as C, the programmer must allocate and deallocate memeory manually. In contrast, the V8 JavaScript engine and other moderm javaScript engine have garbage collectors that delete unused variables for the programmer. Despite this memory management done by the javascript engine, however there are common pitfalls that developers can fall into.

## What are Memory Leaks?

A memory leaks is a failure in a program to release discarded memory, causing impaired performance and sometimes even failure. Memory leaks can happen when javascript engine's garbage collectors do not free memory properly.

## Following are key principles outlined to avoid memory leaks during javascript development.

- Reference to an object

```javascript
const foo = {
  bar1: memory(), //5KB
  bar2: memory(), //5KB
};

function clickEvent() {
  console.log(foo.bar1[0]);
}
```

We might expect that <code>clickEvent()</code> function is use 5KB of memory since it is only referencing bar1 from the foo object. However, the truth is that it is using 10KB of memory since it has to load the whole foo object into the function's scope to access bar1 property. We can enhance it like this :-

```javascript
function clickEvent(bar1) {
  console.log(bar1[0]);
}

clickEvent(foo.bar1);
```

- Leaking DOM :: When the two element is no longer in use, this is a memory leak and should be avoided.

- Global window object :: If an object is on the global window object, it is in memeory. Any additional objects declared as a property of window will not be cleared because window is a required object for the browser to run. Remember that any global variable declared will be set as a property of the window object.

```javascript
var username = "Laxman Krishnamurti";
console.log("username :: ", username); //Laxman Krishnamurti
console.log("username by window object :: ", window.username); //Laxman krishnamurti
```

- Limiting object reference :: Do not pass entire object as an agrument into a function. Always remember to limit the amount of scope the function pulls and pass the property of an object only into functions instead of the entire object. This is because the object's memory footprint can be very large.

```javascript
let obj = {
  username: "Kawya Krishnamurti",
  watchHistory: ["An Array of 1,000,000 elements"],
};

function getUsername(obj) {
  console.log("username is : ", obj.username);
}

getUsername(obj); //Do not do this. Function's scope will also going to take up space in the memory as the size of the obj argument. Function dosen't need watchHistory data, although it has occupied space that dosen't required.
```

- The delete operator :: Always remember that the delete operator can be used to delete an unwanted object property (though it does not work on nonobjects).
