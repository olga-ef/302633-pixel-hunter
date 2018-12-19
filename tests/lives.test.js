import {assert} from 'chai';
import {decreaseLives} from './js/game/lives.js';
import {INITIAL_STATE} from './js/util/config.js';

describe(`Check live decreasing`, () => {
  it(`Should decrease lives by 1`, () => {
    assert.equal(decreaseLives(INITIAL_STATE).lives, 2);
    assert.equal(decreaseLives({level: 1, lives: 2, time: 30}).lives, 1);
    assert.equal(decreaseLives({level: 1, lives: 8, time: 30}).lives, 7);
  });

  it(`Lives should be a number`, () => {
    assert.throws(() => decreaseLives({level: 1, lives: [], time: 30}), /state.live should be a number/);
    assert.throws(() => decreaseLives({level: 1, lives: undefined, time: 30}), /state.live should be a number/);
  });
});

