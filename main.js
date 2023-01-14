// global variables 👇

var human = new Player({ name: 'Human', emoji: '😎' });
var computer = new Player({ name: 'Computer', emoji: '👾' });
var game = new Game();


// event listeners 👇

// need to add load page -> generate player data

// functions 👇
function randomizeInt(max) {
  min = Math.ceil(1);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
};

function generatePlayerData() {
  game.players.push(human);
  game.players.push(computer);
  console.log(game.players);
}

generatePlayerData();

function getHumanFighter() {
  game.players[0].fighter = 'Alien';
  // how to make dynamic?
    // based on user click, e.target?

};

 
function getComputerFighter(gameType) {
  var computerFighter;

  if (gameType === 'classic') {
    computerFighter = randomizeInt(4);
  } else if (gameType === 'difficult') {
    computerFighter = randomizeInt(6);
  };

  if (computerFighter === 1) {
    game.players[1].fighter = 'Rock';
  } else if (computerFighter === 2) {
    game.players[1].fighter = 'Paper';
  } else if (computerFighter === 3) {
    game.players[1].fighter = 'Scissors';
  } else if (computerFighter === 4) {
    game.players[1].fighter = 'Iguana';
  } else if (computerFighter === 5) {
    game.players[1].fighter = 'Alien';
  };
};

getHumanFighter();
getComputerFighter('difficult');

game.decideWinner();


