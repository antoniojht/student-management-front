import {
  useContext, useEffect, useState,
} from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { SUCCESS } from '../../../../consts/consts';
import AuthContext from '../../../../context/authContext';
import useForm from '../../../../hooks/useForm';
import { create, edit, getById } from '../../../../utils/services/subjects';
import Error from '../../../common/Error/Error';
import Modal from '../../../common/Modal/Modal';

function Student() {
  const initialState = {
    name: '', grade: '',
  };

  const { user } = useContext(AuthContext);

  const params = useParams();
  const navigate = useNavigate();

  const [message, setMessage] = useState('');
  const [error, setError] = useState(false);
  const [creating, setCreating] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const { values, handleInputChange, setValues } = useForm(initialState);

  useEffect(() => {
    if (params.id) {
      getById(params.id, user.token).then((response) => {
        if (response.status === SUCCESS) {
          setValues(response.data);
          setMessage('');
        } else {
          setMessage('Ocurrio un error durante la carga de datos');
          setError(true);
        }
      });
    } else {
      setCreating(true);
    }
  }, []);

  const { name, grade } = values;

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (creating) {
      const subjectCreated = await create(values, user.token);

      if (subjectCreated.status === SUCCESS) {
        setMessage('Asignatura creada correctamente');
      } else {
        setMessage('Ocurrio un error durante la creación de la asignatura');
        setError(true);
      }
    } else {
      const userEdited = await edit(values, user.token);

      if (userEdited.status === SUCCESS) {
        setMessage('Asignatura editada correctamente');
      } else {
        setMessage('Ocurrio un error durante la edición de la asignatura');
        setError(true);
      }
    }

    setIsOpen(true);
  };

  const navigateToSubjects = () => {
    if (!error) {
      navigate('/subjects', { replace: true });
    }
  };

  return (
    <>
      {isOpen && <Modal header="Asignatura" body={message} setIsOpen={setIsOpen} navigate={navigateToSubjects} />}
      {error && <Error />}
      <div className="mx-auto m-8 w-full max-w-[550px]">
        <form onSubmit={handleSubmit}>
          <div className="mb-5">
            <label
              htmlFor="name"
              className="mb-3 block text-base font-medium text-[#07074D]"
            >
              Nombre
            </label>
            <input
              type="text"
              name="name"
              id="name"
              value={name}
              onChange={handleInputChange}
              placeholder="Nombre"
              className="w-full shadow-md rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-indigo-600"
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="name"
              className="mb-3 block text-base font-medium text-[#07074D]"
            >
              Grado
            </label>
            <input
              type="text"
              name="grade"
              id="grade"
              value={grade}
              onChange={handleInputChange}
              placeholder="Ej. 1ro Bach Ciencias"
              className="w-full shadow-md rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-indigo-600"
            />
          </div>
          <div>
            <button
              type="submit"
              className="main-button"
            >
              Aceptar
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Student;
