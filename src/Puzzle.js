import Game from './Game.js';
import Player from './Player.js';
import domUpdates from './domUpdates.js';
import Wheel from './Wheel.js';

class Puzzle {
  constructor(puzzle) {
    this.guessedBank = [];
    this.category = puzzle.category;
    this.description = puzzle.description;
    this.answer = puzzle.correct_answer;
    this.numWords = puzzle.number_of_words;
  }

  checkForVowel(letterInput, game) {
    let vowels = 'aeiou'.toUpperCase().split('');
    if (vowels.includes(letterInput)) {
      domUpdates.displayVowelMessage();
    } else {
      this.checkUserGuess(letterInput, game);      
    }
  }

  checkUserGuess(letterInput, game) {
    let answer = this.answer.toUpperCase().split('');
    let foundMatch = false;
    answer.forEach(letter => {
      if (letter === letterInput) {
        domUpdates.displayLetterMatch(letterInput);
        this.guessedBank.push(letterInput);
        this.guessedBank = [...new Set(this.guessedBank)];
        game.currentPlayer.getPlayerScore(game);
        domUpdates.displayGuessedLetters(this);

        foundMatch = true;
      }
    });
    if (!foundMatch) {
      game.switchPlayers();
    }
  }
  solvePuzzle(game) {
    let solveInput = domUpdates.grabAnswerInput(this);
    let answer = game.currentPuzzle.answer.toUpperCase();
    if (solveInput === answer) {
      domUpdates.displayWinMessage();
      game.currentPlayer.getPlayerScore(game);
      game.getNextRoundPuzzle();
    } else {
      domUpdates.displayWrongAnswerMessage();
      //add a message that indicates they got it wrong, too.
      game.switchPlayers();
    }
  }


}

export default Puzzle;