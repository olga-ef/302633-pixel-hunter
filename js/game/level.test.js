import {assert} from 'chai';
import {changeLevel} from './level.js';
import {INITIAL_STATE} from '../data/initial-state.js';

describe(`Check level change`, () => {
  it(`should change levels`, () => {
    assert.equal(changeLevel(INITIAL_STATE, 1).level, 1);
    assert.equal(changeLevel(INITIAL_STATE, 10).level, 10);
    assert.equal(changeLevel(INITIAL_STATE, 3).level, 3);
    assert.equal(changeLevel(INITIAL_STATE, 7).level, 7);
  });

  it(`Level should not be negative number`, () => {
    assert.throws(() => changeLevel(INITIAL_STATE, -1).level, /Level should not be negative number/);
  });

  it(`Level should be a number`, () => {
    assert.throws(() => changeLevel(INITIAL_STATE, []).level, /Level should be a number/);
    assert.throws(() => changeLevel(INITIAL_STATE, `abc`).level, /Level should be a number/);
  });
});

