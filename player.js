class Player {
  constructor(newPlayer) {
    this.name = newPlayer.name;
    this.token = newPlayer.emoji;
    this.fighter = newPlayer.fighter;
    this.numWins = 0;
  }
  takeTurn(selection) {
   this.fighter = selection;
  };
 };

 