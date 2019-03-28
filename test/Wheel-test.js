import Wheel from '../src/Wheel.js';
import Game from '../src/Game.js';
import domUpdates from '../src/domUpdates.js';
import chai from 'chai';
import spies from 'chai-spies';
chai.use(spies);
const expect = chai.expect;

chai.spy.on(domUpdates, 'displayLoseTurn', () => true);
chai.spy.on(domUpdates, 'displayBankrupt', () => true);
chai.spy.on(domUpdates, 'displayWheelValue', () => true);

describe('Wheel', function() {
  let wheel;
  let game;
  beforeEach(function() {
    wheel = new Wheel();
    game = new Game();
  })
  
  it('should have default properties', function() {
    expect(wheel.values).to.deep.equal([]);
    expect(wheel.currentSpin).to.deep.equal([]);
  });

  it.skip('should return a wheel value', function() {
    wheel.getRandomWheel(game)
    expect(wheel.currentSpin[0]) .to.have.a.lengthOf(1);
  });

  it('should be an instance of wheel', function() {

    expect(wheel).to.be.an.instanceof(Wheel);
  });
})