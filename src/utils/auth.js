import { BACKEND_URL } from '../consts/consts';
import types from '../types/types';

export const login = async (dispatch, email, password) => {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password }),
  };

  const response = await fetch(`${BACKEND_URL}/login`, requestOptions);
  const data = await response.json();

  if (data.name) {
    dispatch({ type: types.login, payload: data });
    localStorage.setItem('user', JSON.stringify(data));
    return data;
  }

  return '';
};

export const logout = (dispatch) => {
  dispatch({ type: types.logout });
  localStorage.removeItem('user');
};
