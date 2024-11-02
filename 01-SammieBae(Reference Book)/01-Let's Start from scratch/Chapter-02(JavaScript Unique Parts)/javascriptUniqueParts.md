# Chapter-02 (JavaScript Unique Parts)

As a dynamic and interpreted programming language, its syntax is different from that of traditional object-oriented programming language. As we know JavaScript is a dynamic or interpreted language so it has some sort of exceptions, different kind of behaviours and syntax. These concepts are fundamental to JavaScript and will help us to develop a better understanding of the process of designing algorithms in JavaScript.

## JavaScript Scope

Scope is like an area where we can use a variable in JavaScript. It means there will be some sort of boundation where we are limited to use the defined variable.

```js
function sayHello() {
  let name = "Laxman krishnamurti";
  console.log(`Hello ${name}`);
}

console.log("name is", name); //Err :- name is not defined

sayHellot();
```

The name variable is bounded to use within the function and it cannot be used outside of the function. This is what we called _scope of a variable._ There are two types of scope in JavaScript. These are following :-

**1. Global scope** - Any variable, function, object, array, ....etc can be accesed anywhere in the program if it is declared in the global scope.

**2. Local scope** - Any variable, function, object, array, ..etc is bounded within a block, only accessable within the block.

## Global Declaration: Global scope

In JavaScript, variables can be declared without using any operators.

```js
name = "laxman";
console.log("name is", name); //name is laxman
```

However, this creates a global variable, and this is one of the worst practices in JavaScript. Avoid doing this at all costs. Always use :-

- var or let for variables
- const for constant which value dosen't change.

## Declaration with var: Functional Scope

If we have declared a variable using _var_ keyword; these declarations _float_ all the way to the top. This is known as **_variable hoisting._**

**Hoisting ===> Variables declared at the bottom of the script will not be the last thing execurted in a JavaScript progam during runtime.**

```js
console.log("name", name);

var name;

//Output : name undefined ; no error
```

```js
console.log("name", name);

let name;

//Output : ReferenceError: Cannot access 'name' before initialization
```

```js
name = "laxman";
console.log("name", name);

var name;

//Output : name laxman
```

```js
console.log("name", name);
name = "laxman";
var name;

function scope1() {
  var top = "top";
  bottom = "bottom";
  console.log("bottom", bottom);

  let bottom;
}

scope1();

//Outputs ::
// name undefined
// bottom bottom
```

- The bottom variable declaration, which was at the last line in the function, is floated to the top, and logging the variable works.
- Also remember, the _bottom_ variable is closest to the function scope not to the global scope.

```js
function scope1() {
  var top = "top";
  bottom = "bottom";
  console.log("bottom", bottom);

  //can be accessed within the function becasue it can float bottom to top and become a gloabl scoped variable.
  function scope2() {
    if (true) {
      console.log("bottom inside scope2", bottom);
    }
  }

  scope2();
  var bottom;
}

console.log("bottom at outside", bottom);
scope1();

//Output : ReferenceError: bottom is not defined
```

## Declaration with let: Block scope

Any variables declared this way are in the closest block scope(meaning within the {} they were declared in).

```js
function scope1() {
  var top = "top";
  bottom = "bottom";
  console.log("bottom", bottom);
  function scope2() {
    if (true) {
      console.log("bottom inside scope2", bottom);
    }
  }

  scope2();
  let bottom;
}

scope1();
```

Becasue the variable declared with _let_ cannot float bottom to top. It strict to the {}; where child block can use the parent block variables but parent block cannot use the child block variable.

```js
function scope1() {
  var top = "top";
  bottom = "bottom";
  console.log("bottom", bottom);
  console.log("name is ", age);
  function scope2() {
    const age = 22;
    if (true) {
      console.log("bottom inside scope2", bottom);
    }
  }

  scope2();
  var bottom;
}

scope1();

//Output : ReferenceError: age is not defined
```

```js
function scope1() {
  var top = "top";
  bottom = "bottom";
  console.log("bottom", bottom);
  //   console.log("name is ", age);
  function scope2() {
    const age = 22;
    console.log("getting value from parent block scope", top);
    if (true) {
      console.log("bottom inside scope2", bottom);
    }
  }

  scope2();
  var bottom;
}

scope1();

// bottom bottom
// getting value from parent block scope top
// bottom inside scope2 bottom
```

## Equality and Types

JavaScript has different data types than in trasitional languages such as Java. Let's explore how this impacts things such as equality comparison.

### Variable Types

In JavaScript, there are _seven primitive data types(pre-built)_, are:-

- boolean
- number
- string
- undefined (assigned to a variable that has just been declared.)
- object
- function
- symbol

**_typeof_ is the primitive operator used to return the type of a variable.**

```js
typeof false; //boolean
typeof 22; //number
typeof laxman; //string
typeof ["laxman", "vikram"]; //object
typeof { name: "laxman", age: 22 }; //object
typeof null; //object
typeof function sayHello() {
  console.log("Hello");
}; //function

let name;
console.log(typeof name); //undefined (not initialized yet)
```

### Truthy/Falsy values

True/False checking is used in _if-statement_. In many languages, the parameter inside the _if()_ function must be a boolean type. However, JavaScript is a dynamic language so that's why it is more flexible with this.

**Here are commonly used expression that evaluated to false**

- false
- 0
- Empty string ('' and "")
- Nan
- undefined
- null

**Here are commonly used expression that evaluated to true**

- true
- number > 0
- string.length > 0
- Non-empty object

### === VS ==

JavaScript is a scripting language, and variables are not assigned a type during declaration. Instead, they are interpreted as the code run.

- ===

  - Checks for both the type and the value

- ==
  - Only check the value over type.

```js
console.log("5" == 5); //true
console.log("5" === 5); //false
```

When the code starts to run the "5" will be casted as number 5 because there is a comparison check. This is what we call _implicit conversion_

### Objects

As we know object is a collection or bundle of key-value pairs. Now, the question is can we check two objects are equal or not with the help of == or ===.

```js
const obj1 = {};
const obj2 = {};

console.log(obj1 == obj2); //false
console.log(obj1 === obj2); //false
```

**_The primitive equality check operators, == and ===, can be used only for strings and numbers._**

#### How Equality Operators Work:

**1. Primitive Values:**

- When comparing primitive values (like numbers or strings), both == and === check the actual value.
- == performs type coercion (e.g., 5 == "5" is true).
- === checks for both value and type (e.g., 5 === "5" is false).

**2. Reference Types (Objects, Arrays):**

- For objects, == and === check if both operands reference the same memory location.
- If two objects point to different memory addresses (even if they have the same content), == and === will both return false.

**_In short, For primitive values (number, string, etc.), equality checks compare the actual values. For objects, equality checks compare whether the variables refer to the same memory address, not their content._**

Namely, the variables have different addresses in memory. This is why most JavaScript applications use utility libraries such as **_lodash_** or **_underscore_**, which have the _isEqual(obj1, obj2)_ function to check two objects or values strictly.

```js
//let's check whether an object is equal or not
function isEqual(obj1, obj2){
    //extract all property names
    let firstProps = Object.getOwnPropertyNames(obj1);
    let secondProps = Object.getOwnPropertyNames(obj2);

    //if their property length are diffrent, they are different objects
    if(firstProps.length !== secondProps.length){
        return false;
    }

    //check property vlaues
    for(let i 0; i < firstProps.length; i++){
        let propName = firstProp[i]
        if(firstProp[propName] !== secondProp[propName]){
            return false
        }
    }

    //if everything matched, correct
    return true;
}

isEqual({},{})  //true
```

**_However, this would still work for objects that have only a string or a number as the property._**

```js
isEqual({ name: "laxmna", m1: () => {} }, { name: "laxmna", m1: () => {} });

//false
```

**_This is because functions and arrays cannot simply use the == operator to check for equality._**

```js
const fun1 = function () {
  console.log("first function");
};

const fun2 = function () {
  console.log("second function");
};

console.log(fun1 == fun2); //false
```

**_In JavaScript, functions are compared by reference, so two function objects are only considered equal if they reference the exact same function instance._**

#### **_Reference ===> Memory address_**
