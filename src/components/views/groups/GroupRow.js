import { useNavigate } from 'react-router-dom';

function GroupRow({
  _id, name, members,
}) {
  const navigate = useNavigate();
  return (
    <tr key={_id}>
      <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
        <div className="flex items-center">
          <div className="ml-4">
            <div className="text-sm font-medium leading-5 text-gray-900">
              {name}
            </div>
          </div>
        </div>
      </td>

      <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
        <div className="text-sm leading-5 text-gray-500">{members.join(', ')}</div>
      </td>

      <td
        className="px-6 py-4 text-sm leading-5 text-gray-500 whitespace-no-wrap border-b border-gray-200"
      >
        <button
          type="button"
          className="flex p-2.5 bg-indigo-500 rounded-xl hover:rounded-3xl hover:bg-indigo-600 transition-all duration-300 text-white hover:cursor-pointer"
          onClick={() => {
            navigate(`/group/${name}`);
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

export default GroupRow;
