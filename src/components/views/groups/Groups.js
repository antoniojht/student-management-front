import {
  useContext, useEffect, useReducer,
} from 'react';
import { useNavigate } from 'react-router-dom';
import Search from '../../common/Search/Search';
import groupReducer from '../../../utils/reducers/groupReducer';
import { list } from '../../../utils/services/groups';
import AuthContext from '../../../context/authContext';
import { SUCCESS } from '../../../consts/consts';
import types from '../../../types/groupTypes';
import Pagination from '../../common/Pagination/Pagination';
import usePagination from '../../../hooks/usePagination';
import GroupRow from './GroupRow';

function Groups() {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const [state, dispatch] = useReducer(groupReducer, {});
  const [increment, decrement, skip, limit] = usePagination();

  useEffect(() => {
    list(skip, limit, user.token).then((response) => {
      if (response.status === SUCCESS) {
        dispatch({ type: types.list, payload: response.data });
      }
    });
  }, [state]);

  return (
    <>
      <p className="text-2xl m-8 ">
        Grupos
      </p>

      <div className="flex justify-between m-8">
        <div className="mt-8">
          <Search />
        </div>
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
                {state.groups?.map((group) => (
                  <GroupRow {...group} />
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

export default Groups;
