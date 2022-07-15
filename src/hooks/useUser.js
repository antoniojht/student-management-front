import { useContext, useReducer } from 'react';
import {
  create, editUser, removeStudentFromSubject,
} from '../utils/services/students';
import { SUCCESS } from '../consts/consts';
import uiTypes from '../types/uiTypes';
import studentTypes from '../types/studentTypes';
import AuthContext from '../context/authContext';
import uiReducer from '../utils/reducers/uiReducer';
import studentReducer from '../utils/reducers/studentReducer';

const useUser = () => {
  const { user } = useContext(AuthContext);
  const [, uiDispatch] = useReducer(uiReducer, {});
  const [studentState, studentDispatch] = useReducer(studentReducer);

  const createUser = async (newUser) => {
    uiDispatch({ type: uiTypes.uiStartLoading });
    const userCreated = await create(newUser, user.token);

    if (userCreated.status === SUCCESS) {
      studentDispatch({ type: studentTypes.set, user: userCreated.data });
      uiDispatch({ type: uiTypes.uiRemoveError });
    } else {
      uiDispatch({ type: uiTypes.uiSetError, payload: 'Ocurrio un error durante el registro' });
    }

    uiDispatch({ type: uiTypes.uiFinishLoading });
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

  const removeCourse = async (subject) => {
    uiDispatch({ type: uiTypes.uiStartLoading });
    const { email } = studentState.user;

    const removedCourse = await removeStudentFromSubject(email, subject, user.token);

    if (removedCourse.status === SUCCESS || removedCourse.status === 200) {
      const index = removedCourse.data.course.indexOf(subject);
      if (index > -1) {
        removedCourse.data.course.splice(index, 1);
      }
      studentDispatch({ type: studentTypes.edit, user: removedCourse.data });
      uiDispatch({ type: uiTypes.uiRemoveError });
    } else {
      uiDispatch({ type: uiTypes.uiSetError, payload: 'Ocurrio un error durante la edicion' });
    }

    uiDispatch({ type: uiTypes.uiFinishLoading });
  };

  return {
    createUser, edit, removeCourse,
  };
};

export default useUser;
