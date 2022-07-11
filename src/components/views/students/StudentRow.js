import { useNavigate } from 'react-router-dom';

function StudentRow({
  _id, email, name, telephone, active, course,
}) {
  const navigate = useNavigate();
  return (
    <tr key={email} className="hover:bg-gray-100 cursor-pointer" onClick={() => navigate(`/student/${_id}`, { replace: true })}>
      <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
        <div className="flex items-center">
          <div className="flex-shrink-0 w-10 h-10">
            <div className="flex items-center justify-center w-12 h-12 font-bold rounded-full select-none text-cyan-800 bg-cyan-100">
              {name.charAt(0)}
            </div>
          </div>

          <div className="ml-4">
            <div className="text-sm font-medium leading-5 text-gray-900">
              {name}
              <p className="font-light text-xs text-gray-500 ">{email}</p>
            </div>
          </div>
        </div>
      </td>

      <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
        <div className="text-sm leading-5 text-gray-500">{telephone}</div>
      </td>

      <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
        {active
          ? (
            <span
              className="inline-flex px-2 text-xs font-semibold leading-5 text-green-800 bg-green-100 rounded-full"
            >
              Activo
            </span>
          )
          : (
            <span
              className="inline-flex px-2 text-xs font-semibold leading-5 text-red-600 bg-red-200 rounded-full"
            >
              Inactivo
            </span>
          )}
      </td>

      <td
        className="px-6 py-4 text-sm leading-5 text-gray-500 whitespace-no-wrap border-b border-gray-200"
      >
        {course.length > 0 ? 'Dummy course' : 'No asignado'}
      </td>
      <td
        className="px-6 py-4 text-sm leading-5 text-gray-500 whitespace-no-wrap border-b border-gray-200"
      >
        <button
          type="button"
          className="flex p-2.5 bg-indigo-500 rounded-xl hover:rounded-3xl hover:bg-indigo-600 transition-all duration-300 text-white hover:cursor-pointer"
          onClick={() => {
            navigate(`/student/${_id}`);
          }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
          </svg>
        </button>
      </td>
    </tr>
  );
}

export default StudentRow;
