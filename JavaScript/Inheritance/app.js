 class Monster{
  constructor(name){
    this.name = name
  }
    
  attack(){
    console.log(`${this.name} attacked`)
  }

  walk(){
    console.log(`${this.name} walked`)
  }
 } 

 class FlyingMonster extends Monster{
  fly(){
    console.log(`${this.name} flew`)
  }
 }

 class SwimmingMonster extends Monster{
  swim(){
    console.log(`${this.name} swam`)
  }
 }

 const bear = new Monster('Bear')
 bear.attack()
 bear.walk()

 const eagle = new FlyingMonster('Eagle')
 eagle.attack()
 eagle.walk()
 eagle.fly()

 const shark = new SwimmingMonster('Shark')
 shark.attack()
 shark.walk()
 shark.swim()