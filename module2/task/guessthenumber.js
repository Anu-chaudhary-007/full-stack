const number = Math.floor(Math.random() * 10) + 1;
const guess = prompt("Guess a number from 1 to 10:");

if (Number(guess) === number) {
    alert("You guessed it!");
} else {
    alert(`Sorry, the number was ${number}.`);
}