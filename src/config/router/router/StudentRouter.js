import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import PrivateRoute from './PrivateRoute';
// import PublicRoute from './PublicRoute';
import Login from '../../../components/views/login/Login';
import DashboardRoute from './DashboardRoute';

function StudentRouter() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/login" element={<PublicRoute />} />
        <Route path="/" element={<PrivateRoute />} /> */}
        <Route path="/login" element={<Login />} />
        <Route path="/*" element={<DashboardRoute />} />
      </Routes>
    </BrowserRouter>
  );
}

export default StudentRouter;
