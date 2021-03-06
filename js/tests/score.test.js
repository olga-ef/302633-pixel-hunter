import {assert} from 'chai';
import calculateScore from '../game/score.js';

const Result = {
  FIRST: [`correct`, `correct`, `correct`, `correct`, `correct`, `correct`, `wrong`, `wrong`, `wrong`, `wrong`],
  SECOND: [`correct`, `correct`, `correct`, `correct`, `correct`, `correct`, `correct`, `correct`, `correct`, `correct`],
  THIRD: [`fast`, `fast`, `fast`, `fast`, `fast`, `fast`, `fast`, `fast`, `fast`, `fast`],
  FORTH: [`slow`, `slow`, `slow`, `slow`, `slow`, `slow`, `slow`, `slow`, `slow`, `slow`],
  FIFTH: [`fast`, `fast`, `fast`, `fast`, `fast`, `correct`, `correct`, `correct`, `slow`, `slow`],
  SIXTH: [`fast`, `fast`, `slow`, `slow`, `slow`, `slow`, `correct`, `correct`, `correct`, `correct`]
};

describe(`Check calculating score`, () => {
  it(`should return object with finalScore and number of answers of each types`, () => {
    assert.deepEqual(calculateScore(Result.SECOND, 3), {correct: 10, fast: 0, slow: 0, finalScore: 1150});
    assert.deepEqual(calculateScore(Result.SIXTH, 0), {correct: 10, fast: 2, slow: 4, finalScore: 900});
  });

  it(`should calculate score correctly`, () => {
    // Если игрок ответил на все вопросы и не быстро, и не медленно, и у него остались все жизни, то функция должна вернуть 1150 очков;
    assert.equal(calculateScore(Result.SECOND, 3).finalScore, 1150);
    // Если игрок ответил на все вопросы быстро, и у него остались все жизни, функция возвращает 1650 очков
    assert.equal(calculateScore(Result.THIRD, 3).finalScore, 1650);
    //  Если ответил на все вопросы медленно, и у него осталось 3 жизни, функция возвращает 650 очков
    assert.equal(calculateScore(Result.FORTH, 3).finalScore, 650);
    // Если ответил на 5 вопросов быстро, на 2 медленно , на 3 - нормально, и осталась 1 жизнь, функция возвращает 1200 очков
    assert.equal(calculateScore(Result.FIFTH, 1).finalScore, 1200);
    // Если ответил на 2 вопросов быстро, на 4 медленно , на 4 - нормально, и осталась 0 жизней, функция возвращает 900 очков
    assert.equal(calculateScore(Result.SIXTH, 0).finalScore, 900);
  });

  it(`should return -1 when less then 10 answers is right`, () => {
    assert.equal(calculateScore(Result.FIRST, 3).finalScore, -1);
  });

  it(`should not allow set negative values in  level`, () => {
    assert.throws(() => calculateScore(Result.FIRST, -2), /Lives should not be negative value/);
  });

  it(`First parameter should be array`, () => {
    assert.throws(() => calculateScore({}, 2), /First parameter should be array/);
    assert.throws(() => calculateScore(`abc`, 2), /First parameter should be array/);
  });

  it(`Second parameter should be number`, () => {
    assert.throws(() => calculateScore(Result.FIRST, []), /Second parameter should be number/);
  });
});


