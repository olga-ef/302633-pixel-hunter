import {assert} from 'chai';
import calculateScore from './calculate-score.js';

const Result = {
  FIRST: [{isRight: true, time: 30}, {isRight: false, time: 30}, {isRight: true, time: 30}, {isRight: true, time: 30}, {isRight: true, time: 30}, {isRight: true, time: 30}, {isRight: true, time: 30}, {isRight: true, time: 30}, {isRight: true, time: 30}, {isRight: true, time: 30}],
  SECOND: [{isRight: true, time: 15}, {isRight: true, time: 15}, {isRight: true, time: 15}, {isRight: true, time: 15}, {isRight: true, time: 15}, {isRight: true, time: 15}, {isRight: true, time: 15}, {isRight: true, time: 15}, {isRight: true, time: 15}, {isRight: true, time: 15}],
  THIRD: [{isRight: true, time: 9}, {isRight: true, time: 9}, {isRight: true, time: 9}, {isRight: true, time: 9}, {isRight: true, time: 9}, {isRight: true, time: 9}, {isRight: true, time: 9}, {isRight: true, time: 9}, {isRight: true, time: 9}, {isRight: true, time: 9}],
  FORTH: [{isRight: true, time: 22}, {isRight: true, time: 22}, {isRight: true, time: 22}, {isRight: true, time: 22}, {isRight: true, time: 22}, {isRight: true, time: 22}, {isRight: true, time: 22}, {isRight: true, time: 22}, {isRight: true, time: 22}, {isRight: true, time: 22}],
  FIFTH: [{isRight: true, time: 5}, {isRight: true, time: 5}, {isRight: true, time: 5}, {isRight: true, time: 5}, {isRight: true, time: 5}, {isRight: true, time: 12}, {isRight: true, time: 12}, {isRight: true, time: 12}, {isRight: true, time: 22}, {isRight: true, time: 22}],
  SIXTH: [{isRight: true, time: 5}, {isRight: true, time: 5}, {isRight: true, time: 25}, {isRight: true, time: 25}, {isRight: true, time: 25}, {isRight: true, time: 25}, {isRight: true, time: 18}, {isRight: true, time: 18}, {isRight: true, time: 18}, {isRight: true, time: 18}]
};

describe(`Counting final score`, () => {
  it(`should calculate score correctly`, () => {
    // Если игрок ответил на все вопросы и не быстро, и не медленно, и у него остались все жизни, то функция должна вернуть 1150 очков;
    assert.equal(calculateScore(Result.SECOND, 3), 1150);
    // Если игрок ответил на все вопросы быстро, и у него остались все жизни, функция возвращает 1650 очков
    assert.equal(calculateScore(Result.THIRD, 3), 1650);
    //  Если ответил на все вопросы медленно, и у него осталось 3 жизни, функция возвращает 650 очков
    assert.equal(calculateScore(Result.FORTH, 3), 650);
    // Если ответил на 5 вопросов быстро, на 2 медленно , на 3 - нормально, и осталась 1 жизнь, функция возвращает 1200 очков
    assert.equal(calculateScore(Result.FIFTH, 1), 1200);
    // Если ответил на 2 вопросов быстро, на 4 медленно , на 4 - нормально, и осталась 0 жизней, функция возвращает 900 очков
    assert.equal(calculateScore(Result.SIXTH, 0), 900);
  });

  it(`should return -1 when less 10 answeres is right`, () => {
    assert.equal(calculateScore(Result.FIRST, 3), -1);
  });

// количество жизней не может быть отрицательным
// время не может быть отрицательным
// первый параметр должен быть объектом, второй числом
});


