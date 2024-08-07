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
