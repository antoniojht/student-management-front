import {
  useContext, useEffect, useReducer,
} from 'react';
import { useNavigate } from 'react-router-dom';
import Search from '../../common/Search/Search';
import studentReducer from '../../../utils/reducers/studentReducer';
import { list } from '../../../utils/services/students';
import AuthContext from '../../../context/authContext';
import { SUCCESS } from '../../../consts/consts';
import types from '../../../types/studentTypes';
import Pagination from '../../common/Pagination/Pagination';
import usePagination from '../../../hooks/usePagination';

function Students() {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const [state, dispatch] = useReducer(studentReducer, {});
  const [increment, decrement, skip, limit] = usePagination();

  useEffect(() => {
    list(skip, limit, user.token).then((response) => {
      if (response.status === SUCCESS) {
        dispatch({ type: types.list, payload: response.data });
      }
    });
  }, [state.users]);

  return (
    <>
      <p className="text-2xl m-8 ">
        Alumnos
      </p>

      <div className="flex justify-between m-8">
        <Search />
        <div>

          <select className="rounded bg-white px-6 shadow-xl ring-1 ring-gray-900/5 py-2 mr-5">
            <option disabled defaultValue>
              Ordenar por
            </option>
            <option>Nombre</option>
            <option>Apellido</option>
            <option>Curso</option>
          </select>
          <button
            type="button"
            onClick={() => {
              navigate('/student');
            }}
            className="main-button hover:cursor-pointer"
          >
            Crear alumno
          </button>
        </div>
      </div>

      <div className="flex flex-col m-8">
        <div className="py-2 -my-2 overflow-x-auto">
          <div className="inline-block min-w-full overflow-hidden align-middle border-b border-gray-200 shadow sm:rounded-lg">
            <table className="min-w-full">
              <thead>
                <tr>
                  <th className="table-head">
                    Nombre
                  </th>
                  <th className="table-head">
                    Telefono
                  </th>
                  <th className="table-head">
                    Status
                  </th>
                  <th className="table-head">
                    Curso
                  </th>
                  <th className="table-head">
                    Editar
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white">
                {state.users?.map((student) => (
                  <tr key={student.email}>
                    <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 w-10 h-10">
                          <div className="flex items-center justify-center w-12 h-12 font-bold rounded-full select-none text-cyan-800 bg-cyan-100">
                            {student.name.charAt(0)}
                          </div>
                        </div>

                        <div className="ml-4">
                          <div className="text-sm font-medium leading-5 text-gray-900">
                            {student.name}
                            <p className="font-light text-xs text-gray-500 ">{student.email}</p>
                          </div>
                        </div>
                      </div>
                    </td>

                    <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                      <div className="text-sm leading-5 text-gray-500">{student.telephone}</div>
                    </td>

                    <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                      <span
                        className="inline-flex px-2 text-xs font-semibold leading-5 text-green-800 bg-green-100 rounded-full"
                      >
                        {student.active ? 'Activo' : 'Inactivo'}
                      </span>
                    </td>

                    <td
                      className="px-6 py-4 text-sm leading-5 text-gray-500 whitespace-no-wrap border-b border-gray-200"
                    >
                      {student.course.length > 0 ? 'Dummy course' : 'No asignado'}
                    </td>
                    <td
                      className="px-6 py-4 text-sm leading-5 text-gray-500 whitespace-no-wrap border-b border-gray-200"
                    >
                      <button
                        type="button"
                        className="flex p-2.5 bg-indigo-500 rounded-xl hover:rounded-3xl hover:bg-indigo-600 transition-all duration-300 text-white hover:cursor-pointer"
                        onClick={() => {
                          navigate(`/student/${student._id}`);
                        }}
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                        </svg>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <Pagination increment={increment} decrement={decrement} />
    </>
  );
}

export default Students;
