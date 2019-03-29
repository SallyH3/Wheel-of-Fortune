import Game from './Game.js';
import data from './data.js';
import domUpdates from './domUpdates.js';

class Wheel {
  constructor(game) {
    this.values = [];
    this.currentSpin = [];
    this.game = game;
  }

  getRandomWheel() {
    let random = data.wheel[Math.floor(Math.random() * data.wheel.length)];
    this.currentSpin = random;
    if (this.currentSpin === 'LOSE A TURN') {
      domUpdates.displayLoseTurn();
      console.log(this.game.currentPlayer);
      this.game.switchPlayers();
      console.log(this.game.currentPlayer);
    }
    if (this.currentSpin === 'BANKRUPT') {
      this.game.currentPlayer.totalScore = 0;
      domUpdates.displayScore(this.game);
      console.log(this.game.currentPlayer);
      domUpdates.displayBankrupt();
      this.game.switchPlayers();
      console.log(this.game.currentPlayer);
    } 
    else {
      domUpdates.displayWheelValue(this);
    }
    return this.currentSpin;
  }
}

export default Wheel;