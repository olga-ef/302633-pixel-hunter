const ANSWERS_NUMBER = {
  game1: 2,
  game2: 1,
  game3: 1
};

const Time = {
  FAST: 20,
  SLOW: 10
};

const Answer = {
  CORRECT: `correct`,
  FAST: `fast`,
  SLOW: `slow`,
  WRONG: `wrong`
};

const isCorrect = (answers, level) => {
  const answerStatus = answers.every((answer) => {
    const currentOption = level.options.find((option) => option.key.toString() === answer.dataset.key);
    const result = level.type === `game3` ? currentOption.type : currentOption.type === answer.value;

    return result;
  });

  return answerStatus;
};

export const checkAnswer = (level, answers, time) => {
  if (!isCorrect(answers, level)) {
    return Answer.WRONG;
  }

  if (time > Time.FAST) {
    return Answer.FAST;
  }

  if (time < Time.SLOW) {
    return Answer.SLOW;
  }

  return Answer.CORRECT;
};


export const isAllAnswers = (answers, levelType) => {
  return answers.length === ANSWERS_NUMBER[levelType];
};

export const addAnswer = (state, answerStatus) => {
  const newState = Object.assign({}, state);
  newState.answers.push(answerStatus);
  return newState;
};
