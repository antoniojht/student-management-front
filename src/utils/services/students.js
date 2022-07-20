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

export const list = async (skip = 1, limit = 5, token, orderBy = 'name') => {
  const requestOptions = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await fetch(`${BACKEND_URL}/user/getStudents?skip=${skip}&limit=${limit}&order=${orderBy}`, requestOptions);

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

export const editUser = (values, token) => {
  const requestOptions = {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(values),
  };

  return fetch(`${BACKEND_URL}/user/edit`, requestOptions);
};

export const removeStudentFromSubject = async (email, subject, token) => {
  const requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ email, subject }),
  };

  const response = await fetch(`${BACKEND_URL}/user/removeStudentFromSubject`, requestOptions);

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

  const response = await fetch(`${BACKEND_URL}/user/searchContainName?name=${name}`, requestOptions);

  return response.json();
};
