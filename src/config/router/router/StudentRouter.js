import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from '../../../components/layout/MainLayout/MainLayout';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import Login from '../../../components/views/login/Login';

function StudentRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/login"
          element={(
            <PublicRoute>
              <Login />
            </PublicRoute>
          )}
        />
        <Route
          path="/*"
          element={(
            <PrivateRoute>
              <MainLayout />
            </PrivateRoute>
          )}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default StudentRouter;
