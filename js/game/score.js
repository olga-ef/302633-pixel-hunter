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
    return answer.status !== `wrong` && answer.time >= 0;
  });

  const fastAnswers = rightAnswers.filter((answer) => answer.status === `fast`);
  const slowAnswers = rightAnswers.filter((answer) => answer.time === `slow`);

  const finalScore = (rightAnswers.length < ANSWERS_LIMIT) ?
    -1 :
    rightAnswers.length * Point.BASE + fastAnswers.length * Point.BONUS
    + slowAnswers.length * Point.PENALTY + lives * Point.BONUS;

  return {
    correct: rightAnswers.length,
    fast: fastAnswers.length,
    slow: slowAnswers.length,
    finalScore
  };
};

export default calculateScore;
