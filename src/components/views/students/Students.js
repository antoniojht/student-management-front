import { useNavigate } from 'react-router-dom';
import Search from '../../common/Search/Search';

function Students() {
  const navigate = useNavigate();

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
            className="main-button"
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
                  <th className="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                    Nombre
                  </th>
                  <th className="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                    Telefono
                  </th>
                  <th className="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                    Status
                  </th>
                  <th className="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                    Curso
                  </th>
                  <th className="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                    Editar
                  </th>
                </tr>
              </thead>

              <tbody className="bg-white">
                <tr>
                  <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 w-10 h-10">
                        <div className="flex items-center justify-center w-12 h-12 font-bold rounded-full select-none text-cyan-800 bg-cyan-100">
                          A
                        </div>
                      </div>

                      <div className="ml-4">
                        <div className="text-sm font-medium leading-5 text-gray-900">
                          Antonio Jose Herrera Tabaco
                          <p className="font-light text-xs text-gray-500 ">antoniojota94@gmail.com</p>
                        </div>
                      </div>
                    </div>
                  </td>

                  <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                    <div className="text-sm leading-5 text-gray-500">633733844</div>
                  </td>

                  <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                    <span
                      className="inline-flex px-2 text-xs font-semibold leading-5 text-green-800 bg-green-100 rounded-full"
                    >
                      Activo
                    </span>
                  </td>

                  <td
                    className="px-6 py-4 text-sm leading-5 text-gray-500 whitespace-no-wrap border-b border-gray-200"
                  >
                    Matematicas 4 ESO
                  </td>
                  <td
                    className="px-6 py-4 text-sm leading-5 text-gray-500 whitespace-no-wrap border-b border-gray-200"
                  >
                    <button type="button" className="flex p-2.5 bg-indigo-500 rounded-xl hover:rounded-3xl hover:bg-indigo-600 transition-all duration-300 text-white">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                      </svg>
                    </button>
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 w-10 h-10">
                        <div className="flex items-center justify-center w-12 h-12 font-bold rounded-full select-none text-cyan-800 bg-cyan-100">
                          J
                        </div>
                      </div>

                      <div className="ml-4">
                        <div className="text-sm font-medium leading-5 text-gray-900">
                          Jose Luis Rodriguez Martin
                          <p className="font-light text-xs text-gray-500 ">joseluis@gmail.com</p>
                        </div>
                      </div>
                    </div>
                  </td>

                  <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                    <div className="text-sm leading-5 text-gray-500">632118972</div>
                  </td>

                  <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                    <span
                      className="inline-flex px-2 text-xs font-semibold leading-5 text-green-800 bg-green-100 rounded-full"
                    >
                      Activo
                    </span>
                  </td>

                  <td
                    className="px-6 py-4 text-sm leading-5 text-gray-500 whitespace-no-wrap border-b border-gray-200"
                  >
                    Matematicas 3 ESO
                  </td>
                  <td
                    className="px-6 py-4 text-sm leading-5 text-gray-500 whitespace-no-wrap border-b border-gray-200"
                  >
                    <button type="button" className="flex p-2.5 bg-indigo-500 rounded-xl hover:rounded-3xl hover:bg-indigo-600 transition-all duration-300 text-white">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                      </svg>
                    </button>
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 w-10 h-10">
                        <div className="flex items-center justify-center w-12 h-12 font-bold rounded-full select-none text-cyan-800 bg-cyan-100">
                          M
                        </div>
                      </div>

                      <div className="ml-4">
                        <div className="text-sm font-medium leading-5 text-gray-900">
                          Marta Jimenez Toro
                          <p className="font-light text-xs text-gray-500 ">martajimto@gmail.com</p>
                        </div>
                      </div>
                    </div>
                  </td>

                  <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                    <div className="text-sm leading-5 text-gray-500">600123844</div>
                  </td>

                  <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                    <span
                      className="inline-flex px-2 text-xs font-semibold leading-5 text-green-800 bg-green-100 rounded-full"
                    >
                      Activo
                    </span>
                  </td>

                  <td
                    className="px-6 py-4 text-sm leading-5 text-gray-500 whitespace-no-wrap border-b border-gray-200"
                  >
                    Matematicas 1 Bachillerato
                  </td>
                  <td
                    className="px-6 py-4 text-sm leading-5 text-gray-500 whitespace-no-wrap border-b border-gray-200"
                  >
                    <button type="button" className="flex p-2.5 bg-indigo-500 rounded-xl hover:rounded-3xl hover:bg-indigo-600 transition-all duration-300 text-white">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                      </svg>
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default Students;
