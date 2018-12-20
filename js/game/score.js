import {Point, Result} from '../util/config';

const ANSWERS_LIMIT = 7;

const getFinalScore = (rightAnswers, fastAnswers, slowAnswers, lives) => {

  if (rightAnswers.length < ANSWERS_LIMIT) {
    return -1;
  }

  const finalScore = rightAnswers.length * Point.BASE + fastAnswers.length * Point.BONUS
      + slowAnswers.length * Point.PENALTY + lives * Point.BONUS;

  return finalScore;
};

const calculateScore = (answers, lives) => {
  if (lives < 0) {
    throw new Error(`Lives should not be negative value`);
  }

  if (!Array.isArray(answers)) {
    throw new Error(`First parameter should be array`);
  }

  if (typeof lives !== `number`) {
    throw new Error(`Second parameter should be number`);
  }

  const rightAnswers = answers.filter((answer) => answer !== Result.WRONG);

  const fastAnswers = rightAnswers.filter((answer) => answer === Result.FAST);
  const slowAnswers = rightAnswers.filter((answer) => answer === Result.SLOW);

  const finalScore = getFinalScore(rightAnswers, fastAnswers, slowAnswers, lives);

  return {
    correct: rightAnswers.length,
    fast: fastAnswers.length,
    slow: slowAnswers.length,
    finalScore
  };
};

export default calculateScore;
