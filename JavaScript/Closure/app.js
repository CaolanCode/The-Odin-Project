function human(name){
  function sayHi(){
    console.log(`Hi, Im ${name}`)
  }
  function sayHowYouFeel(){
    console.log(`${name} is feeling good`)

  }
  return{
    sayHi,
    sayHowYouFeel,
  }
}
const bob = human("Bob")
const qoli = human("Qoli")
bob.sayHi()
qoli.sayHowYouFeel()