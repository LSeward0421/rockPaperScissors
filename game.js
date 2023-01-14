class Game {
  constructor() {
    this.players = [];
    this.gameType; 
    this.turn;
    this.winner;

    // gametype, turn and winners remain unassigned 
    
  }
  decideWinner() {
    // console.log(this.players[0].name, this.players[0].fighter);
    // console.log(this.players[1].name, this.players[1].fighter);
    if (this.players[0].fighter === this.players[1].fighter) {
      console.log(`we have a draw`);
    } else if (this.players[0].fighter === 'Rock' && this.players[1].fighter === 'Scissors' ||
    this.players[0].fighter === 'Rock' && this.players[1].fighter === 'Iguana' ||
    this.players[0].fighter === 'Paper' && this.players[1].fighter === 'Rock' ||
    this.players[0].fighter === 'Paper' && this.players[1].fighter === 'Alien' ||
    this.players[0].fighter === 'Scissors' && this.players[1].fighter === 'Paper' ||
    this.players[0].fighter === 'Scissors' && this.players[1].fighter === 'Iguana' ||
    this.players[0].fighter === 'Iguana' && this.players[1].fighter === 'Paper' ||
    this.players[0].fighter === 'Iguana' && this.players[1].fighter === 'Iguana' ||
    this.players[0].fighter === 'Alien' && this.players[1].fighter === 'Scissors' ||
    this.players[0].fighter === 'Alien' && this.players[1].fighter === 'Rock'
    ) {
      this.players[0].numWins++;
      this.winner = this.players[0].name;
      console.log(`${this.players[0].token} ${this.players[0].name} WON!!!`);
    } else {
      this.players[1].numWins++;
      this.winner = this.players[1].name
      console.log(`${this.players[1].token} ${this.players[1].name} WON!!!`);

    };
      console.log(this.players[0].numWins);
      console.log(this.players[1].numWins);
  };
  resetBoard() {
    // go back to main page view with classic and difficult options (using hide?)
    // hide change game btn
    // hide all images of fighters
    // hide 'choose your fighter'
    // show the original game selection buttons?
    // reset the sides back to 0?
  };
};
