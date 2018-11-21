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
  const rightAnsweres = answeres.filter((answer) => answer.isRight);

  if (rightAnsweres.length < ANSWERES_LIMIT) {
    return -1;
  }

  const fastAnsweres = rightAnsweres.filter((answer) => answer.time <= TimeLimit.MIN);
  const slowAnsweres = rightAnsweres.filter((answer) => answer.time > TimeLimit.MAX);
  const score = rightAnsweres.length * Point.BASE + fastAnsweres.length * Point.BONUS + slowAnsweres.length * Point.PENALTY + lives * Point.BONUS;

  return score;
};

export default calculateScore;
