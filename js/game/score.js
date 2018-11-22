const Point = {
  BASE: 100,
  BONUS: 50,
  PENALTY: -50
};
const TimeLimit = {
  MIN: 10,
  MAX: 20
};
const ANSWERS_LIMIT = 7;

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

  const rightAnswers = answers.filter((answer) => {
    if (answer.time < 0) {
      throw new Error(`Answer time should not be negative value`);
    }
    return answer.isRight && answer.time >= 0;
  });

  if (rightAnswers.length < ANSWERS_LIMIT) {
    return -1;
  }

  const fastAnswers = rightAnswers.filter((answer) => answer.time < TimeLimit.MIN);
  const slowAnswers = rightAnswers.filter((answer) => answer.time > TimeLimit.MAX);
  const score = rightAnswers.length * Point.BASE
    + fastAnswers.length * Point.BONUS
    + slowAnswers.length * Point.PENALTY
    + lives * Point.BONUS;

  return score;
};

export default calculateScore;
