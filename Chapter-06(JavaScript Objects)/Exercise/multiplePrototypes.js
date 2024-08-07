function Animal(name, animalType) {
  this.name = name;
  this.animalType = animalType;
}

Animal.prototype.getAnimalName = function () {
  console.log(this.name);
};

Animal.prototype.getAnimalType = function () {
  console.log(this.animalType);
};

//prototypal inheritance

function Dog(name) {
  Animal.call(this, name, "Dog");
}

Dog.prototype = Object.create(Animal.prototype);

//creating instance of Animal Class
const instanceOfAnimalClass = new Animal("Rocky", "Human");
console.log("instance of Animal class :: ", instanceOfAnimalClass);

//instance of Animal class ::  Animal {name: 'Rocky', animalType: 'Human'}
instanceOfAnimalClass.getAnimalName(); //Rocky
instanceOfAnimalClass.getAnimalType(); //Human

//creating instance of Dog class
const instanceOfDogClass = new Dog("Tommy");
console.log("instance of dog class :: ", instanceOfDogClass);

//instance of dog class ::  Dog {name: 'Tommy', animalType: 'Dog'}
instanceOfDogClass.getAnimalName(); //Tommy
instanceOfDogClass.getAnimalType(); //Dog

function Cat(name) {
  Animal.call(this, name, "Cat");
}

Cat.prototype = Object.create(Animal.prototype);

//creating instance of Cat class
const instanceOfCatClass = new Cat("Lucy");
console.log("instance of cat class :: ", instanceOfCatClass);

//instance of cat class ::  Cat {name: 'Lucy', animalType: 'Cat'}

instanceOfCatClass.getAnimalName(); //Lucy
instanceOfCatClass.getAnimalType(); //Cat
