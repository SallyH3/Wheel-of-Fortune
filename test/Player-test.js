import Player from '../src/Player.js';
import domUpdates from '../src/domUpdates.js';
import chai from 'chai';
const expect = chai.expect;
import spies from 'chai-spies';
import Game from '../src/Game.js';
chai.use(spies);

chai.spy.on(domUpdates, 'solvePuzzle', () => true);
chai.spy.on(domUpdates, 'getPlayerScore', () => true);

describe('Player', function() {
  let player;
  let game;
  beforeEach(function() {
    player = new Player();
    game = new Game();
  });
  
  it('should have default properties', function() {
    expect(player.name).to.equal(player.name);
    player.totalScore = 0;
    player.totalScore = 0;
  })

  it('should be an instance of Player', function() {

    expect(player).to.be.an.instanceof(Player);
  });
});