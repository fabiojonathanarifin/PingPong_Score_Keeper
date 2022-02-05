//Max Score
const maxScore = {
    playingTo: document.querySelector('#maxScore'),
    form: document.querySelector('form'),
    winningScore: 5
}

maxScore.form.addEventListener("input", function(e) {
    e.preventDefault();
    maxScore.winningScore = maxScore.playingTo.value;
    console.log(maxScore.winningScore)
})



//Players
const p1 = {
    score: 0,
    button: document.querySelector('#p1Button'),
    scoreDisplay: document.querySelector('#p1Score')
}

const p2 = {
    score: 0,
    button: document.querySelector('#p2Button'),
    scoreDisplay: document.querySelector('#p2Score')
}

let isGameOver = false; 
function updateScore(player, opponent){
    function gameOver(){
        if (player.score == maxScore.winningScore||opponent.score == maxScore.winningScore) { 
            isGameOver = true;
        }
    }
    if (!isGameOver) {
        player.score++;
        player.scoreDisplay.innerText = player.score;
        gameOver();
    }
    if (isGameOver) {
        player.scoreDisplay.classList.add('winner');
        opponent.scoreDisplay.classList.add('loser');
        player.button.disabled = true;
        opponent.button.disabled = true;
    }
}

p1.button.addEventListener('click', function () {updateScore(p1, p2)});
p2.button.addEventListener('click', function () {updateScore(p2, p1)});

//Reset
const reset = document.querySelector('#reset')
reset.addEventListener('click', resetButton)

function resetButton() {
    isGameOver = false
    for (let p of [p1, p2]){
        p.scoreDisplay.innerText = 0;
        p.score = 0;
        p.scoreDisplay.classList.remove('winner', 'loser');
        p.button.disabled = false;
    }
}