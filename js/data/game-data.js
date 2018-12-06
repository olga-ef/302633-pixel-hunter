const paintings = [
  // People
  `https://k42.kn3.net/CF42609C8.jpg`,

  // Animals
  `https://k42.kn3.net/D2F0370D6.jpg`,

  // Nature
  `https://k32.kn3.net/5C7060EC5.jpg`
];

const photos = [
  // People
  `http://i.imgur.com/1KegWPz.jpg`,

  // Animals
  `https://i.imgur.com/DiHM5Zb.jpg`,

  // Nature
  `http://i.imgur.com/DKR1HtB.jpg`
];

const LEVELS = [
  {
    question: `Угадайте для каждого изображения фото или рисунок?`,
    options: [{image: paintings[0], type: `paint`, key: 1}, {image: photos[0], type: `photo`, key: 2}],
    type: `game1`
  },
  {
    question: `Угадай, фото или рисунок?`,
    options: [{image: photos[1], type: `photo`, key: 1}],
    type: `game2`
  },
  {
    question: `Найдите рисунок среди изображений`,
    options: [
      {image: photos[2], type: false, key: 1},
      {image: paintings[2], type: true, key: 2},
      {image: photos[0], type: false, key: 3}
    ],
    type: `game3`
  },
  {
    question: `Найдите фотографию среди изображений`,
    options: [
      {image: paintings[1], type: false, key: 1},
      {image: paintings[2], type: false, key: 2},
      {image: photos[0], type: true, key: 3}
    ],
    type: `game3`
  },
  {
    question: `Угадай, фото или рисунок?`,
    options: [{image: paintings[1], type: `paint`, key: 1}],
    type: `game2`
  },
  {
    question: `Угадай, фото или рисунок?`,
    options: [{image: photos[0], type: `photo`, key: 1}],
    type: `game2`
  },
  {
    question: `Угадайте для каждого изображения фото или рисунок?`,
    options: [{image: paintings[1], type: `paint`, key: 1}, {image: photos[2], type: `photo`, key: 2}],
    type: `game1`
  },
  {
    question: `Угадайте для каждого изображения фото или рисунок?`,
    options: [{image: paintings[0], type: `paint`, key: 1}, {image: photos[1], type: `photo`, key: 2}],
    type: `game1`
  },
  {
    question: `Угадайте для каждого изображения фото или рисунок?`,
    options: [{image: photos[1], type: `photo`, key: 1}, {image: paintings[1], type: `paint`, key: 2}],
    type: `game1`
  },
  {
    question: `Найдите рисунок среди изображений`,
    options: [
      {image: photos[1], type: false, key: 1},
      {image: paintings[0], type: true, key: 2},
      {image: photos[0], type: false, key: 3}
    ],
    type: `game3`
  }
];

export default LEVELS;

