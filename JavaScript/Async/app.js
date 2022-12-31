function orderPizza(){
  console.log('order pizza')
  setTimeout( () => {
    pizza = 'pizza'
  }, 2000)
  console.log('pizza ordered')
}
const pizza = orderPizza()
console.log(`Eat ${pizza}`) 