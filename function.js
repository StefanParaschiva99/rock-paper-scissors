// Global variabe
let yourScore = 0;
let computerScore = 0;
// This function get a random choice between this 3 option and returns it
function getComputerChoice() {
    const choises = ["Rock", "Paper", "Scissors"]
    let choise = choises[Math.floor(Math.random()*choises.length)]
    return choise
}
// This function will compare the choises and return a winner
function playRound(playerSelection, computerSelection) {
    if (playerSelection == "rock" && computerSelection == "scissors" || playerSelection == "paper" && computerSelection == "rock" || playerSelection == "scissors" && computerSelection == "paper") {
        yourScore ++
        return ("You win!")
    }
    else if (playerSelection == computerSelection) {
        return ("Tie!")
    }
    else {
        computerScore ++
        return ("You lose!")
    }
   }
// 5 rounds game
function game() {
    for (let i = 0; i < 5; i++) {
        getComputerChoice()
        const computerSelection = getComputerChoice().toLowerCase();
        let playerSelection = prompt("Make your choice between: rock paper and scissors").toLowerCase();
        if (playerSelection === "scissors" || playerSelection == "rock" || playerSelection === "paper"){
        console.log(playRound(playerSelection, computerSelection))
        console.log("Your score is " + yourScore + " points!")
        } else {
            i--
            window.alert("You have to choose between: scissors, rock and paper! It is not case sensitive but you must spell it correctly")
        }
    }
}
// running the game
game()

console.log("Your opponent score is " + computerScore + " points!")

if (yourScore > computerScore) {
    console.log("Congrats. You're the winner!")
}
else if (yourScore < computerScore) {
    console.log("you'll be luckier next time.")
}
else{
    console.log("It's Tie!")
}




