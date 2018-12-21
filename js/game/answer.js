import {LevelType, Result, Time} from '../util/config';

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

export const addAnswer = (state, answerStatus) => {
  const newState = Object.assign({}, state);
  newState.answers.push(answerStatus);
  return newState;
};
