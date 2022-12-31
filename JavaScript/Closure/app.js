function human(name){
  function sayHi(){
    console.log(`Hi, Im ${name}`)
  }
  function sayHowYouFeel(){
    console.log(`${name} is feeling good`)

  }
  sayHi()
  sayHowYouFeel()
}
human('Bob')