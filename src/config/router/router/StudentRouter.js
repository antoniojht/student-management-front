import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from '../../../components/layout/MainLayout/MainLayout';
// import PrivateRoute from './PrivateRoute';
// import PublicRoute from './PublicRoute';
import Login from '../../../components/views/login/Login';

function StudentRouter() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/login" element={<PublicRoute />} />
        <Route path="/" element={<PrivateRoute />} /> */}
        <Route path="/login" element={<Login />} />
        <Route path="/*" element={<MainLayout />} />
      </Routes>
    </BrowserRouter>
  );
}

export default StudentRouter;
