const computerChoice = document.getElementById('computer-choice')
const playerChoice = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')
const possibleChoices = document.querySelectorAll('button')
let userChoice
let result = document.getElementById('result')
possibleChoices.forEach(possibleChoices => addEventListener('click',(e) => {
    userChoice = e.target.id
    playerChoice.innerHTML = userChoice
    generateComputerChoice()
}))
function generateComputerChoice(){
    const randomNum = Math.floor(Math.random() * 3)+1//or can use possibleChoices.length
    
    if (randomNum === 1) {
        computerChoice.innerHTML = 'rock'
    }
    if (randomNum === 2) {
        computerChoice.innerHTML = 'paper'
    }
    if (randomNum === 3) {
        computerChoice.innerHTML = 'scissors'
    }
}

function getResult(){
    if(computerChoice.innerHTML === playerChoice.innerHTML){
        result.innerHTML = 'draw'
    }
    if(computerChoice.innerHTML === 'rock' && playerChoice.innerHTML === 'scissor') {
        result.innerHTML = 'lose'
    }
    if(computerChoice.innerHTML === 'paper' && playerChoice.innerHTML === 'rock') {
        result.innerHTML = 'lose'
    }
    if(computerChoice.innerHTML === 'scissors' && playerChoice.innerHTML === 'paper') {
        result.innerHTML = 'lose'}else{result.innerHTML = 'win'}
}