import Search from '../../common/Search/Search';
import Pagination from '../../common/Pagination/Pagination';
import usePagination from '../../../hooks/usePagination';
import SubjectRow from './SubjectRow';
import useSubject from '../../../hooks/useSubject';

function Subjects() {
  const [increment, decrement, skip, limit] = usePagination();
  const {
    navigate, subjects, search, isSearching,
  } = useSubject(skip, limit);
  return (
    <>
      <p className="text-2xl m-8 ">
        Asignaturas
      </p>

      <div className="flex justify-between m-8">
        <Search search={search} />
        <div>
          <button
            type="button"
            onClick={() => {
              navigate('/subject');
            }}
            className="main-button hover:cursor-pointer"
          >
            Crear asignatura
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
                    Grado
                  </th>
                  <th className="table-head">
                    Editar
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white">
                {subjects.map((subject) => (
                  <SubjectRow key={subject._id} {...subject} />
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

export default Subjects;
