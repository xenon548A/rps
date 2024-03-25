let scoreC = 0;
let scoreP = 0;

function getComputerChoice(){
    let num = Math.floor(Math.random()*100) + 1;
    if (num%2 == 0){
        return "Rock"
    } else if (num%3 == 0){
        return "Scissors"
    } else{
        return "Paper";
    } 
};

function game(playerValue, computerValue){
    if ((playerValue == "Rock" || playerValue == "rock") && computerValue == "Scissors"){
        scoreP = scoreP + 1;
        return "Player won the round, rock defeats scissors";
    } else if( (playerValue == "Scissors" || playerValue == "scissors") && computerValue == "Paper"){
        scoreP = scoreP + 1;
        return "Player won the round, scissors defeats paper";
    } else if((playerValue == "Paper" || playerValue == "paper") && computerValue == "Rock"){
        scoreP = scoreP + 1;
        return "Player won the round, Paper defeats rock";
    } else if(playerValue == computerValue){
        scoreP = scoreP + 0;
        scoreC = scoreC + 0;
        return "its a tie"
    } else{
        scoreC = scoreC+1;
        return "computer won the round"
    }
};

function score(){
    const userChoice = prompt("choose Rock, Paper or Scissors")
    const computerChoice = getComputerChoice();
    console.log(game(userChoice, computerChoice))
    console.log("computer's score is",scoreC)
    console.log("player's score is", scoreP)
    if(scoreP > 3){
        alert("Player has won the game!!!!")
    } else if (scoreC > 3){
        alert("Computer has won the game")
    } else if(scoreP > scoreC){
        alert("Player has won the game!!!")
    } else if(scoreC > scoreP){
        alert("Computer has won the game")
    } else{
        null;
    }
}

i = 1
let roundNumber = 5;
while (i<=roundNumber){
    score();
    i = i+1;
}



