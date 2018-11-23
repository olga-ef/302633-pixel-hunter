import {assert} from 'chai';
import {decreaseTime} from './time.js';
import {INITIAL_STATE} from '../data/initial-state.js';

describe(`Check live decreasing`, () => {
  it(`Should decrease time by 1`, () => {
    assert.equal(decreaseTime(INITIAL_STATE).time, 29);
    assert.equal(decreaseTime({level: 1, lives: 2, time: 25}).time, 24);
    assert.equal(decreaseTime({level: 1, lives: 8, time: 10}).time, 9);
  });
  it(`Should return -1 if time <= 0`, () => {
    assert.equal(decreaseTime({level: 1, lives: 5, time: -30}), -1);
    assert.equal(decreaseTime({level: 1, lives: 5, time: -25}), -1);
    assert.equal(decreaseTime({level: 1, lives: 5, time: 0}), -1);
  });
});
