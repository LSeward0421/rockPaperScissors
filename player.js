class Player {
  constructor(newPlayer) {
    this.name = newPlayer.name;
    this.token = newPlayer.emoji;
    this.fighter = newPlayer.fighter;
    this.numWins = 0;
  }
  takeTurn() {
    if (this.name === game.turn) {
      game.turn = game.players[1].name;
    } else {
      game.turn = this.name;
    };
  };
 };

 