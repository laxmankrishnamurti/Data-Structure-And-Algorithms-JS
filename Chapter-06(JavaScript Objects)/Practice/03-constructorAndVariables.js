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

//Note :- In Object-oriented-programming language there is a concept of private variable. But in JavaScript private variable is not supported.

//TO mimic a private variable, instead of using the this.propertyName, we can declare a local variable and have getter/setter that allow access to that variable. In this way, the variable is available only to the constructor's scope. The variable is only accessable by the defined interfacing functions. These getter and setters cannot be added outside of the constructor.

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

//note : Because the object is empty so that's why when it will see the current context it gets an empty object cause as result of undefined. Because both variables are in the constructor scope it will only accessable within that scope so we need to define both methods within the scope.

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
