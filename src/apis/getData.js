import fetch from 'node-fetch';

const API_PATH = '';

// Это пример как использовать api
export const getAllDirectors = async () => {
  const response = await fetch(`${API_PATH}/all_directors`);
  const result = await response.json();

  // Делаете что хотите с result

  return result;
};

export const getDirector = async id => {
  const response = await fetch(`${API_PATH}/all_directors`, {
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ id }),
  });
  const result = await response.json();

  // Делаете что хотите с result

  return result;
};
