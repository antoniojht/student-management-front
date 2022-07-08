import { useContext, useEffect, useReducer } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { SUCCESS } from '../../../../consts/consts';
import AuthContext from '../../../../context/authContext';
import useForm from '../../../../hooks/useForm';
import { create } from '../../../../utils/services/subjects';
import uiTypes from '../../../../types/uiTypes';
import subjectTypes from '../../../../types/subjectTypes';
import uiReducer from '../../../../utils/reducers/uiReducer';
import Loading from '../../../common/Loading/Loading';
import Error from '../../../common/Error/Error';

function Student() {
  const { user, dispatch } = useContext(AuthContext);
  const [uiState, uiDispatch] = useReducer(uiReducer, {});
  const navigate = useNavigate();
  const params = useParams();

  useEffect(() => {
    if (params.id) {
      console.log('editing');
    } else {
      console.log('creating');
    }
  }, [params.id]);

  const [formValues, handleInputChange] = useForm({
    name: '', grade: '',
  });

  const { name, grade } = formValues;

  const handleSubmit = async (e) => {
    e.preventDefault();

    uiDispatch({ type: uiTypes.uiStartLoading });

    const newSubject = await create(formValues, user.token);
    console.log(newSubject);
    if (newSubject.status === SUCCESS) {
      dispatch({ type: subjectTypes.create, user: newSubject.data });
      uiDispatch({ type: uiTypes.uiRemoveError });
      navigate('/subjects', { replace: true });
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
