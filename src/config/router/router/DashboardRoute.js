import { Routes, Route } from 'react-router-dom';
import MainLayout from '../../../components/layout/MainLayout/MainLayout';
import Students from '../../../components/views/students/Students';
import Groups from '../../../components/views/groups/Groups';
import Subjects from '../../../components/views/subjects/Subjects';

function DashboardRoute() {
  return (
    <div className="container mt-5">
      <Routes>
        <Route path="students" element={<Students />} />
        <Route path="groups" element={<Groups />} />
        <Route path="subjects" element={<Subjects />} />

        <Route path="/" element={<MainLayout />} />
      </Routes>
    </div>
  );
}

export default DashboardRoute;
