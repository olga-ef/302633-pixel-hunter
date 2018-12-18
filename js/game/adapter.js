import {LevelType, AnswerType} from "../util/config";

const preprocessData = (answers) => {
  const photos = answers.filter((answer) => answer.type === AnswerType.PHOTO);
  const rightAnswer = photos.length > 1 ? AnswerType.PAINTING : AnswerType.PHOTO;

  answers.map((answer) => {
    answer.type = answer.type === rightAnswer;
  });

  return answers;
};

const adaptServerData = (data) => {
  for (const level of data) {
    if (level.type === LevelType.GAME_3) {
      level.answers = preprocessData(level.answers);
    }
  }
  return data;
};

export default adaptServerData;

