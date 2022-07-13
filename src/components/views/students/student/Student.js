import {
  useContext, useEffect, useReducer, useState,
} from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { SUCCESS } from '../../../../consts/consts';
import AuthContext from '../../../../context/authContext';
import useForm from '../../../../hooks/useForm';
import { create, getById } from '../../../../utils/services/students';
import uiTypes from '../../../../types/uiTypes';
import studentTypes from '../../../../types/studentTypes';
import uiReducer from '../../../../utils/reducers/uiReducer';
import Loading from '../../../common/Loading/Loading';
import Error from '../../../common/Error/Error';
import studentReducer from '../../../../utils/reducers/studentReducer';
import StudentCourse from './StudentCourse';
import StudentScore from './StudentScore';
import StudentPayment from './StudentPayment';

function Student() {
  const [creating, setCreating] = useState(false);
  const { user, dispatch } = useContext(AuthContext);
  const [uiState, uiDispatch] = useReducer(uiReducer, {});
  const [, stateDispatch] = useReducer(studentReducer, {});
  const navigate = useNavigate();
  const params = useParams();

  const [formValues, setValues, handleInputChange, handleToggleChange] = useForm({
    name: '', surname: '', telephone: '', email: '', active: false, course: [], payment: [], score: [],
  });

  const {
    name, surname, telephone, email, active, course, score, payment,
  } = formValues;

  useEffect(() => {
    if (params.id) {
      getById(params.id, user.token)
        .then((response) => {
          const { status, data } = response;
          if (status === SUCCESS) {
            uiDispatch({ type: uiTypes.uiRemoveError });
            stateDispatch({ type: studentTypes.set, payload: data[0] });
            setValues(data[0]);
          } else {
            uiDispatch({ type: uiTypes.uiSetError, payload: 'Ocurrio un error durante el registro' });
          }
        }).catch((error) => {
          uiDispatch({ type: uiTypes.error, payload: error });
        });
    } else {
      console.log('creating');
      setCreating(true);
    }
  }, [params.id]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    uiDispatch({ type: uiTypes.uiStartLoading });

    const newUser = await create(formValues, user.token);

    if (newUser.status === SUCCESS) {
      dispatch({ type: studentTypes.create, user: newUser.data });
      uiDispatch({ type: uiTypes.uiRemoveError });
      navigate('/students', { replace: true });
    } else {
      uiDispatch({ type: uiTypes.uiSetError, payload: 'Ocurrio un error durante el registro' });
    }

    uiDispatch({ type: uiTypes.uiFinishLoading });
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
                        <StudentCourse key={item.id} item={item} />
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
                      <StudentScore key={p.id} score={p} />
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
                      <StudentPayment key={p.id} payment={p} />
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
