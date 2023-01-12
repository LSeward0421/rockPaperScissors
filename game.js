class Game {
  constructor() {
    this.players = [];
    this.gameType; 
    this.turn;
    this.winner;

    // gametype, turn and winners remain unassigned 
    
  }
  decideWinner() {
    // rock > scissors
    // paper > rock
    // scissors > paper
    // 
    // rock > scissors & lizard
    // paper > rock & alien
    // scissors > paper & lizard
    // lizard > paper & alien
    // alien > scissors & rock
  }
  resetBoard() {
    // go back to main page view with classic and difficult options (using hide?)
    // hide change game btn
    // hide all images of fighters
    // hide 'choose your fighter'
    // show the original game selection buttons?
    // reset the sides back to 0?
  }
}
