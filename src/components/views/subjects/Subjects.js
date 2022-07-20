import {
  useContext, useEffect, useState,
} from 'react';
import { useNavigate } from 'react-router-dom';
import Search from '../../common/Search/Search';
import { list, searchContainName } from '../../../utils/services/subjects';
import AuthContext from '../../../context/authContext';
import { SUCCESS } from '../../../consts/consts';
import Pagination from '../../common/Pagination/Pagination';
import usePagination from '../../../hooks/usePagination';
import SubjectRow from './SubjectRow';

function Subjects() {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const [subjects, setSubjects] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const [increment, decrement, skip, limit] = usePagination();

  useEffect(() => {
    list(skip, limit, user.token).then((response) => {
      if (response.status === SUCCESS) {
        setSubjects(response.data);
      }
    });
  }, [skip, limit, isSearching]);

  const search = (e) => {
    if (e.target.value.length > 0) {
      searchContainName(e.target.value, user.token).then((response) => {
        setSubjects(response.data);
        setIsSearching(true);
      });
    } else {
      setIsSearching(false);
    }
  };

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
      <Pagination increment={increment} decrement={decrement} />
    </>
  );
}

export default Subjects;
