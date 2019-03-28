import Wheel from './Wheel.js';
import Puzzle from './Puzzle.js';
import Player from './Player.js';
import $ from 'jquery';

let domUpdates = {

  showPopup() {
    $('.popup').removeClass('hidden');
  },

  hidePopup() {
    $('.popup').addClass('hidden');
  },

  hideAnswer(game) {
    this.removeSolvedAnswer();
    let answer = game.currentPuzzle.answer.split('');
    answer.forEach((letter) => {
      if (letter === ' ' || '-' || '&') {
        $('.answer-display').append(`<p class = 'letter no-border'>${letter.toUpperCase()}</p>`);
      } else {
        $('.answer-display').append(`<p class = 'letter hidden'>${letter.toUpperCase()}</p>`);
      }
    })
  },

  removeSolvedAnswer: () => {
    $('.answer-display').empty();
  },

  enableButton() {
    $('#js-e-button').remove('disabled');
    $('#js-spin-button').remove('disabled');
  },

  displayName() {
    $('.box-name').each((i, name) => {
      $(name).text($('.player-name-input').eq(i).val());
    });
  },

  displayCategoryName(game) {
    $('.category').text(game.currentPuzzle.category.toUpperCase());
  },

  displayHint(game) {
    $('.hint').text(game.currentPuzzle.description);
  },

  startGame(game) {
    game.createPlayer($('.player-name-input').eq(0).val(), 
      $('.player-name-input').eq(1).val(), 
      $('.player-name-input').eq(2).val());
    game.beginGame(game);
    game.getPrize();
  },

  grabCurrentLetter(puzzle) {
    let currentLetter = ($('#js-cons-input').val().toUpperCase());
    return currentLetter;
  },

  grabAnswerInput(puzzle) {
    let answerInput = ($('.answer-input').val().toUpperCase());
    return answerInput;
  },

  displayScore(game) {
    game.players.forEach((player, index) => {
      $(`.js-points-${index + 1}`).text(player.roundScore);
    })
  },

  displayWinMessage() {
    $('.answer-message').text('Great job! You won the round!')
  },

  displayLetterMatch(letter) {
    $('.letter:contains("' + letter + '")').css('color', 'white' );
  },

  diplayStartMsg() {
    $('.gameplay-message').text('Please spin wheel first before guessing the letter');
  },

  displayVowelMessage() {
    $('.gameplay-message').text('You did not buy a vowel yet. Please enter a normal letter');
  },

  hideVowelInput() {
    $('.vowel-container').addClass('hidden')
  },

  grabVowel() {
    let currentVowel = ($('#js-vowel-input').val().toUpperCase());
    return currentVowel;
  },


  displayLoseTurn(wheel) {
    $('.gameplay-message').text('Your spin was LOSE A TURN, onto the next player');
  },

  displayBankrupt() {
    $('.gameplay-message').text('Your spin was BANKRUPT, onto the next player')

  },

  displayWheelValue(wheel) {
    $('.gameplay-message').text(`The current value of your wheel spin is ${wheel.currentSpin}`)
  },

  changeActivePlayer() {
    $('.player-box').css('border', '1px solid #add8e6');
  },

  displayWrongAnswerMessage() {
    $('.gameplay-message').text(`Sorry! Wrong Answer! Next player's guess`)
  },

  displayGuessedLetters(puzzle) {
    $('.guessed-letter').text(`${puzzle.guessedBank}`);
  },
}

export default domUpdates;