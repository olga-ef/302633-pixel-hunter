import {assert} from 'chai';
import {tick} from './js/game/time.js';
import {INITIAL_STATE} from './js/util/config.js';

describe(`Check live decreasing`, () => {
  it(`Should decrease time by 1`, () => {
    assert.equal(tick(INITIAL_STATE).time, 29);
    assert.equal(tick({level: 1, lives: 2, time: 25}).time, 24);
    assert.equal(tick({level: 1, lives: 8, time: 10}).time, 9);
  });
  it(`Should return -1 if time <= 0`, () => {
    assert.equal(tick({level: 1, lives: 5, time: -30}), -1);
    assert.equal(tick({level: 1, lives: 5, time: -25}), -1);
    assert.equal(tick({level: 1, lives: 5, time: 0}), -1);
  });
});
