const Point = {
  BASE: 100,
  BONUS: 50,
  PENALTY: -50
};
const TimeLimit = {
  MIN: 10,
  MAX: 20
};
const ANSWERES_LIMIT = 10;

const calculateScore = (answeres, lives) => {
  if (lives < 0) {
    throw new Error(`Lives should not be negative value`);
  }

  if (!Array.isArray(answeres)) {
    throw new Error(`First parameter should be array`);
  }

  if (typeof lives !== `number`) {
    throw new Error(`Second parameter should be number`);
  }

  const rightAnsweres = answeres.filter((answer) => {
    if (answer.time < 0) {
      throw new Error(`Answer time should not be negative value`);
    }
    return answer.isRight;
  });

  if (rightAnsweres.length < ANSWERES_LIMIT) {
    return -1;
  }

  const fastAnsweres = rightAnsweres.filter((answer) => answer.time <= TimeLimit.MIN);
  const slowAnsweres = rightAnsweres.filter((answer) => answer.time > TimeLimit.MAX);
  const score = rightAnsweres.length * Point.BASE + fastAnsweres.length * Point.BONUS + slowAnsweres.length * Point.PENALTY + lives * Point.BONUS;

  return score;
};

export default calculateScore;
