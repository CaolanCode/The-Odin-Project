// object literal
const myModule = {
  name: "Bob",
  age: 34,
  // all methods below are the object API
  sayName: function(){
    console.log(this.name);
  },
  setName: function(newName){
    this.name = newName;
  },
}

myModule.sayName();
myModule.setName("Molly");
myModule.sayName();
