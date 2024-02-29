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
let playerScore = 0;
let computerScore = 0;
const winningScore = 5;

function getComputerChoice(){
    return choice[Math.floor(Math.random()* choice.length)];
};


function playRound(playerChoice, computerChoice){

    if (playerChoice === computerChoice){
        return "It's a Draw!";
    } else if (
        (playerChoice === "Rock" && computerChoice === "Scissors") ||
        (playerChoice === "Paper" && computerChoice === "Rock") ||
        (playerChoice === "Scissors" && computerChoice === "Paper")
    ){
        playerScore++;
        return "You Win! " + playerChoice + " beats " + computerChoice;
    } else {
        computerScore++
        return "You Lose. " + computerChoice + " beats " + playerChoice;
    }

}

function updateResult(result){
    const resultElement = document.getElementById("result");
    resultElement.textContent = result;
}

function updateScore(){
    const scoreElement = document.getElementById("score");
    scoreElement.textContent = "Player: " + playerScore + " - Computer: " + computerScore;
}

function game(playerChoice){

    const computerChoice = getComputerChoice();
    const roundResult = playRound(playerChoice, computerChoice);
    updateResult(roundResult);
    updateScore();

    if (playerScore == winningScore || computerScore === winningScore){

        if (playerScore === winningScore){
            updateResult("Player wins the game!")
        } else {
            updateResult("Computer wins the game.")
        }
        playerScore = 0;
        computerScore = 0;
        updateScore();
    }
}


document.getElementById("rock").addEventListener("click", function(){
    game("Rock")
})
document.getElementById("paper").addEventListener("click", function(){
    game("Paper")
})
document.getElementById("scissors").addEventListener("click", function(){
    game("Scissors")
})
