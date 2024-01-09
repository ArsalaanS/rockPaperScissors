/* 
create function that returns (not console.log) random output from computer
between rock paper and scissors

create function that takes player selection
and computer selection and returns (not console.log) string 
which decalres winner of round
- case-insensitive ('rock' 'ROCK' or 'rOCk')

account for ties - replay round
*/

const choice = ["Rock", "Paper", "Scissors"]
let playerChoice;
let computerChoice;

function getComputerChoice(){
    computerChoice = choice[Math.floor(Math.random()* choice.length)];
    return computerChoice;
};

computerChoice = getComputerChoice();

function getPlayerChoice(){
    playerChoice = prompt("Rock, Paper, or Scissors?");
    playerChoice = playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1).toLowerCase();
    return playerChoice;
}

playerChoice = getPlayerChoice();

const winMessage = "You Win! " + playerChoice + " beats " + computerChoice;
const loseMessage = "You Lose. " + computerChoice + " beats " + playerChoice;
const drawMessage = "It's a Draw!"
let result = '';

let computerScore = 0;
let playerScore = 0;

function playRound(playerChoice, computerChoice){

    getComputerChoice();
    getPlayerChoice();
    console.log(playerChoice);
    console.log(computerChoice);
    
    if (playerChoice == computerChoice){
        result = drawMessage;
        return result;
    } else if (playerChoice == "Rock"){
            if (computerChoice == "Scissors"){
                result = winMessage;
                playerScore++;
                return result;
                
            } else if(computerChoice == "Paper"){
                result = loseMessage;
                computerScore++;
                return result;
            }
        } else if (playerChoice == "Paper"){
            if (computerChoice == "Scissors"){
                result = winMessage;
                playerScore++;
                return result;
            } else if(computerChoice == "Rock"){
                result = loseMessage;
                computerScore++;
                return result;
            }
        } else if(playerChoice == "Scissors"){
            if (computerChoice == "Paper"){
                result = winMessage;
                playerScore++;
                return result;
            } else if (computerChoice == "Rock"){
                result = loseMessage;
                computerScore++;
                return result;
            }
        } 

}

function checkScore(){
    if (playerScore || computerScore == 3){

    }
};

function game(){

    // for (var i = 0; i < 5; i++){
    //     playRound();
    //     console.log(playRound(playerChoice, computerChoice));
    //     console.log("Player Score: "+ playerScore);
    //     console.log("Computer Score: "+ computerScore);
    // };
    // while (playerScore || computerScore <= 3){
    //     // playRound(playerChoice, computerChoice);
    //     console.log(playRound(playerChoice, computerChoice));
    //     console.log("Player Score: "+ playerScore);
    //     console.log("Computer Score: "+ computerScore);
    // };

    // if (playerScore > computerChoice){
    //     console.log("You WIN!")
    // } else {
    //     console.log("You LOSE!")
    // };

    console.log(playRound(playerChoice, computerChoice));
    console.log(playRound(playerChoice, computerChoice));
    console.log(playRound(playerChoice, computerChoice));
    console.log(playRound(playerChoice, computerChoice));
    console.log(playRound(playerChoice, computerChoice));

    console.log("Player: "+ playerScore);
    console.log("Computer: "+ computerScore);

    if (playerScore > computerScore){
        console.log("YOU WIN!")
    } else {
        console.log("You Lose. Better luck next time!")
    }
}

console.log(game());