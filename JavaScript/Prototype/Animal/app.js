function Animal(name, energy){
  this.name = name;
  this.energy = energy;
}

Animal.prototype.eat = function(amount){
  console.log(`${this.name} is eating.`);
  this.energy += amount;
}

Animal.prototype.sleep = function(length){
  console.log(`${this.name} is sleeping.`);
  this.energy += length;
}

Animal.prototype.play = function(length){
  console.log(`${this.name} is playing.`);
  this.energy -= length;
}

function Dog(name, energy, breed){
  Animal.call(this, name, energy);
  this.breed = breed;
}

Dog.prototype = Object.create(Animal.prototype);
const rex = new Dog("Rex", 15, "Labrador");

Dog.prototype.bark = function(){
  console.log("woof woof");
  this.energy -= 1;
}

Dog.prototype.constructor = Dog;

console.log(rex.name);
console.log(rex.breed);
rex.play(3);
console.log(rex.energy);
rex.bark();
console.log(rex.energy);