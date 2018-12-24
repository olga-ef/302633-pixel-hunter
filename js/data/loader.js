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
  static async loadData() {
    const response = await fetch(`${SERVER_URL}/questions`);
    const checkedResponse = checkStatus(response);
    const responseData = await toJSON(checkedResponse);
    return adaptServerData(responseData);
  }

  static async loadResults(userName = DEFAULT_NAME) {
    const response = await fetch(`${SERVER_URL}/stats/:${APP_ID}-:${userName}`);
    const checkedResponse = checkStatus(response);
    return await toJSON(checkedResponse);
  }

  static async saveResult(stats, lives, userName) {
    const data = {stats, lives};
    const requestSettings = {
      body: JSON.stringify(data),
      headers: {
        'Content-Type': `application/json`
      },
      method: `POST`
    };
    const response = await fetch(`${SERVER_URL}/stats/:${APP_ID}-:${userName}`, requestSettings);

    return checkStatus(response);
  }
}

export default Loader;
