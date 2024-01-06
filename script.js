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

function getComputerChoice(){
    let computerChoice = choice[Math.floor(Math.random()* choice.length)];
    return computerChoice;
};

// console.log(getComputerChoice());