import * as request from '../library/request';

const URL = "http://localhost:3030/data/honey";

export const getAll = async () => {

  const result = await request.get(URL);

  return result;
};

export const getItem = async (gameId) => {
  const result = await request.get(`${URL}/${gameId}`);

  return result;
};

export const addItem = async (formValues) => {
  const result = await request.post(URL, formValues);
  console.log(result);

  return result;
};
