import { BACKEND_URL } from '../../consts/consts';

const create = async (student, token) => {
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

export default create;
