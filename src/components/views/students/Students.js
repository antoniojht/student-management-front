import {
  useContext, useEffect, useState,
} from 'react';
import { useNavigate } from 'react-router-dom';
import Search from '../../common/Search/Search';
import { list, searchContainName } from '../../../utils/services/students';
import AuthContext from '../../../context/authContext';
import { SUCCESS } from '../../../consts/consts';
import Pagination from '../../common/Pagination/Pagination';
import usePagination from '../../../hooks/usePagination';
import StudentRow from './StudentRow';
import Select from '../../common/Select/Select';

function Students() {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const [students, setStudents] = useState([]);
  const [increment, decrement, skip, limit] = usePagination();
  const [isSearching, setIsSearching] = useState(false);

  const [order, setOrder] = useState('name');

  const selectOptions = [
    { value: 'name', label: 'Nombre' },
    { value: 'email', label: 'Email' },
    { value: 'date', label: 'Fecha' },
  ];

  useEffect(() => {
    if (!isSearching) {
      list(skip, limit, user.token, order).then((response) => {
        if (response.status === SUCCESS) {
          setStudents(response.data);
        }
      });
    }
  }, [skip, limit, isSearching, order]);

  const search = (e) => {
    if (e.target.value.length > 0) {
      searchContainName(e.target.value, user.token).then((response) => {
        setStudents(response.data);
        setIsSearching(true);
      });
    } else {
      setIsSearching(false);
    }
  };

  const handleOrder = (e) => {
    setOrder(e.target.value);
  };

  return (
    <>
      <p className="text-2xl m-8 ">
        Alumnos
      </p>

      <div className="flex justify-between m-8">
        <div className="mt-8">
          <Search search={search} />
        </div>
        <div>
          <label
            htmlFor="orderBy"
            className="mb-3 block text-base font-medium text-[#07074D]"
          >
            Ordenar por
          </label>
          <Select name={order} handleChange={handleOrder} options={selectOptions} />
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
                    Estado
                  </th>
                  <th className="table-head">
                    Asignatura
                  </th>
                  <th className="table-head">
                    Editar
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white">
                {students.map((student) => (
                  <StudentRow key={student._id} {...student} />
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

export default Students;
