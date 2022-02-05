//maximum Score (Playing To)
const number = document.querySelector('#maxScore');
const form = document.querySelector('form');
var winningScore = 5;
form.addEventListener("input", function(e){
    e.preventDefault();
    winningScore = number.value;
    //maximum winning score
    console.log(winningScore)
})

//Game Over
let isGameOver = false; 
function gameOver(){
    if (p1newScore == winningScore||p2newScore == winningScore) { 
        isGameOver = true;
    }
}

//p1
var p1Score = document.querySelector('#p1Score');
var p1newScore = 0;
const p1Button = document.querySelector('#p1Button');
p1Button.addEventListener("click", function(){
    if (!isGameOver) {
        p1newScore++;
        p1Score.innerText = p1newScore;
        gameOver();
    }

    if (p1newScore == winningScore) {
        p1Score.classList.add('winner');
        p2Score.classList.add('loser');
        p1Button.disabled = true;
        p2Button.disabled = true;
    }
})

//p2
var p2Score = document.querySelector('#p2Score');
var p2newScore = 0;
const p2Button = document.querySelector('#p2Button');
p2Button.addEventListener("click", function(){
    if (!isGameOver) {
        p2newScore++;
        p2Score.innerText = p2newScore;
        gameOver();
    }
    if (p2newScore == winningScore) {
        p2Score.classList.add('winner');
        p1Score.classList.add('loser');
        p1Button.disabled = true;
        p2Button.disabled = true;
    }
})

//Reset Button
const reset = document.querySelector('#reset');
reset.addEventListener("click", function(){
    isGameOver = false;
    p1Score.innerText = 0;
    p1newScore = 0;
    p2Score.innerText = 0;
    p2newScore = 0;
    // p1Score.classList.add("blackScore");
    // p2Score.classList.add("blackScore");
    p2Score.classList.remove('winner', 'loser');
    p1Score.classList.remove('winner', 'loser');
    p1Button.disabled = false;
    p2Button.disabled = false;
})



// if (p1newScore == parseInt(maxScore.value)) {
//     p1Score.classList.add("greenScore")
//     p2Score.classList.add("redScore")
// } else if(p2newScore == parseInt(maxScore.value)) {
//     p2Score.classList.add("greenScore")
//     p1Score.classList.add("redScore")
// }
