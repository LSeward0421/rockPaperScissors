// global variables 👇

var human = new Player({ name: "Human", emoji: "😎" });
var computer = new Player({ name: "Computer", emoji: "👾" });
var game = new Game();
var chooseFighterTitle = document.getElementById("chooseFighterSubheader");
var chooseGameTitle = document.getElementById("chooseGameTypeHeader");
var player1Token = document.getElementById("player1Token");
var player1Name = document.getElementById("player1Name");
var player1Wins = document.getElementById("player1Wins");
var player2Token = document.getElementById("player2Token");
var player2Name = document.getElementById("player2Name");
var player2Wins = document.getElementById("player2Wins");
var classicGameBtn = document.getElementById("classicGameBtn");
var difficultGameBtn = document.getElementById("difficultGameBtn");
var classicFighters = document.getElementById("classicFighters");
var difficultFighters = document.getElementById("difficultFighters");
var fighterImages = document.querySelectorAll("img");
var changeGameBtn = document.getElementById("changeGameBtn");
var rockImg = document.querySelector(".rock");
var paperImg = document.querySelector(".paper");
var scissorsImg = document.querySelector(".scissors");
var iguanaImg = document.querySelector(".iguana");
var alienImg = document.querySelector(".alien");
var humanChoiceImg = document.getElementById("humanChoice");
var computerChoiceImg = document.getElementById("computerChoice");
var finalWinnerTitle = document.getElementById("finalWinnerDisplay");

// event listeners 👇

window.addEventListener("load", function () {
  generatePlayerData();
  updateScoreboard();
  addListenersFighters();
});

classicGameBtn.addEventListener("click", function () {
  startGameType("classic");
});

difficultGameBtn.addEventListener("click", function () {
  startGameType("difficult");
});

changeGameBtn.addEventListener("click", changeGameView);


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

function hide(element) {
  element.classList.add("hidden");
}

function show(element) {
  element.classList.remove("hidden");
}

function hideImages() {
  for (var i = 0; i < fighterImages.length; i++) {
    hide(fighterImages[i]);
  }
}

function showImages() {
  for (var i = 0; i < fighterImages.length; i++) {
    show(fighterImages[i]);
  }
}

function startGameType(gameType) {
  hide(chooseGameTitle);
  game.gameType = gameType;
  toggle(chooseFighterTitle);
  show(changeGameBtn);
  showImages();
  if (gameType === "classic") {
    hide(alienImg);
    hide(iguanaImg);
  }
  toggle(difficultGameBtn);
  toggle(classicGameBtn);
}

function toggle(element) {
  element.classList.toggle("hidden");
}

function updateScoreboard() {
  player1Token.innerText = human.token;
  player1Name.innerText = human.name;
  player1Wins.innerText = human.numWins;
  player2Token.innerText = computer.token;
  player2Name.innerText = computer.name;
  player2Wins.innerText = computer.numWins;
}

function addListenersFighters() {
  for (var i = 0; i < fighterImages.length; i++) {
    fighterImages[i].addEventListener("click", function (e) {
      getHumanFighter(e.target.id);
      getComputerFighter(game.gameType);
      game.decideWinner();
      displayWinner();
    });
  }
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

function displayWinner() {
  chooseFighterTitle.innerText = `${game.winner} wins!`;
  displayChoices();
  updateScoreboard();
  changeGameBtn.disabled = true;
  changeGameBtn.style.cursor = "none";
  if (game.checkGameOver()) {
    finalWinnerTitle.innerText = `Game over! ${game.getFinalWinner()} won best of 5!!!`;
  }
  setTimeout(function () {
    changeGameBtn.disabled = false;
    humanChoiceImg.innerHTML = "";
    computerChoiceImg.innerHTML = "";
    finalWinnerTitle.innerText = "";
    if (game.checkGameOver()) {
      game.resetBoard();
    } else {
      switchToFighterChoices();
    }
  }, 3000);
}

function changeGameView() {
  hideImages();
  show(chooseGameTitle);
  hide(chooseFighterTitle);
  show(classicGameBtn);
  show(difficultGameBtn);
}

function switchToFighterChoices() {
  chooseFighterTitle.innerText = `Choose your fighter!!!`;
  changeGameBtn.style.cursor = "pointer";
  show(rockImg);
  show(paperImg);
  show(scissorsImg);

  if (game.gameType === "difficult") {
    show(iguanaImg);
    show(alienImg);
  }
}

function displayChoices() {
  hideImages();
  for (var i = 0; i < fighterImages.length; i++) {
    if (game.players[0].fighter === fighterImages[i].id) {
      console.log(fighterImages[i], game.players[0].fighter);
      console.log("image src", fighterImages[i].getAttribute("src"));
      humanChoiceImg.innerHTML = `<img src="${fighterImages[i].getAttribute(
        "src"
      )}" alt="Human Choice Image" />`;
    }
    if (game.players[1].fighter === fighterImages[i].id) {
      computerChoiceImg.innerHTML = `<img src="${fighterImages[i].getAttribute(
        "src"
      )}" alt="Computer Choice Image" />`;
    }
  }
}
