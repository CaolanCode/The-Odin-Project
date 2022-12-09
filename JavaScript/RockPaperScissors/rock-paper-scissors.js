function getComputerChoice(){
    let allChoices = ['Rock', 'Paper', 'Scissors']
    let choice = allChoices[Math.floor(Math.random()*allChoices.length)]
    return choice; 
}