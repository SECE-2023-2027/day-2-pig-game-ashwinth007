const rollBtn = document.getElementById("rolldice");
const newGameBtn = document.getElementById("newgame");

const score1El = document.getElementById("numbers");
const score2El = document.getElementById("numbers2");
const current1El = document.getElementById("current");
const current2El = document.getElementById("current2");

const diceImage = document.getElementById("dice"); // Use existing dice image from HTML

let activePlayer = 1;
let currentScore = 0;
let scores = [0, 0];

// Roll Dice Button Logic
rollBtn.addEventListener("click", () => {
    const dice = Math.floor(Math.random() * 6) + 1;

    // Show dice image
    diceImage.src = `dice${dice}.jpg`; // Use backticks for template string

    if (dice !== 1) {
        // Add to current score
        currentScore += dice;
        if (activePlayer === 1) {
            current1El.textContent = currentScore;
        } else {
            current2El.textContent = currentScore;
        }
    } else {
        // Switch player if dice == 1
        switchPlayer();
    }
});

// Switch player logic
function switchPlayer() {
    // Reset current score on UI
    if (activePlayer === 1) {
        current1El.textContent = 0;
    } else {
        current2El.textContent = 0;
    }

    // Reset current score
    currentScore = 0;

    // Toggle active player
    activePlayer = activePlayer === 1 ? 2 : 1;
}

// New Game Reset Logic
newGameBtn.addEventListener("click", () => {
    scores = [0, 0];
    currentScore = 0;
    activePlayer = 1;

    score1El.textContent = 0;
    score2El.textContent = 0;
    current1El.textContent = 0;
    current2El.textContent = 0;
    diceImage.src = "dice1.jpg"; // Reset dice image to default
});
