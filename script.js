var title = document.querySelector("h1");
var dice1 = document.querySelector(".img1");
var dice2 = document.querySelector(".img2");

var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

if (randomNumber1 === randomNumber2) {
  title.textContent = "Draw!";
} else if (randomNumber1 > randomNumber2) {
  title.textContent = "Player 1 Wins!";
} else {
  title.textContent = "Player 2 Wins!";
}

dice1.setAttribute("src", "images/dice" + randomNumber1 + ".png");
dice2.setAttribute("src", "images/dice" + randomNumber2 + ".png");