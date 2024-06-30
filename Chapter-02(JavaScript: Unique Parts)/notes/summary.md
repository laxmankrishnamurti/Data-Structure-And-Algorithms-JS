# What does it mean by scope?

The scope is what defines the access to Javascript variables. "To be more precise scope simply states that the place where a JavaScript variable is accessable" OR "The place where we can access a variable that place of called the scope of that varibale."

# Variable declaration using "var" keyword.

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

# What is function scope?

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

# Variable declaration with "let" keyword.

Any variables declared in this way are in the closest block scope. What does it mean by Block scope? let's understand.....

Block scope refers to this :- {}; Yes, The code that we write inside the curly praces/parentheses are in block scope. To be more precise the enviroment inside the {} is knwon as block scope.

"let" keyword dosen't give the freedom as "var" keyword. we can initialize a variable value which is declared with the var keyword before it's declaration. But "let" keyword don't allow us to do that, if we try to do such silly thing it will give an referenceError.

Scope property will same for that kind of variables.

# Primitive data-types in JavaScript.

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

# Truthy / Falsey check

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
