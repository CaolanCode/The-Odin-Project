import User, { printName, printAge } from './user.js'

const user = new User('Bob', 34)
printName(user)
printAge(user)