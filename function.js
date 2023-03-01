// This function get a random choice between this 3 option and returns it
function getComputerChoice() {
    const choises = ["Rock", "Paper", "Scissors"]
    let choise = choises[Math.floor(Math.random()*choises.length)]
    return choise
}
// This function will compare the choises and return a winner
function playRound(playerSelection, computerSelection) {
    if (playerSelection == "rock" && computerSelection == "scissors" || playerSelection == "paper" && computerSelection == "rock" || playerSelection == "scissors" && computerSelection == "paper") {
        return ("You win!")
    }
    else if (playerSelection == computerSelection) {
        return ("Tie!")
    }
    else { return ("You lose!") }
   }
// Global variabe for automatic playerSelection and computerSelection
   let playerSelection = prompt("Make your choice between: rock paper and scissors").toLowerCase();
   const computerSelection = getComputerChoice().toLowerCase();
// 5 rounds game
function game() {
    for (let i = 0; i < 5; i++) {
        getComputerChoice()
        const computerSelection = getComputerChoice().toLowerCase();
        let playerSelection = prompt("Make your choice between: rock paper and scissors").toLowerCase();
        playRound(playerSelection, computerSelection)
        console.log(playRound(playerSelection, computerSelection))
    }
}
game()



