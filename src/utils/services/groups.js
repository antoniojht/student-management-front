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

export const listMembersByGroup = async (name, token) => {
  const requestOptions = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await fetch(`${BACKEND_URL}/group/listMembers?name=${name}`, requestOptions);

  return response.json();
};

export const removeStudentFromGroup = async (name, studentId, token) => {
  const requestOptions = {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ name, studentId }),
  };

  const response = await fetch(`${BACKEND_URL}/group/removeStudentFromGroup`, requestOptions);

  return response.json();
};

export const editGroup = async (name, newName, members, token) => {
  const requestOptions = {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ name, newName, members }),
  };

  const response = await fetch(`${BACKEND_URL}/group/edit`, requestOptions);

  return response.json();
};

export const searchContainName = async (name, token) => {
  const requestOptions = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await fetch(`${BACKEND_URL}/group/searchContainName?name=${name}`, requestOptions);

  return response.json();
};
