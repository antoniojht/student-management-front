import { useContext, useState, useEffect } from 'react';
import AuthContext from '../context/authContext';
import { list, searchContainName } from '../utils/services/students';
import { SUCCESS } from '../consts/consts';

const useUser = (order = 'name', skip = 1, limit = 5) => {
  const { user } = useContext(AuthContext);
  const [students, setStudents] = useState([]);
  const [isSearching, setIsSearching] = useState(false);

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

  return {
    students, search, isSearching,
  };
};

export default useUser;
