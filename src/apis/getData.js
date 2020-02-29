import fetch from 'node-fetch';

const API_PATH = 'http://91.123.84.116:5000/api';

// Это пример как использовать api
export const getDirectors = async () => {
  try {
    const response = await fetch(`${API_PATH}/directors`, { referrerPolicy: 'no-referrer' });
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
    const response = await fetch(`${API_PATH}/director_of_day`, { referrerPolicy: 'no-referrer' });
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
    const response = await fetch(`${API_PATH}/director/${id}`, { referrerPolicy: 'no-referrer' });
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
      referrerPolicy: 'no-referrer',
    });
    const result = await response.json();

    return result;
  } catch (ex) {
    return {
      error: ex,
    };
  }
};

export const getCreatorsInfo = async () => {
  try {
    const response = await fetch(`${API_PATH}/team`, { referrerPolicy: 'no-referrer' });
    const result = await response.json();

    return result;
  } catch (err) {
    return {
      error: err,
    };
  }
};

export const getCreators = async () => {
  try {
    const response = await fetch(`${API_PATH}/workflows`, { referrerPolicy: 'no-referrer' });
    const result = await response.json();

    return result;
  } catch (err) {
    return {
      error: err,
    };
  }
};

export const getCreatorsPain = async () => {
  try {
    const response = await fetch(`${API_PATH}/workflowsTeamPain`, {
      referrerPolicy: 'no-referrer',
    });
    const result = await response.json();

    return result;
  } catch (err) {
    return {
      error: err,
    };
  }
};

export const getCreatorsSelfEvaluation = async () => {
  try {
    const response = await fetch(`${API_PATH}/workflowSelfEvaluation`, {
      referrerPolicy: 'no-referrer',
    });
    const result = await response.json();

    return result;
  } catch (err) {
    return {
      error: err,
    };
  }
};
