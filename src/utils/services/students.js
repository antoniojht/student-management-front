import { BACKEND_URL } from '../../consts/consts';

export const create = async (student, token) => {
  // eslint-disable-next-line no-param-reassign
  student.rol = 'student';

  const requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(student),
  };

  const response = await fetch(`${BACKEND_URL}/user/create`, requestOptions);

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

  const response = await fetch(`${BACKEND_URL}/user/getStudents?skip=${skip}&limit=${limit}`, requestOptions);

  return response.json();
};

export const getById = async (id, token) => {
  const requestOptions = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await fetch(`${BACKEND_URL}/user/getStudentById?id=${id}`, requestOptions);

  return response.json();
};
