const getOptionByKey = (options, key) => {
  for (const option of options) {
    if (option.key.toString() === key) {
      return option;
    }
  }
  return null;
};

const checkAnswer = (level, answers) => {
  const answerStatus = answers.every((answer) => {
    const key = answer.dataset.key;
    const option = getOptionByKey(level.options, key);
    const result = answer.value ? option.type === answer.value : option.type;
    return result;
  });
  return answerStatus;
};

export const getAnswers = (target, parent) => {
  const answers = Array.from(parent.querySelectorAll(`.game__option input`));
  if (answers.length === 0) {
    return [target.parentElement];
  }
  const checkedAnswers = answers.filter((answer) => answer.checked);

  return checkedAnswers;
};

export const isAllAnswers = (answers, optionsNumber) => {
  return answers.length === optionsNumber;
};

export const saveAnswer = (level, answers, state) => {
  const newAnswer = checkAnswer(level, answers) ?
    {status: `correct`, time: 15} :
    {status: `wrong`, time: 15};

  const newState = Object.assign({}, state);
  newState.answers.push(newAnswer);
  return newState;
};
