const cards = document.querySelectorAll('.memory-card');

let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;
let player1 = document.getElementById('player1points');
let player1pointscore = 0;
let player2 = document.getElementById('player2points');
let player2pointscore = 0;

var player1getname = prompt("enter your name Player1");
var player2getname = prompt("enter your name Player2");
var player1name = document.getElementById('player1name');
var player2name = document.getElementById('player2name');

var turnCount = 0;
var winner = null;
var playerbeurt = null;
var thewinner = document.getElementById("thewinner");
var debeurt = document.getElementById("debeurt");
var cardvisibility = document.getElementById("cardvisibility");
var startgamebutton = document.getElementById("startgamebutton");
var onscreen = document.getElementById("onscreen");
var restartgamebutton = document.getElementById("restartgamebutton");

cardvisibility.style.visibility = 'hidden'
onscreen.style.visibility = 'hidden'
restartgamebutton.style.visibility = 'hidden'

player1name.innerHTML = player1getname;
player2name.innerHTML = player2getname;

function flipCard() {
    if (lockBoard) return;
    if (this === firstCard) return;

    this.classList.add('flip');

    if (!hasFlippedCard) {
        hasFlippedCard = true;
        firstCard = this;

        return;
    }

    secondCard = this;
    checkForMatch();
}

function checkForMatch() {
    let isMatch
    if ( isMatch = firstCard.dataset.framework === secondCard.dataset.framework) {
        playerscore();
    }

    isMatch ? disableCards() : unflipCards();
}

function disableCards() {
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);

    resetBoard();
}

function unflipCards() {
    lockBoard = true;

    setTimeout(() => {
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');

        resetBoard();
    }, 1500);

    beurt();
}

function resetBoard() {
    [hasFlippedCard, lockBoard] = [false, false];
    [firstCard, secondCard] = [null, null];
}

(function shuffle() {
    cards.forEach(card => {
        let randomPos = Math.floor(Math.random() * 12);
        card.style.order = randomPos;
    });
})();

function beurt() {
    turnCount++
    if (turnCount % 2) {
        playerbeurt = player2getname + " is aan de beurt";
    }
    else {
        playerbeurt = player1getname + " is aan de beurt";
    }
    debeurt.innerHTML = playerbeurt;
}

function playerscore() {
    if (turnCount % 2) {
        player2pointscore +=1;
        player2.innerHTML = player2pointscore;
    }
    else  {
        player1pointscore +=1;
        player1.innerHTML = player1pointscore;
    }
    endgame();
}

function endgame() {
    if (player1pointscore + player2pointscore < 10) {

    } else {
        whowon();
    }

}

function whowon() {
    if (player1pointscore > player2pointscore) {
        winner = player1getname + " is de Winnaar";
    }
    else if ((player1pointscore < player2pointscore)){
        winner = player2getname + " is de Winnaar";
    }
    else {
        winner = "Gelijk Spel!!";
    }
    console.log(winner);
    thewinner.innerHTML = winner;
    thewinner.style.visibility = 'visible'
    debeurt.style.visibility = 'hidden'
    restartgamebutton.style.visibility = 'visible'
    cardvisibility.style.visibility = 'hidden'
}

function startgame() {
    cardvisibility.style.visibility = 'visible'
    startgamebutton.style.visibility = 'hidden'
    onscreen.style.visibility = 'visible'
    playMusic()
}

function playMusic(){
    var music = new Audio('Muziek/R2D2Scream.mp3');
    music.play();
}

cards.forEach(card => card.addEventListener('click', flipCard));
