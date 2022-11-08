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
        scores[1]++;
    }
    else if (playerSelection == "rock" && computerChoice == "scissors"){
        console.log(`You win! ${playerSelection} crushes ${computerChoice}`);
        scores[0]++;
    }
    else if (playerSelection == "paper" && computerChoice == "scissors"){
        console.log(`You lose! ${playerSelection} got cut by ${computerChoice}`);
        scores[1]++;
    }
    else if (playerSelection == "paper" && computerChoice == "rock"){
        console.log(`You win! ${playerSelection} covered ${computerChoice}`);
        scores[0]++;
    }
    else if (playerSelection == "scissors" && computerChoice == "paper"){
        console.log(`You win! ${playerSelection} cut ${computerChoice}`);
        scores[0]++;
    }
    else if (playerSelection == "scissors" && computerChoice == "rock"){
        console.log(`You lose! ${playerSelection} got crushed by ${computerChoice}`);
        scores[1]++;
    }
}

let scores = [0,0]
const choices = document.querySelectorAll('input');
choices.forEach((y) => {
    y.addEventListener('click', () => {
        w = playRound(y.id);
        scores = checkScore([scores[0], scores[1]])
        
    });
});

function checkScore(scores){
    if (scores[0]>2){
    alert(`Game over -- player wins!`);}
    else if (scores[1] > 2) {
        alert(`Game over -- computer wins!`);}
    else {
        console.log(`Player: ${scores[0]}, Computer: ${scores[1]}`);
        pScore = document.querySelectorAll(".results .scores");
        let i = 0;
        pScore.forEach((c) => {
            c.innerHTML = `${scores[i]}`;
            i++;
        })
        console.log(pScore);
    }
    
    return scores;
}

