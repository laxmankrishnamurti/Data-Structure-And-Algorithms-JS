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
