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
          return "You lost, rock beats scissors!";
      } else if(playerChoice == 'paper'){
          return "You win, paper beats rock";
      }
      break;
    case 'paper':
      if(playerChoice == 'rock'){
          return "You lost, paper beats rock!";
      } else if(playerChoice == 'scissors'){
          return "You win, scissors beats paper";
      } else if(playerChoice == 'paper'){
          return "It is a draw";
      }
      break;
    case 'scissors':
      if(playerChoice == 'rock'){
          return "You win, rock beats scissors";
      } else if(playerChoice == 'scissors'){
          return "It is a draw";
      } else if(playerChoice == 'paper'){
          return "You lost, scissors beats paper!";
      }
      break;
    default:
      return "Incorrect input";
  }
}
/*
function game(){
  for(let i = 0; i < 5; i++){
    let computerChoice = getComputerChoice();
    let result = playRound(playerChoice, computerChoice);
    console.log(result);
  }
}
*/
const rock = document.querySelector('#rock');
rock.addEventListener('click', () => {
  let computerChoice = getComputerChoice();
  let result = playRound('rock', computerChoice);
  console.log(result);
} )

const paper = document.querySelector('#paper');
paper.addEventListener('click', () => {
  let computerChoice = getComputerChoice();
  let result = playRound('paper', computerChoice);
  console.log(result);
} )

const scissors = document.querySelector('#scissors');
scissors.addEventListener('click', () => {
  let computerChoice = getComputerChoice();
  let result = playRound('scissors', computerChoice);
  console.log(result);
} )