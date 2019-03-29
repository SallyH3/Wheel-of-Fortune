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
      domUpdates.displayBuyVowelMessage();
      console.log('buyVowel Current Player', game.currentPlayer);
      game.currentPlayer.totalScore -= 100;
      domUpdates.displayScore(game);
      console.log('buyVowel Current Player AFTER', game.currentPlayer);
    }
  }
}


export default Player;