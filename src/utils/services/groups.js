import { BACKEND_URL } from '../../consts/consts';

export const create = async (group, token) => {
  const requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(group),
  };

  const response = await fetch(`${BACKEND_URL}/group/create`, requestOptions);

  return response.json();
};

export const list = async (skip = 1, limit = 5, token) => {
  const requestOptions = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await fetch(`${BACKEND_URL}/group/getGroupAndMembers?skip=${skip}&limit=${limit}`, requestOptions);

  return response.json();
};
