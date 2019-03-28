import domUpdates from './domUpdates.js';
import $ from 'jquery';
import data from './data.js';
import './css/base.css';
import Game from './Game.js';
import Wheel from './Wheel.js';
import Puzzle from './Puzzle.js';

let game = new Game();

console.log(game);

$('.start-button').on('click', function() {
  domUpdates.startGame(game);
  domUpdates.displayCategoryName(game);
  domUpdates.displayHint(game); 
  domUpdates.diplayStartMsg();
  game.setCurrentPlayer();
  domUpdates.enableButton();
  $('.start-button').hide('');
  $('.button').prop('disabled', false).css('color', 'white');
  $('.player-name-input').hide();
});

$('.quit-button').on('click', function() {
  location.reload(true);
});

$('#js-spin-button').on('click', function() {
  game.wheel.getRandomWheel(game);
  game.getPrize();

});

$('#js-solve-button').on('click', function(e) {
  e.preventDefault();
  domUpdates.showPopup();
  console.log('currentPlayer:', game.currentPlayer);
});

$('.answer-submit').on('click', function(e) {
  e.preventDefault();
  // domUpdates.removeSolvedAnswer();
  game.currentPuzzle.solvePuzzle(game);
  domUpdates.displayScore(game);
  console.log('answer correct round over', game.currentPlayer);
});

$('#js-submit-button').on('click', function(e) {
  e.preventDefault();
  let letterInput = domUpdates.grabCurrentLetter();
  game.currentPuzzle.checkForVowel(letterInput, game);
  $('.input').val('');
});

// $('#js-vowel-submit-button').on('click', function () {
//   let letterInput = domUpdates.grabVowel ();
//   game.currentPuzzle.checkUserGuess ();
// });

$('.exit-solve').on('click', function(e) {
  e.preventDefault();
  domUpdates.hidePopup();
});

$('#js-buy-vowel-button').on('click', function() {
  // domUpdates.displayVowelInput();
  console.log('test')
  game.currentPlayer.buyVowel(game);
});
