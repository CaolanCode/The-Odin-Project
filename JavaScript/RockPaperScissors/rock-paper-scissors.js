function getComputerChoice(){
    let allChoices = ['rock', 'paper', 'scissors']
    let choice = allChoices[Math.floor(Math.random()*allChoices.length)]
    return choice; 
}

function playRound(playerChoice, computerChoice){

    switch(computerChoice){
        case 'rock':
            if(playerChoice == 'rock'){
                return "It is a draw";
            } else if(playerChoice == 'scissors'){
                return "You won!";
            } else if(computerChoice == 'paper'){
                return "You lost";
            }
            break;
        case 'paper':
            if(playerChoice == 'rock'){
                return "You won!";
            } else if(playerChoice == 'scissors'){
                return "You lost";
            } else if(computerChoice == 'paper'){
                return "It is a draw";
            }
           break;
        case 'scissors':
            if(playerChoice == 'rock'){
                return "You lost";
            } else if(playerChoice == 'scissors'){
                return "It is a draw";
            } else if(computerChoice == 'paper'){
                return "You won!";
            }
           break;
        default:
            return "Incorrect input";
    }
}