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

    // Always human vs comp which is two instances of player
    // can access game properties 
    // if the player name is strictly equal to game this.turn
      // THEN this.turn is assigned to that first players name
    // If NOT then it is the opponent's turn
 