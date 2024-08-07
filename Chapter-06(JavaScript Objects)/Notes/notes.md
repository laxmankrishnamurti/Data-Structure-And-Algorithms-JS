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
  profession: Trading,
};

user2.__proto__ = user1;

console.log(user2.accountBalance);
```
