import {assert} from 'chai';
import {decreaseLives} from './lives.js';
import {INITIAL_STATE} from '../data/initial-state.js';

describe(`Check live decreasing`, () => {
  it(`Should decrease lives by 1`, () => {
    assert.equal(decreaseLives(INITIAL_STATE).lives, 2);
    assert.equal(decreaseLives({level: 1, lives: 2, time: 30}).lives, 1);
    assert.equal(decreaseLives({level: 1, lives: 8, time: 30}).lives, 7);
  });

  it(`Should return -1 if lives <= 0`, () => {
    assert.equal(decreaseLives({level: 1, lives: -2, time: 30}), -1);
    assert.equal(decreaseLives({level: 1, lives: -5, time: 30}), -1);
    assert.equal(decreaseLives({level: 1, lives: -10, time: 30}), -1);
  });
});

