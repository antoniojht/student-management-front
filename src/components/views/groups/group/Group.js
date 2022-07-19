import { useContext, useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import AuthContext from '../../../../context/authContext';
import useForm from '../../../../hooks/useForm';
import Modal from '../../../common/Modal/Modal';
import Error from '../../../common/Error/Error';
import { SUCCESS } from '../../../../consts/consts';
import {
  create, listMembersByGroup, removeStudentFromGroup, editGroup,
} from '../../../../utils/services/groups';
import GroupMember from './GroupMember';

function Group() {
  const initialState = {
    name: '', members: [],
  };

  const { user } = useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(false);
  const [creating, setCreating] = useState(false);
  const [message, setMessage] = useState('');
  const [error, setError] = useState(false);
  const params = useParams();
  const navigate = useNavigate();

  const {
    values, handleInputChange, setValues,
  } = useForm(initialState);

  useEffect(() => {
    if (params.name) {
      listMembersByGroup(params.name, user.token).then((response) => {
        const { status, data } = response;
        if (status === SUCCESS) {
          setValues(data[0]);
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

  const { name, members } = values;

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (creating) {
      const groupCreated = await create(values, user.token);

      if (groupCreated.status === SUCCESS) {
        setMessage('Grupo creado correctamente');
      } else {
        setMessage('Ocurrio un error durante la creación del grupo');
        setError(true);
      }
    } else {
      const groupEdited = await editGroup(params.name, name, user.token);

      if (groupEdited.status === SUCCESS) {
        setMessage('Grupo editado correctamente');
      } else {
        setMessage('Ocurrio un error durante la edición del grupo');
        setError(true);
      }
    }
    setIsOpen(true);
  };

  const popFromCourse = (member) => {
    removeStudentFromGroup(params.name, member._id, user.token)
      .then((response) => {
        if (response.status === SUCCESS) {
          setMessage('Estudiante retirado correctamente');
          const index = members.findIndex((m) => m.email === member.email);
          if (index > -1) {
            members.splice(index, 1);
          }
          setValues({ ...values, members });
        } else {
          setMessage('Ocurrio un error durante la retirada del estudiante');
          setError(true);
        }
      });
  };

  const navigateToStudent = () => {
    if (!error) {
      navigate('/groups', { replace: true });
    }
  };

  return (
    <>
      {isOpen && <Modal header="Asignatura" body={message} setIsOpen={setIsOpen} navigate={navigateToStudent} />}
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
          {!creating && (
            <div className="mb-8">
              <label htmlFor="payments" className="label-form">Alumnos</label>
              <table className="w-full">
                <thead>
                  <tr>
                    <th className="text-left px-4 py-2">
                      <span className="text-sm font-medium text-gray-700">
                        Nombre
                      </span>
                    </th>
                    <th className="text-left px-4 py-2">
                      <span className="text-sm font-medium text-gray-700">
                        Email
                      </span>
                    </th>
                    <th className="text-left px-4 py-2">
                      <span className="text-sm font-medium text-gray-700">
                        Accion
                      </span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {members.map((member) => (
                    <GroupMember
                      key={member._id}
                      member={member}
                      popFromCourse={() => popFromCourse(member)}
                    />
                  ))}
                </tbody>
              </table>
              <button className="main-button" type="button">Añadir alumno</button>
            </div>
          )}
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

export default Group;
