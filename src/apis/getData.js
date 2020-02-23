import fetch from 'node-fetch';

const API_PATH = 'http://localhost:5000/api';

// Это пример как использовать api
export const getDirectors = async () => {
  try {
    const response = await fetch(`${API_PATH}/directors`);
    const result = await response.json();

    return result;
  } catch (ex) {
    return {
      error: ex,
    };
  }
};

export const getDirectorOfDay = async () => {
  try {
    const response = await fetch(`${API_PATH}/director_of_day`);
    const result = await response.json();

    return result;
  } catch (ex) {
    return {
      error: ex,
    };
  }
};

export const getDirector = async id => {
  try {
    const response = await fetch(`${API_PATH}/director/${id}`);
    const result = await response.json();

    return result;
  } catch (ex) {
    return {
      error: ex,
    };
  }
};

export const searchDirector = async query => {
  try {
    const response = await fetch(`${API_PATH}/search`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ query }),
    });
    const result = await response.json();

    return result;
  } catch (ex) {
    return {
      error: ex,
    };
  }
};
