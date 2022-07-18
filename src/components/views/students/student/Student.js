import {
  useEffect, useState, useContext,
} from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import useForm from '../../../../hooks/useForm';
import Error from '../../../common/Error/Error';
import StudentCourse from './StudentCourse';
import StudentScore from './StudentScore';
import StudentPayment from './StudentPayment';
import Modal from '../../../common/Modal/Modal';
import {
  getById, removeStudentFromSubject, create, editUser,
} from '../../../../utils/services/students';
import AuthContext from '../../../../context/authContext';
import { SUCCESS } from '../../../../consts/consts';

function Student() {
  const initialState = {
    name: '', surname: '', telephone: '', email: '', active: false, course: [], payment: [], score: [],
  };

  const { user } = useContext(AuthContext);

  const [isOpen, setIsOpen] = useState(false);
  const [creating, setCreating] = useState(false);
  const [message, setMessage] = useState('');
  const [error, setError] = useState(false);
  const params = useParams();
  const navigate = useNavigate();

  const {
    values, handleInputChange, handleToggleChange, setValues,
  } = useForm(initialState);

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
    } else {
      setCreating(true);
    }
  }, []);

  const {
    name, surname, telephone, email, active, course, score, payment,
  } = values;

  const removeCourse = async (subject) => {
    const removedCourse = await removeStudentFromSubject(email, subject, user.token);

    if (removedCourse.status === SUCCESS || removedCourse.status === 200) {
      const index = removedCourse.data.course.indexOf(subject);
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

  const navigateToStudent = () => {
    if (!error) {
      navigate('/students', { replace: true });
    }
  };

  return (
    <>
      {isOpen && <Modal header="Alumno" body={message} setIsOpen={setIsOpen} navigate={navigateToStudent} />}
      {error && <Error />}
      <div className="mx-auto m-8 w-full max-w-[550px]">
        <form onSubmit={handleSubmit}>
          <div className="mb-5">
            <label
              htmlFor="name"
              className="label-form"
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
              className="input-form"
              required
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="name"
              className="label-form"
            >
              Apellidos
            </label>
            <input
              type="text"
              name="surname"
              id="surname"
              value={surname}
              onChange={handleInputChange}
              placeholder="Apellidos"
              className="input-form"
              required
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="name"
              className="label-form"
            >
              Telefono
            </label>
            <input
              type="text"
              name="telephone"
              id="telephone"
              value={telephone}
              onChange={handleInputChange}
              placeholder="Telefono"
              className="input-form"
              required
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="email"
              className="label-form"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={email}
              onChange={handleInputChange}
              placeholder="ejemplo@dominio.com"
              className="input-form focus:shadow-md"
              required
            />
          </div>
          {!creating && (
            <>
              <div className="mb-8">
                <label htmlFor="toggle" className="text-sm font-medium text-gray-700 mr-4 align-super">Activo</label>
                <input type="checkbox" name="active" id="toggle" className="py-3 px-3 rounded-full shadow-md checked:bg-blue-500 cursor-pointer" checked={active} onChange={handleToggleChange} value={active} />
              </div>
              <div className="mb-8">
                <label htmlFor="course" className="label-form">Asignaturas</label>
                <table className="w-full">
                  <thead>
                    <tr>
                      <th className="text-left px-3 py-2"> </th>
                      <th className="text-left px-3 py-2"> </th>
                      <th className="text-left px-3 py-2"> </th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      course.map((item) => (
                        <StudentCourse
                          key={item._id}
                          item={item}
                          removeCourse={() => {
                            removeCourse(item._id);
                          }}
                        />
                      ))
                    }
                  </tbody>
                </table>
                <button className="main-button" type="button">Añadir asignatura</button>
              </div>
              <div className="mb-8">
                <label htmlFor="payments" className="label-form">Puntuaciones</label>
                <table className="w-full">
                  <thead>
                    <tr>
                      <th className="text-left px-4 py-2">
                        <span className="text-sm font-medium text-gray-700">
                          Trimestre
                        </span>
                      </th>
                      <th className="text-left px-4 py-2">
                        <span className="text-sm font-medium text-gray-700">
                          Puntuacion
                        </span>
                      </th>
                      <th className="text-left px-4 py-2">
                        <span className="text-sm font-medium text-gray-700">
                          Asignatura
                        </span>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {score.map((p) => (
                      <StudentScore key={p._id} score={p} />
                    ))}
                  </tbody>
                </table>
                <button className="main-button" type="button">Añadir nota</button>
              </div>
              <div className="mb-8">
                <label htmlFor="payments" className="label-form">Pagos</label>
                <table className="w-full">
                  <thead className="">
                    <tr>
                      <th className="text-left px-4 py-2">
                        <span className="text-sm font-medium text-gray-700">
                          Fecha
                        </span>
                      </th>
                      <th className="text-left px-4 py-2">
                        <span className="text-sm font-medium text-gray-700">
                          Pagado
                        </span>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {payment.map((p) => (
                      <StudentPayment
                        key={p._id}
                        payment={p}
                      />
                    ))}
                  </tbody>
                </table>
                <button className="main-button" type="button">Añadir Pago</button>
              </div>
            </>
          )}
          <div className="flex justify-end">
            <button
              type="submit"
              className="main-button mt-8"
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
