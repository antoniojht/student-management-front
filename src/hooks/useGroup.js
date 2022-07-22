import { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../context/authContext';
import { list, searchContainName } from '../utils/services/groups';
import { SUCCESS } from '../consts/consts';

const useGroup = (skip, limit) => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const [groups, setGroups] = useState([]);
  const [isSearching, setIsSearching] = useState(false);

  useEffect(() => {
    list(skip, limit, user.token).then((response) => {
      if (response.status === SUCCESS) {
        setGroups(response.data);
      }
    });
  }, [skip, limit, isSearching]);

  const search = (e) => {
    if (e.target.value.length > 0) {
      searchContainName(e.target.value, user.token).then((response) => {
        setGroups(response.data);
        setIsSearching(true);
      });
    } else {
      setIsSearching(false);
    }
  };

  return {
    navigate, groups, search, isSearching,
  };
};

export default useGroup;
