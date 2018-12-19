import {assert} from 'chai';
import adaptServerData from '../game/adapter';

const serverData = [
  {
    type: `two-of-two`,
    question: `Угадайте для каждого изображения фото или рисунок?`,
    answers: [
      {
        image: {
          url: `http://placehold.it/468x458`,
          width: 468,
          height: 458
        },
        type: `photo`
      },
      {
        image: {
          url: `http://placehold.it/468x458`,
          width: 468,
          height: 458
        },
        type: `painting`
      }
    ]
  },
  {
    type: `tinder-like`,
    question: `Угадай, фото или рисунок?`,
    answers: [
      {
        image: {
          url: `http://placehold.it/705x455`,
          width: 705,
          height: 455
        },
        type: `photo`
      }
    ]
  },
  {
    type: `one-of-three`,
    question: `Найдите рисунок среди изображений`,
    answers: [
      {
        image: {
          url: `http://placehold.it/304x455`,
          width: 304,
          height: 455
        },
        type: `photo`
      },
      {
        image: {
          url: `http://placehold.it/304x455`,
          width: 304,
          height: 455
        },
        type: `painting`
      },
      {
        image: {
          url: `http://placehold.it/304x455`,
          width: 304,
          height: 455
        },
        type: `photo`
      }
    ]
  },
  {
    type: `one-of-three`,
    question: `Найдите фото среди изображений`,
    answers: [
      {
        image: {
          url: `http://placehold.it/304x455`,
          width: 304,
          height: 455
        },
        type: `painting`
      },
      {
        image: {
          url: `http://placehold.it/304x455`,
          width: 304,
          height: 455
        },
        type: `painting`
      },
      {
        image: {
          url: `http://placehold.it/304x455`,
          width: 304,
          height: 455
        },
        type: `photo`
      }
    ]
  }
];

const localData = [
  {
    type: `two-of-two`,
    question: `Угадайте для каждого изображения фото или рисунок?`,
    answers: [
      {
        image: {
          url: `http://placehold.it/468x458`,
          width: 468,
          height: 458
        },
        type: `photo`
      },
      {
        image: {
          url: `http://placehold.it/468x458`,
          width: 468,
          height: 458

        },
        type: `painting`,
      }
    ]
  },
  {
    type: `tinder-like`,
    question: `Угадай, фото или рисунок?`,
    answers: [
      {
        image: {
          url: `http://placehold.it/705x455`,
          width: 705,
          height: 455
        },
        type: `photo`
      }
    ]
  },
  {
    type: `one-of-three`,
    question: `Найдите рисунок среди изображений`,
    answers: [
      {
        image: {
          url: `http://placehold.it/304x455`,
          width: 304,
          height: 455
        },
        type: false
      },
      {
        image: {
          url: `http://placehold.it/304x455`,
          width: 304,
          height: 455
        },
        type: true
      },
      {
        image: {
          url: `http://placehold.it/304x455`,
          width: 304,
          height: 455
        },
        type: false
      }
    ]
  },
  {
    type: `one-of-three`,
    question: `Найдите фото среди изображений`,
    answers: [
      {
        image: {
          url: `http://placehold.it/304x455`,
          width: 304,
          height: 455
        },
        type: false
      },
      {
        image: {
          url: `http://placehold.it/304x455`,
          width: 304,
          height: 455
        },
        type: false
      },
      {
        image: {
          url: `http://placehold.it/304x455`,
          width: 304,
          height: 455
        },
        type: true
      }
    ]
  }
];

describe(`Adapt server data`, () => {

  it(`should have several format remote and local data`, () => {
    assert.deepEqual(localData, adaptServerData(serverData));
  });
});
