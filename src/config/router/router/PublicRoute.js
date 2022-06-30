import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import AuthContext from '../../../context/auth';

function PublicRoute({ children }) {
  const { user } = useContext(AuthContext);

  return !user.logged ? children : <Navigate to="/" />;
}

export default PublicRoute;
