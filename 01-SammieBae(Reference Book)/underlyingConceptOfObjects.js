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
