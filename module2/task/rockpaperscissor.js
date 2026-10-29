const choices = ["rock", "paper", "scissor"];
const userChoice = prompt("Choose rock, paper, or scissor:").toLowerCase();
const computerChoice = choices[Math.floor(Math.random() * choices.length)];

if (userChoice === computerChoice) {
    alert(`You chose ${userChoice}. The computer chose ${computerChoice}. It's a tie!`);
} else if (
    (userChoice === "rock" && computerChoice === "scissor") ||
    (userChoice === "paper" && computerChoice === "rock") ||
    (userChoice === "scissor" && computerChoice === "paper")
) {
    alert(`You chose ${userChoice}. The computer chose ${computerChoice}. You win!`);
} else {
    alert(`You chose ${userChoice}. The computer chose ${computerChoice}. You lose!`);
}