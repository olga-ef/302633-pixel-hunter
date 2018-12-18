import {LevelType, Result} from '../util/config';
const Time = {
  FAST: 20,
  SLOW: 10
};

const isCorrect = (answers, level) => {
  const answerStatus = answers.every((answer) => {
    const currentOption = level.answers.find((option) => option.image.url === answer.dataset.key);
    const result = level.type === LevelType.GAME_3 ? currentOption.type : currentOption.type === answer.value;

    return result;
  });

  return answerStatus;
};

export const checkAnswer = (level, answers, time) => {
  if (!isCorrect(answers, level)) {
    return Result.WRONG;
  }

  if (time > Time.FAST) {
    return Result.FAST;
  }

  if (time < Time.SLOW) {
    return Result.SLOW;
  }

  return Result.CORRECT;
};


export const isAllAnswers = (answers, level) => {
  if (level.type === LevelType.GAME_1) {
    return answers.length === level.answers.length;
  }
  return true;
};

export const addAnswer = (state, answerStatus) => {
  const newState = Object.assign({}, state);
  newState.answers.push(answerStatus);
  return newState;
};
