function createPerson(name){
  return{
    name: name,
    talk(){
      return `I'm ${this.name}`;
    }
  }
}

const person = createPerson("Molly");

console.log(person.talk());