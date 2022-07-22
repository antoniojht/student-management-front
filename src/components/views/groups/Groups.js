import Search from '../../common/Search/Search';
import Pagination from '../../common/Pagination/Pagination';
import usePagination from '../../../hooks/usePagination';
import GroupRow from './GroupRow';
import useGroup from '../../../hooks/useGroup';

function Groups() {
  const [increment, decrement, skip, limit] = usePagination();

  const {
    navigate, groups, search, isSearching,
  } = useGroup(skip, limit);

  return (
    <>
      <p className="text-2xl m-8 ">
        Grupos
      </p>

      <div className="flex justify-between m-8">
        <Search search={search} />
        <div>
          <button
            type="button"
            onClick={() => {
              navigate('/group');
            }}
            className="main-button hover:cursor-pointer"
          >
            Crear grupo
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
                    Personas
                  </th>
                  <th className="table-head">
                    Editar
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white">
                {groups.map((group) => (
                  <GroupRow key={group._id} {...group} />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      {!isSearching && <Pagination increment={increment} decrement={decrement} />}
    </>
  );
}

export default Groups;
