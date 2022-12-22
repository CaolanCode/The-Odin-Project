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

const dog = new Animal('Rex', 7);
dog.sleep(8);
console.log(dog.energy);