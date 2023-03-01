function getComputerChoice() {
    let choices = ["Rock", "Paper", "Scissor"];
    let computerChoice = choices[Math.floor(Math.random()*choices.length)];
    console.log("The computer chose: " +computerChoice)
}