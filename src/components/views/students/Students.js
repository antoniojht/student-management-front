import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Search from '../../common/Search/Search';
import Pagination from '../../common/Pagination/Pagination';
import Select from '../../common/Select/Select';
import useUser from '../../../hooks/useUser';
import usePagination from '../../../hooks/usePagination';
import StudentTable from './StudentTable';

function Students() {
  const navigate = useNavigate();
  const [order, setOrder] = useState('name');
  const [increment, decrement, skip, limit] = usePagination();
  const { students, search, isSearching } = useUser(order, skip, limit);

  const selectOptions = [
    { value: 'name', label: 'Nombre' },
    { value: 'email', label: 'Email' },
    { value: 'date', label: 'Fecha' },
  ];

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

      <StudentTable students={students} />

      {!isSearching && <Pagination increment={increment} decrement={decrement} />}
    </>
  );
}

export default Students;
