// composition version of Monster class in Inheritance directory
function swimmerAndWalker({name}){
  return{
    attack : () => console.log(`${name} attacked`),
    walk : () => console.log(`${name} walked`)
  }
}
function flyer({name}){
  return{
    flew: () => console.log(`${name} flew`)
  }
}

function swimmer({name}){
  return{
    swam: () => console.log(`${name} swam`)
  }
}

function monsterCreator(name){
  const monster = {name : name}

  return{
    ...monster,
    ...swimmerAndWalker(monster)
  }
}

function swimmingMonsterCreator(name){
  const monster = {name : name}

  return{
    ...monster,
    ...swimmerAndWalker(monster),
    ...swimmer(monster)
  }
}

function flyingMonsterCreator(name){
  const monster = {name : name}

  return{
    ...monster,
    ...swimmerAndWalker(monster),
    ...flyer(monster)
  }
}

const bear = monsterCreator('Bear')
bear.attack()
bear.walk()

const shark = swimmingMonsterCreator('Shark')
shark.attack()
shark.walk()
shark.swam()

const eagle = flyingMonsterCreator('Eagle')
eagle.attack()
eagle.walk()
eagle.flew()