function getComputerChoice(){
    x = Math.floor((Math.random() * 10)) % 3;
    if (x == 0){
        return "rock";
    }
    else if (x==1){
        return "paper";
    }
    else {
        return "scissors";
    };
}

function playRound(playerSelection){
    let computerChoice = getComputerChoice();
    if (playerSelection == computerChoice) {
        console.log(`It is a tie! ${playerSelection} ties ${computerChoice}`);

    }
    else if (playerSelection == "rock" && computerChoice == "paper"){
        console.log(`You lose! ${playerSelection} got covered by ${computerChoice}`);
    }
    else if (playerSelection == "rock" && computerChoice == "scissors"){
        console.log(`You win! ${playerSelection} crushes ${computerChoice}`);
    }
    else if (playerSelection == "paper" && computerChoice == "scissors"){
        return `You lose! ${playerSelection} got cut by ${computerChoice}`;}
    else if (playerSelection == "paper" && computerChoice == "rock"){
        return `You win! ${playerSelection} covered ${computerChoice}`;}
    else if (playerSelection == "scissors" && computerChoice == "paper"){
        return `You win! ${playerSelection} cut ${computerChoice}`;}
    else if (playerSelection == "scissors" && computerChoice == "rock"){
        return `You lose! ${playerSelection} got crushed by ${computerChoice}`;}
}

let pScore = 0, cScore = 0;
const choices = document.querySelectorAll('input');
choices.forEach((y) => {
    y.addEventListener('click', () => {
        w = playRound(y.id);
        console.log(w);
        pScore = checkScore(pScore, cScore)
        console.log(pScore)
    });
});

function checkScore(pScore, cScore){
    if (pScore + cScore < 5) {
        pScore++
        console.log('Hello')
    }
    else {
        console.log('done')
    }
    return pScore
}

