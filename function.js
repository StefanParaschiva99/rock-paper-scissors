function getComputerChoise() {
    const choises = ["Rock", "Paper", "Scissor"]
    let choise = choises[Math.floor(Math.random()*choises.length)]
    console.log(choise)
}