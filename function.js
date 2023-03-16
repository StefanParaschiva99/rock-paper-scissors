// Global variabe
let yourScore = 0;
let computerScore = 0;

// Functions

// This function get a random choice between this 3 option and returns it
function getComputerChoice() {
    const choises = ["rock", "paper", "scissors"]
    let choise = choises[Math.floor(Math.random()*choises.length)]
    return choise
}
// This function will compare the choises and return a winner
function playRound(playerSelection, computerSelection) {
    if (playerSelection == "rock" && computerSelection == "scissors" || playerSelection == "paper" && computerSelection == "rock" || playerSelection == "scissors" && computerSelection == "paper") {
        yourScore ++
    }
    else if (playerSelection == computerSelection) {
    }
    else {
        computerScore ++
    }
   }
// This function will stop the game after someone reach 5 points.
// With this else if statement I return a game over page. 
// I used setTimeout function to delay the appearance of the page by 500ms.
// I used image.src to change only the src attribute
function gameOver(yourScore, computerScore) {
    if (yourScore == 5) {
        setTimeout(function(){
            game.classList.add("hidden-content")
            winnerPage.classList.remove("hidden-content")
            winnerPage.classList.add("display-content")
            image.src = "images/winner.png"
            finalScore.textContent = `${yourScore} - ${computerScore}`
            winnerAudio.play()
        }, 500)
    } else if (computerScore == 5) {
        setTimeout(function(){
            game.classList.add("hidden-content")
            winnerPage.classList.remove("hidden-content")
            winnerPage.classList.add("display-content")
            image.src = "images/game-over-2.png"
            finalScore.textContent = `${yourScore} - ${computerScore}`
            gameOverAudio.play()
        }, 500)
    }
}

// select all the classes that I need to manipulate
const rock = document.querySelector(".rock")
const paper = document.querySelector(".paper")
const scissors = document.querySelector(".scissors")
const playerEmoji = document.querySelector(".player-emoji")
const computerEmoji = document.querySelector(".computer-emoji")
const yScore = document.querySelector(".your-score")
const cScore = document.querySelector(".computer-score")
const result = document.querySelector(".result")
const game = document.querySelector(".game")
const winnerPage = document.querySelector(".winner-page")
const image = document.querySelector(".image")
const finalScore = document.querySelector(".final-score")
const reload = document.querySelector(".start-again")
const audio = new Audio("sounds/mixkit-cool-interface-click-tone-2568.wav")
const buttons = document.querySelectorAll("button")
const winnerAudio = new Audio("sounds/success-fanfare-trumpets-6185.mp3")
const gameOverAudio = new Audio("sounds/mixkit-sad-game-over-trombone-471.wav")

// rock button
// I put all the eventListener body inside an If else statement, 
// in this way when you reach 5 points it will return and the game stop.
rock.addEventListener("click", function(e) {
if (yourScore < 5 && computerScore < 5) {
    let playerSelection = "rock"
    let computerSelection = getComputerChoice() // I put the function inside because in this way it will be called every time you press the button
    playRound(playerSelection, computerSelection)
// I use this if statement and .textContent DOM method to change the emoji that diplay the choices and the WIN/LOSE word in middle.
    playerEmoji.textContent = "🤜"
    if (computerSelection == "rock") {
        computerEmoji.textContent = "🤜"
        result.textContent = "TIE!"
        result.style.cssText = "color: yellow;"
    } else if (computerSelection == "paper") {
        computerEmoji.textContent = "🤚"
        result.textContent = "LOSE!"
        result.style.cssText = "color: red;"
    } else {
        computerEmoji.textContent = "✌️"
        result.textContent = "WIN!"
        result.style.cssText = "color: green;"
    }
// I used this variable with .textContent DOM method to change the text content diplayed in the game. 
// Also I used the template strings that makes the code easier to read!
    yScore.textContent = `Your score: ${yourScore}`
    cScore.textContent = `Computer score: ${computerScore}`
} else{
    return
}
    gameOver(yourScore, computerScore)
})

//paper button
paper.addEventListener("click", function(e) {
if (yourScore < 5 && computerScore < 5){
    let playerSelection = "paper"
    let computerSelection = getComputerChoice()
    playRound(playerSelection, computerSelection)
    playerEmoji.textContent = "🤚"
    if (computerSelection == "rock") {
        computerEmoji.textContent = "🤜"
        result.textContent = "WIN!"
        result.style.cssText = "color: green;"
    } else if (computerSelection == "paper") {
        computerEmoji.textContent = "🤚"
        result.textContent = "TIE!"
        result.style.cssText = "color: yellow;"
    } else {
        computerEmoji.textContent = "✌️"
        result.textContent = "LOSE!"
        result.style.cssText = "color: red;"
    }
    yScore.textContent = `Your score: ${yourScore}`
    cScore.textContent = `Computer score: ${computerScore}`
} else {
    return
}
    gameOver(yourScore, computerScore)
})

//scissors button
scissors.addEventListener("click", function(e) {
if (yourScore < 5 && computerScore < 5) {
    let playerSelection = "scissors"
    let computerSelection = getComputerChoice()
    playRound(playerSelection, computerSelection)
    playerEmoji.textContent = "✌️"
    if (computerSelection == "rock") {
        computerEmoji.textContent = "🤜"
        result.textContent = "LOSE!"
        result.style.cssText = "color: red;"
    } else if (computerSelection == "paper") {
        computerEmoji.textContent = "🤚"
        result.textContent = "WIN!"
        result.style.cssText = "color: green;"
    } else {
        computerEmoji.textContent = "✌️"
        result.textContent = "TIE!"
        result.style.cssText = "color: yellow;"
    }
    yScore.textContent = `Your score: ${yourScore}`
    cScore.textContent = `Computer score: ${computerScore}`
} else {
    return
}
    gameOver(yourScore, computerScore)
})

// play again button
reload.addEventListener("click", function(e) {
    setTimeout(() => {
        window.location.reload()
    }, 500);
})
// I used this forEach loop to add the method .play() at all the buttons. 
// Initially it didn't work because the button of that page made it reload and this didn't give to the audio the time to start
buttons.forEach(button => {
    button.addEventListener("click", () => {
        audio.play()
    })
})