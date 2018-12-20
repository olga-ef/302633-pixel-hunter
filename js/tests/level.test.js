import {assert} from 'chai';
import {changeLevel} from '../game/level';
import {INITIAL_STATE} from '../util/config';

describe(`Check level change`, () => {
  it(`should increase level by 1`, () => {
    assert.equal(changeLevel(INITIAL_STATE).level, 1);
    assert.equal(changeLevel({level: 10, time: 30, answers: [], lives: 3}).level, 11);
    assert.equal(changeLevel({level: 3, time: 30, answers: [], lives: 3}).level, 4);
    assert.equal(changeLevel({level: 7, time: 30, answers: [], lives: 3}).level, 8);
  });

  it(`Level should not be negative number`, () => {
    assert.throws(() => changeLevel({level: -1, time: 30, answers: [], lives: 3}).level, /Level should not be negative number/);
  });

  it(`Level should be a number`, () => {
    assert.throws(() => changeLevel({level: null, time: 30, answers: [], lives: 3}).level, /Level should be a number/);
    assert.throws(() => changeLevel({level: `abc`, time: 30, answers: [], lives: 3}).level, /Level should be a number/);
  });
});

