let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

function checkGuess() {
    let userGuess = parseInt(document.getElementById('userGuess').value);
    attempts++;

    if (userGuess === randomNumber) {
        document.getElementById('feedback').textContent = `Congratulations! You guessed the correct number ${randomNumber}.`;
        document.getElementById('feedback').style.color = "green";
        document.getElementById('attempts').textContent = `It took you ${attempts} attempts.`;
    } else if (userGuess > randomNumber) {
        document.getElementById('feedback').textContent = "Too high! Try again.";
        document.getElementById('feedback').style.color = "red";
    } else {
        document.getElementById('feedback').textContent = "Too low! Try again.";
        document.getElementById('feedback').style.color = "red";
    }
}
