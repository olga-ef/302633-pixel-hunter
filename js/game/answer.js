const ANSWERS_NUMBER = {
  game1: 2,
  game2: 1,
  game3: 1
}

const Time = {
  FAST: 20,
  SLOW: 10
}

// const getOptionByKey = (options, key) => {
//   for (const option of options) {
//     if (option.key.toString() === key) {
//       return option;
//     }
//   }
//   return null;
// };

// const checkAnswer = (levelType, answers) => {
//   const answerStatus = answers.every((answer) => {
//     const key = answer.dataset.key;
//     const option = getOptionByKey(level.options, key);
//     const result = level.type === `game3` ? option.type : option.type === answer.value;
//     return result;
//   });
//   return answerStatus;
// };

const isCorrect = (answers, level) => {
  const answerStatus = answers.every((answer) => {
    const currentOption = level.options.find((option) => option.key.toString() === answer.dataset.key);
    const result = level.type === `game3` ?  currentOption.type : currentOption.type === answer.value;

    return result;
  });

  return answerStatus;
}

export const checkAnswer = (level, answers, time) => {
  const status = {}
  if (!isCorrect(answers, level)) {
    return `wrong`
  }

  if (time > Time.FAST) {
    return `fast`;
  } else if (time < Time.SLOW) {
    return `slow`;
  } else {
    return `correct`;
  }
};


export const isAllAnswers = (answers, levelType) => {
  return answers.length === ANSWERS_NUMBER[levelType];
};

// export const saveAnswer = (level, answers, state) => {
//   const newAnswer = checkAnswer(level, answers) ?
//     {status: `correct`, time: 15} :
//     {status: `wrong`, time: 15};

//   const newState = Object.assign({}, state);
//   newState.answers.push(newAnswer);
//   return newState;
// };

export const addAnswer = (state, answerStatus) => {
  const newState = Object.assign({}, state);
  newState.answers.push(answerStatus);

  return newState;
}
