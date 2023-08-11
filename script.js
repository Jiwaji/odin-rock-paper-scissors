const getComputerChoice = () => {
    const randomNumber = Math.floor(Math.random() * 3)
    if (randomNumber === 0) return "Rock"
    if (randomNumber === 1) return "Paper"
    if (randomNumber === 2) return "Scissors"
}

const playRound = (playerSelection, computerSelection) => {
    const playerSelectionLower = playerSelection.toLowerCase()

    if(playerSelectionLower === computerSelection.toLowerCase()) {
        return -1
    }

    if (playerSelectionLower === "rock") {
        if (computerSelection === "Paper") {
            return 0
        }
    }

    if (playerSelectionLower === "paper") {
        if (computerSelection === "Scissors") {
            return 0
        }
    }

    if (playerSelectionLower === "scissors") {
        if (computerSelection === "Rock") {
            return 0
        }
    }

    return 1
}

const game = () => {
    let playerWins = 0
    let computerWins = 0
    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt(`Choose from Rock / Paper / Scissors for Round ${i+1}`)
        if(!playerSelection) {
            console.log("Please enter your response")
            return
        }
        const computerSelection = getComputerChoice()
        const result = playRound(playerSelection, computerSelection)
        let message = `Its a DRAW!`
        if(result === 1) {
            playerWins += 1
            message = `You WIN! ${playerSelection.toUpperCase()} beats ${computerSelection}`
        } 
        if(result === 0) {
            computerWins += 1
            message = `You LOSE! ${playerSelection.toUpperCase()} loses to ${computerSelection}`
        }
        
        console.log(message)
    }

    if(playerWins > computerWins) {
        console.log(`Player WINS by score of ${playerWins} v ${computerWins}`)
    } else if (playerWins < computerWins) {
        console.log(`Computer WINS by score of ${computerWins} vs ${playerWins}`)
    } else {
        console.log(`The game is TIED`)
    }
}

game()