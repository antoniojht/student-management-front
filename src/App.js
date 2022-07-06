import { useEffect, useMemo, useReducer } from 'react';
import AuthContext from './context/authContext';
import authReducer from './utils/reducers/authReducer';
import StudentRouter from './config/router/router/StudentRouter';
import './App.css';

const init = () => JSON.parse(localStorage.getItem('user')) || { logged: false };

function App() {
  const [user, dispatch] = useReducer(authReducer, {}, init);

  useEffect(() => {
    if (!user) return;

    localStorage.setItem('user', JSON.stringify(user));
  }, [user]);

  const value = useMemo(() => ({
    user, dispatch,
  }), [user]);

  return (
    <AuthContext.Provider
      value={value}
    >
      <StudentRouter />
    </AuthContext.Provider>
  );
}

export default App;
