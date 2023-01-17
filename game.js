class Game {
  constructor() {
    this.players = [];
    this.gameType;
    this.turn;
    this.winner;
  }
  
  decideWinner() {
    if (this.players[0].fighter === this.players[1].fighter) {
      this.winner = "No one";
    } else if (
      (this.players[0].fighter === "Rock" &&
        this.players[1].fighter === "Scissors") ||
      (this.players[0].fighter === "Rock" &&
        this.players[1].fighter === "Iguana") ||
      (this.players[0].fighter === "Paper" &&
        this.players[1].fighter === "Rock") ||
      (this.players[0].fighter === "Paper" &&
        this.players[1].fighter === "Alien") ||
      (this.players[0].fighter === "Scissors" &&
        this.players[1].fighter === "Paper") ||
      (this.players[0].fighter === "Scissors" &&
        this.players[1].fighter === "Iguana") ||
      (this.players[0].fighter === "Iguana" &&
        this.players[1].fighter === "Paper") ||
      (this.players[0].fighter === "Iguana" &&
        this.players[1].fighter === "Iguana") ||
      (this.players[0].fighter === "Alien" &&
        this.players[1].fighter === "Scissors") ||
      (this.players[0].fighter === "Alien" &&
        this.players[1].fighter === "Rock")
    ) {
      this.players[0].numWins++;
      this.winner = this.players[0].name;
    } else {
      this.players[1].numWins++;
      this.winner = this.players[1].name;
    }
  }

  resetBoard() {
    this.players[0].numWins = 0;
    this.players[1].numWins = 0;
    updateScoreboard();
    show(classicGameBtn);
    show(difficultGameBtn);
    hideImages();
    hide(chooseFighterTitle);
    show(chooseGameTitle);
    hide(changeGameBtn);
  }

  checkGameOver() {
    if (this.players[0].numWins === 3 || this.players[1].numWins === 3) {
      return true;
    } else {
      return false;
    }
  }

  getFinalWinner() {
    if (this.players[0].numWins === 3) {
      return this.players[0].name;
    } else {
      return this.players[1].name;
    }
  }
}
