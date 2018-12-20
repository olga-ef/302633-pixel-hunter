import adaptServerData from './adapter';

const SERVER_URL = `https://es.dump.academy/pixel-hunter`;
const DEFAULT_NAME = `Vasya`;
const APP_ID = 58961925;

const Status = {
  OK: 200,
  REDIRECT: 300
};

const checkStatus = (response) => {
  if (response.status >= Status.OK && response.status < Status.REDIRECT) {
    return response;
  } else {
    throw new Error(`${response.status}: ${response.statusText}`);
  }
};

const toJSON = (res) => res.json();

class Loader {
  static loadData() {
    return (
      fetch(`${SERVER_URL}/questions`).
        then(checkStatus).
        then(toJSON).
        then(adaptServerData)
    );
  }

  static loadResults(userName = DEFAULT_NAME) {
    return (
      fetch(`${SERVER_URL}/stats/:${APP_ID}-:${userName}`).
        then(checkStatus).
        then(toJSON)
    );
  }

  static saveResult(stats, lives, userName) {
    const data = {stats, lives};
    const requestSettings = {
      body: JSON.stringify(data),
      headers: {
        'Content-Type': `application/json`
      },
      method: `POST`
    };

    return fetch(`${SERVER_URL}/stats/:${APP_ID}-:${userName}`, requestSettings).then(checkStatus);
  }
}

export default Loader;
