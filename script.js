const getComputerChoice = () => {
    const randomNumber = Math.floor(Math.random() * 3)
    if (randomNumber === 0) return "Rock"
    if (randomNumber === 1) return "Paper"
    if (randomNumber === 2) return "Scissors"
}

const playRound = (playerSelection, computerSelection) => {
    const playerSelectionLower = playerSelection.toLowerCase()

    if (playerSelectionLower === computerSelection.toLowerCase()) {
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

let playerWins = 0
let computerWins = 0

const game = (playerSelection) => {
    if (playerWins >= 5 || computerWins >= 5) {
        playerWins = 0
        computerWins = 0
    }

    const computerSelection = getComputerChoice()
    const result = playRound(playerSelection, computerSelection)

    let message = `Its a DRAW!`
    if (result === 1) {
        playerWins += 1
        message = `You WIN! ${playerSelection.toUpperCase()} beats ${computerSelection}`
    }
    if (result === 0) {
        computerWins += 1
        message = `You LOSE! ${playerSelection.toUpperCase()} loses to ${computerSelection}`
    }

    let finalResult = ""
    if (playerWins === 5) {
        finalResult = "Player WINS"
    }

    if (computerWins === 5) {
        finalResult = "Computer WINS"
    }

    resultDiv.textContent = `Player - ${playerWins} | Computer -  ${computerWins}\n${message}\n${finalResult}`
}

const buttonRock = document.createElement("button")
buttonRock.textContent = "Rock"

const buttonPaper = document.createElement("button")
buttonPaper.textContent = "Paper"

const buttonScissors = document.createElement("button")
buttonScissors.textContent = "Scissors"

const resultDiv = document.createElement('div')
resultDiv.style.whiteSpace = "pre-wrap"
resultDiv.textContent = `Player - 0 | Computer - 0`

document.body.appendChild(buttonRock)
document.body.appendChild(buttonPaper)
document.body.appendChild(buttonScissors)
document.body.appendChild(resultDiv)

const buttons = document.querySelectorAll('button')
buttons.forEach(button => button.addEventListener('click', function (e) {
    game(this.innerText)
}))
