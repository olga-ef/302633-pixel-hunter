export const INITIAL_STATE = {
  lives: 3,
  time: 30,
  level: 0,
  answers: []
};

export const HEADER_SHORT = `short`;
export const HEADER_FULL = `full`;

export const Point = {
  BASE: 100,
  BONUS: 50,
  PENALTY: -50
};

export const LevelType = {
  GAME_1: `two-of-two`,
  GAME_2: `tinder-like`,
  GAME_3: `one-of-three`
};

export const AnswerType = {
  PAINTING: `painting`,
  PHOTO: `photo`
};

export const Result = {
  CORRECT: `correct`,
  FAST: `fast`,
  SLOW: `slow`,
  WRONG: `wrong`
};

export const DANGER_TIME = 5;

export const ONE_SECOND = 1000;

export const Time = {
  FAST: 20,
  SLOW: 10
};

export const ANSWERS_LIMIT = 7;
