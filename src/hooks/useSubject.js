import { useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../context/authContext';
import { SUCCESS } from '../consts/consts';
import { list, searchContainName } from '../utils/services/subjects';

const useSubject = (skip, limit) => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const [subjects, setSubjects] = useState([]);
  const [isSearching, setIsSearching] = useState(false);

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

  return {
    navigate, subjects, search, isSearching,
  };
};

export default useSubject;
