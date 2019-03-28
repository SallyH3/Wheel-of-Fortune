import Game from './Game.js';
import data from './data.js';
import domUpdates from './domUpdates.js';

class Wheel {
  constructor() {
    this.values = [];
    this.currentSpin = [];
  }

  getRandomWheel(game) {
    let random = data.wheel[Math.floor(Math.random() * data.wheel.length)];
    this.currentSpin = random;
    if (this.currentSpin === 'LOSE A TURN') {
      domUpdates.displayLoseTurn(this);
      debugger
      game.switchPlayers();
    }
    if (this.currentSpin === 'BANKRUPT') {
      // game.currentPlayer.roundScore === 0;
      domUpdates.displayBankrupt();
      // game.switchPlayers();
    } 
    else {
      domUpdates.displayWheelValue(this);
    }
    return this.currentSpin;
  }
}

export default Wheel;