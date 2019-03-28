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
    if (game.currentPlayer.totalScore > 100) {
      domUpdates.displayVowelInput();
      game.currentPlayer = this.totalScore - 100
      // when enabled, player can enter in 1 vowel and if it's in the letter if will show up on the puzzle bank
      if (game.currentPlayer.totalScore < 100) {
        domUpdates.hideVowelInput();
        domUpdates.displayNoMoneyMessage();
      // domUpdates display not enough cash message
      // buy vowel is still disabled
      }
    }
  }
}


export default Player;