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

// user1.__proto__ = user2;
// console.log(user1.profession);

/*
In JavaScript, inheritance typically goes in one direction: from the prototype to the object. This means that the user1 object cannot inherit properties from the user2 object if user2 is set as the prototype of user1. The inheritance is one-way: user2 can inherit from user1, but not the other way around.
*/

// console.log(user2.name);
// console.log(user2.getName());

function PersonClass(name, age, email) {
  this.name = name;
  this.age = age;
  this.email = email;
}

const instanceOne = new PersonClass(
  "Laxman Krishnamurti",
  21,
  "laxmankrishnamurti@gmail.com"
);
console.log("instanceOne :: ", instanceOne);

//instanceOne ::  PersonClass {name: 'Laxman Krishnamurti', age: 21, email: 'laxmankrishnamurti@gmail.com'}

const instanceTwo = new PersonClass(
  "Kawya Krishnamurti",
  5,
  "kawyakrishnamurti@gmail.com"
);
console.log("instanceTwo :: ", instanceTwo);
//instanceTwo ::  PersonClass {name: 'Kawya Krishnamurti', age: 5, email: 'kawyakrishnamurti@gmail.com'}

//let's add some methods into the class by using .prototype property

PersonClass.prototype.sayHello = function () {
  console.log(`Hello, My name is ${this.name}`);
};

PersonClass.prototype.getEmail = function () {
  console.log("Your useremail is :: ", this.email);
};

instanceOne.sayHello(); //Hello, My name is Laxman Krishnamurti
instanceTwo.sayHello(); //Hello, My name is Kawya Krishnamurti

instanceOne.getEmail(); //Your useremail is ::  laxmankrishnamurti@gmail.com
instanceTwo.getEmail(); //Your useremail is ::  kawyakrishnamurti@gmail.com

/*
Becuase of dynamic nature of javascript we can able to do that. But in strictly types langugae such as JAVA, C++..etc we can not do that. Becuase in such type of languages first their code is going to compiled and then it will run. After compilation we cannot add extra methods or properties in it's class. If we do, we need to coile the code again and then we can run the program and use the newly added method and properties. 

But this will not happen in JavaScript. Javascript code is not compile it will direct run after interpratation. yes, there is an interpreter that checks some sytax type error and if all is clear it will simply run the program and not throw any type of error. 

for example, let say there is variable that is not defined anywhere the interpreter will not throw any type of error because it just simply checks sytax. The error will come when the program runs. It will say hey! this variable is not declared yet, please declare it and then use it. 

This dynamic nature of javascript, is the main reason of making javascript so versatile. Prototypal inheritance come up with this nature also.
*/
