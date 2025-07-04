let secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log(secretNumber);
let score = 20;
let highscore = 0;
const msg=document.querySelector('.message');
const num=document.querySelector('.number');
const high=document.querySelector('.highscore');
const scored=document.querySelector('.score');
const guessing = document.querySelector('.guess');
const btn = document.querySelector('.check');
const ls=document.querySelector('.label-score');
const lhs=document.querySelector('.label-highscore');
btn.addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);

    if (!guess) {
        document.querySelector('.message').textContent = 'No number!';
    } else if (guess === secretNumber) {
        msg.textContent = 'Correct Number!';
        num.textContent = secretNumber;
        document.body.style.backgroundColor = 'green';
        if (score > highscore) {
            highscore = score;
            high.textContent = highscore;
        }
    } else if (guess !== secretNumber) {
        if (score > 1) {
            msg.textContent =
                guess > secretNumber ? 'Too high!' : 'Too low!';
            score--;
            scored.textContent = score;
        } else {
            msg.textContent = 'You lost the game!';
            scored.textContent = 0;
            document.body.style.backgroundColor = 'red';   
            btn.classList.add('hidden');
            btn.classList.remove('check');
            high.classList.add('hidden');
            high.classList.remove('highscore');
            ls.classList.add('hidden');
            ls.classList.remove('label-score');
            lhs.classList.add('hidden');
            lhs.classList.remove('label-highscore');
            scored.classList.add('hidden');
            scored.classList.remove('score');

        }
    }
});

document.querySelector('.again').addEventListener('click', function () {
    score = 20;
   scored.textContent = score;
   document.body.style.backgroundColor = 'black';
   btn.classList.add('check');
   btn.classList.remove('hidden');
   high.classList.add('highscore');
    high.classList.remove('hidden');
    ls.classList.add('label-score');
    ls.classList.remove('hidden');
    lhs.classList.add('label-highscore');   
    lhs.classList.remove('hidden');
    scored.classList.add('score');
    scored.classList.remove('hidden');

});