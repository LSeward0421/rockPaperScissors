// global variables 👇

var human = new Player({ name: "Human", emoji: "😎" });
var computer = new Player({ name: "Computer", emoji: "👾" });
var game = new Game();
var classicGameBtn = document.getElementById("classicGameBtn");
var difficultGameBtn = document.getElementById("difficultGameBtn");
var chooseFighterTitle = document.getElementById("chooseFighterSubheader");
var classicFighters = document.getElementById("classicFighters");
var difficultFighters = document.getElementById("difficultFighters");
var fighterImages = document.querySelectorAll("img");

// event listeners 👇

window.addEventListener('load', generatePlayerData);

classicGameBtn.addEventListener("click", function () {
  startGameType("classic");
});

difficultGameBtn.addEventListener("click", function () {
  startGameType("difficult");
});

addListenersFighters();

// functions 👇

function randomizeInt(max) {
  min = Math.ceil(1);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}

function generatePlayerData() {
  game.players.push(human);
  game.players.push(computer);
}

function startGameType(gameType) {
  game.gameType = gameType;
  toggle(chooseFighterTitle);
  if (gameType === "difficult") {
    toggle(difficultFighters);
  }
  toggle(classicFighters);
  toggle(difficultGameBtn);
  toggle(classicGameBtn);
}

function toggle(element) {
  element.classList.toggle("hidden");
}

function updateScoreboard() {
  var player1TokenSpan = document.getElementById("player1Token");
  var player1NameSpan = document.getElementById("player1Name");
  var player1WinsSpan = document.getElementById("player1Wins");
  var player2TokenSpan = document.getElementById("player2Token");
  var player2NameSpan = document.getElementById("player2Name");
  var player2WinsSpan = document.getElementById("player2Wins");

  player1TokenSpan.innerText = human.token;
  player1NameSpan.innerText = human.name;
  player1WinsSpan.innerText = human.numWins;
  player2TokenSpan.innerText = computer.token;
  player2NameSpan.innerText = computer.name;
  player2WinsSpan.innerText = computer.numWins;
}

generatePlayerData();
updateScoreboard();


function addListenersFighters() {
  for (var i = 0; i < fighterImages.length; i++) {
    fighterImages[i].addEventListener("click", function (e) {
      console.log(e.target.id);
      getHumanFighter(e.target.id);
      getComputerFighter(game.gameType);
      game.decideWinner();
      console.log(game);
      displayWinner();
    });
  }
}

function displayWinner() {
  chooseFighterTitle.innerText = `${game.winner} wins!`;
  updateScoreboard();
  toggle(classicFighters);
  if (game.gameType === "difficult") {
    toggle(difficultFighters);
  }
  setTimeout(function() {
    chooseFighterTitle.innerText = `Choose your fighter!!!`
    toggle(classicFighters);
  if (game.gameType === "difficult") {
    toggle(difficultFighters);
  }
  }, 2000)
}

function getHumanFighter(chosenFighter) {
  game.players[0].fighter = chosenFighter;
}

function getComputerFighter(gameType) {
  var computerFighter;

  if (gameType === "classic") {
    computerFighter = randomizeInt(4);
  } else if (gameType === "difficult") {
    computerFighter = randomizeInt(6);
  }

  if (computerFighter === 1) {
    game.players[1].fighter = "Rock";
  } else if (computerFighter === 2) {
    game.players[1].fighter = "Paper";
  } else if (computerFighter === 3) {
    game.players[1].fighter = "Scissors";
  } else if (computerFighter === 4) {
    game.players[1].fighter = "Iguana";
  } else if (computerFighter === 5) {
    game.players[1].fighter = "Alien";
  }
}

