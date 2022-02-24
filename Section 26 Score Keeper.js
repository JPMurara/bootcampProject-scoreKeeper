const btnPlayer1 = document.querySelector('#btnPlayer1');
const btnPlayer2 = document.querySelector('#btnPlayer2');
const btnReset = document.querySelector('#btnReset');
let player1Score = document.querySelector('#player1Score');
let player2Score = document.querySelector('#player2Score');
let player1IntScore = 0;
let player2IntScore = 0;
const playingTo = document.querySelector('#playingTo');


btnPlayer1.addEventListener('click', function () {
    if (parseInt(playingTo.value) !== player1IntScore && parseInt(playingTo.value) !== player2IntScore) {
        newScorePlayer1 = player1IntScore += 1;
        player1Score.innerHTML = newScorePlayer1;
    }
    if (parseInt(playingTo.value) === player1IntScore || parseInt(playingTo.value) === player2IntScore) {
        btnPlayer1.disabled = true;
        btnPlayer2.disabled = true;
        whoWins();
    }

})

btnPlayer2.addEventListener('click', function () {
    if (parseInt(playingTo.value) !== player1IntScore && parseInt(playingTo.value) !== player2IntScore) {
        newScorePlayer2 = player2IntScore += 1;
        player2Score.innerHTML = newScorePlayer2;
    }
    if (parseInt(playingTo.value) === player1IntScore || parseInt(playingTo.value) === player2IntScore) {
        btnPlayer1.disabled = true;
        btnPlayer2.disabled = true;
        whoWins();

    }
})

btnReset.addEventListener('click', function () {
    resetFunc();
})

playingTo.addEventListener('change', function () {
    resetFunc();
})

const resetFunc = () => {
    newScorePlayer1 = 0;
    newScorePlayer2 = 0;
    player1IntScore = 0;
    player2IntScore = 0;
    player1Score.innerHTML = newScorePlayer1;
    player2Score.innerHTML = newScorePlayer1;
    btnPlayer1.disabled = false;
    btnPlayer2.disabled = false;
    player1Score.classList.remove('winner');
    player1Score.classList.remove('looser');
    player2Score.classList.remove('winner');
    player2Score.classList.remove('looser');
}

const whoWins = () => {
    if (newScorePlayer1 === parseInt(playingTo.value)) {
        player1Score.classList.add('winner');
        player2Score.classList.add('looser');
    }
    else {
        player2Score.classList.add('winner');
        player1Score.classList.add('looser');
    }
}