import {
  useState, useEffect, useContext,
} from 'react';
import { useParams } from 'react-router-dom';
import {
  getById, removeStudentFromSubject, create, editUser,
} from '../utils/services/students';
import { getAll } from '../utils/services/subjects';
import AuthContext from '../context/authContext';

import { SUCCESS } from '../consts/consts';
import useForm from './useForm';

const useStudent = () => {
  const initialState = {
    name: '',
    surname: '',
    telephone: '',
    email: '',
    active: false,
    course: [],
    payment: [],
    score: [],
  };

  const {
    values, handleInputChange, handleToggleChange, setValues,
  } = useForm(initialState);

  const { course } = values;

  const [message, setMessage] = useState('');
  const [creating, setCreating] = useState(false);
  const [error, setError] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const [subjects, setSubjects] = useState([]);
  const [selectSubject, setSelectedSubject] = useState({});
  const [selectedSubjects, setSelectedSubjects] = useState([]);

  const params = useParams();

  const { user } = useContext(AuthContext);

  const handleSelectSubject = (e) => {
    const actualSubject = subjects.filter((subjt) => subjt._id === e.target.value);
    setSelectedSubject(actualSubject);
  };

  const addSubjectAsSelected = (subjectSelected) => {
    setSelectedSubjects([...selectedSubjects, subjectSelected[0]]);
    setValues({ ...values, course: [...course, subjectSelected[0]] });
  };

  useEffect(() => {
    if (params.id) {
      getById(params.id, user.token).then((response) => {
        const { status, data } = response;
        if (status === SUCCESS) {
          setValues(data[0]);
          setMessage('');
        } else {
          setMessage('Ocurrio un error durante la carga de datos');
          setError(true);
        }
      });

      getAll(user.token).then((response) => {
        if (response.status === SUCCESS) {
          setSubjects(response.data);
        }
      });
    } else {
      setCreating(true);
    }
  }, []);

  const removeCourse = async (subjt) => {
    const removedCourse = await removeStudentFromSubject(values.email, subjt, user.token);

    if (removedCourse.status === SUCCESS || removedCourse.status === 200) {
      const index = removedCourse.data.course.indexOf(subjt);
      if (index > -1) {
        removedCourse.data.course.splice(index, 1);
      }
      setValues({ ...values, course: removedCourse.data.course });
    } else {
      setError(true);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (creating) {
      const userCreated = await create(values, user.token);

      if (userCreated.status === SUCCESS) {
        setMessage('Usuario creado correctamente');
      } else {
        setMessage('Ocurrio un error durante la creación del usuario');
        setError(true);
      }
    } else {
      const userEdited = await editUser(values, user.token);

      if (userEdited.status === 200) {
        setMessage('Usuario editado correctamente');
      } else {
        setMessage('Ocurrio un error durante la edición del usuario');
        setError(true);
      }
    }
    setIsOpen(true);
  };

  return {
    values,
    handleInputChange,
    handleToggleChange,
    isOpen,
    setIsOpen,
    message,
    creating,
    error,
    removeCourse,
    handleSubmit,
    subjects,
    selectSubject,
    handleSelectSubject,
    addSubjectAsSelected,
  };
};

export default useStudent;
