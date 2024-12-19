const user = {
  name: "Laxman Krishnamurti",
  age: 22,
  email: "laxmankrishnamurti@gmail.com",
  greet: function () {
    return `Hello ${this.name}`;
  },
};

Object.defineProperty(user, "name", { writable: false });
console.log("user name", user.name);
user.name = "Harshad Mehta";
console.log("user", user);

/*
user name Laxman Krishnamurti
user {
  name: 'Laxman Krishnamurti',
  age: 22,
  email: 'laxmankrishnamurti@gmail.com',
  greet: [Function: greet]
}
*/

// In JavaScript, every object has an internal link to another object called its prototype, which forms a prototype chain.

const firstPrototype = Object.getPrototypeOf(user);
console.log("firstPrototype of user", firstPrototype);

// firstPrototype of user [Object: null prototype] {}
// why :: The REPL (Read-Eval-Print Loop) gives more explicit debugging information, including prototype metadata.
