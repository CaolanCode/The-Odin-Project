scoreContainer = document.createElement('div');
console.log(scoreContainer);
playerScore = document.createElement('div')
computerScore = document.createElement('div')

scoreContainer.classList.add('scoreContainer');
scoreContainer.style.cssText = "display:flex; margin:100px 0; align-items:center; justify-content:center;"
playerScore.classList.add('playerScore');
playerScore.style.cssText = "flex:1; background-color:red; border:2px black solid; font-size:100px; height:50vh; display:flex; align-items:center; justify-content:center;";
playerScore.textContent = 0;
computerScore.classList.add('computerScore');
computerScore.style.cssText = "flex:1; background-color:blue; border:2px black solid; font-size:100px; height:50vh; display:flex; align-items:center; justify-content:center;"
computerScore.textContent = 0;

scoreContainer.appendChild(playerScore);
scoreContainer.appendChild(computerScore);
document.body.appendChild(scoreContainer);

rockBtn = document.querySelector('#rock');
if(rockBtn){
  rockBtn.addEventListener('click', () => {
    let computerChoice = getComputerChoice();
    let result = playRound('rock', computerChoice);
    displayResult(result);
    console.log(result);
  } )
}

paperBtn = document.querySelector('#paper');
if(paperBtn){
  paperBtn.addEventListener('click', () => {
    let computerChoice = getComputerChoice();
    let result = playRound('paper', computerChoice);
    displayResult(result);
    console.log(result);
  } )
}

scissorsBtn = document.querySelector('#scissors');
if(scissorsBtn){
  scissorsBtn.addEventListener('click', () => {
    let computerChoice = getComputerChoice();
    let result = playRound('scissors', computerChoice);
    displayResult(result);
    console.log(result);
  } )
}

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

function displayResult(result){
  const display = document.createElement('div');
  display.style.cssText = "display:flex; align-items:center; justify-content:center;align-text:center; border:3px black solid; background-color:red; padding:20px;"
  display.classList.add('display');
  display.textContent = result;
  document.body.appendChild(display);

}