import domUpdates from './domUpdates.js';
import Puzzle from './Puzzle.js';
import Wheel from './Wheel.js';

class Player {
  constructor(name, totalScore = 0) {
    this.name = name;
    this.totalScore = totalScore;
  }

  getPlayerScore(game) {
    game.currentPlayer.totalScore += game.currentPrize;
    domUpdates.displayScore(game);
  }

  buyVowel(game) {
    if (game.currentPlayer.totalScore < 100 ) {
      domUpdates.hideVowelInput();
      return domUpdates.displayNoMoneyMessage();
    } else { 
      domUpdates.displayVowelInput();
      console.log('in buy vowel', game.currentPlayer.totalScore);
      domUpdates.displayBuyVowelMessage();
      // domUpdates.displayWheelValue(wheel);
      game.currentPlayer.totalScore -= 100;
    }
  }
}


export default Player;