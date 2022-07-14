import { useContext, useReducer } from 'react';
import { create, getById, editUser } from '../utils/services/students';
import { SUCCESS } from '../consts/consts';
import uiTypes from '../types/uiTypes';
import studentTypes from '../types/studentTypes';
import AuthContext from '../context/authContext';
import uiReducer from '../utils/reducers/uiReducer';
import studentReducer from '../utils/reducers/studentReducer';

const useUser = () => {
  const { user } = useContext(AuthContext);
  const [, uiDispatch] = useReducer(uiReducer, {});
  const [, studentDispatch] = useReducer(studentReducer, {});

  const createUser = async (newUser) => {
    uiDispatch({ type: uiTypes.uiStartLoading });
    const userCreated = await create(newUser, user.token);

    if (userCreated.status === SUCCESS) {
      studentDispatch({ type: studentTypes.create, user: userCreated.data });
      uiDispatch({ type: uiTypes.uiRemoveError });
    } else {
      uiDispatch({ type: uiTypes.uiSetError, payload: 'Ocurrio un error durante el registro' });
    }

    uiDispatch({ type: uiTypes.uiFinishLoading });
  };

  const getUser = (id, setValues) => {
    getById(id, user.token)
      .then((response) => {
        const { status, data } = response;
        if (status === SUCCESS) {
          uiDispatch({ type: uiTypes.uiRemoveError });
          studentDispatch({ type: studentTypes.set, payload: data[0] });
          setValues(data[0]);
        } else {
          uiDispatch({ type: uiTypes.uiSetError, payload: 'Ocurrio un error durante el registro' });
        }
      }).catch((error) => {
        uiDispatch({ type: uiTypes.error, payload: error });
      });
  };

  const edit = async (values) => {
    uiDispatch({ type: uiTypes.uiStartLoading });
    const userEdited = await editUser(values, user.token);

    if (userEdited.status === SUCCESS || userEdited.status === 200) {
      studentDispatch({ type: studentTypes.edit, user: userEdited.data });
      uiDispatch({ type: uiTypes.uiRemoveError });
    } else {
      uiDispatch({ type: uiTypes.uiSetError, payload: 'Ocurrio un error durante la edicion' });
    }

    uiDispatch({ type: uiTypes.uiFinishLoading });
  };

  return {
    createUser, getUser, edit,
  };
};

export default useUser;
