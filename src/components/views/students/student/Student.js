import {
  useEffect, useState, useReducer,
} from 'react';
import { useParams } from 'react-router-dom';
import useForm from '../../../../hooks/useForm';
import uiReducer from '../../../../utils/reducers/uiReducer';
import Loading from '../../../common/Loading/Loading';
import Error from '../../../common/Error/Error';
import StudentCourse from './StudentCourse';
import StudentScore from './StudentScore';
import StudentPayment from './StudentPayment';
import useUser from '../../../../hooks/useUser';

function Student() {
  const [creating, setCreating] = useState(false);
  const [uiState] = useReducer(uiReducer, {});
  const params = useParams();
  const { createUser, editUser } = useUser();

  const [formValues, setValues, handleInputChange, handleToggleChange] = useForm({
    name: '', surname: '', telephone: '', email: '', active: false, course: [], payment: [], score: [],
  });

  const {
    name, surname, telephone, email, active, course, score, payment,
  } = formValues;

  useEffect(() => {
    if (params.id) {
      editUser(params.id, setValues);
    } else {
      setCreating(true);
    }
  }, [params.id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    createUser(formValues);
  };

  return (
    <>
      {uiState.msgError && <Error />}
      {uiState.loading && <Loading />}
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
            />
          </div>
          {!creating && (
            <>
              <div className="mb-8">
                <label htmlFor="toggle" className="text-sm font-medium text-gray-700 mr-4 align-super">Activo</label>
                <input type="checkbox" name="active" id="toggle" className="py-3 px-3 rounded-full shadow-md checked:bg-blue-500 cursor-pointer" checked={active} onChange={handleToggleChange} value={active} />
              </div>
              <div className="mb-8">
                <label htmlFor="course" className="label-form">Cursos</label>
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
                        <StudentCourse key={item._id} item={item} />
                      ))
                    }
                  </tbody>
                </table>
                <button className="main-button" type="button">Añadir curso</button>
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
                      <StudentPayment key={p._id} payment={p} />
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
