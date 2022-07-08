import { Routes, Route } from 'react-router-dom';
import Home from '../../components/views/home/Home';
import Students from '../../components/views/students/Students';
import Student from '../../components/views/students/student/Student';
import Groups from '../../components/views/groups/Groups';
import Subjects from '../../components/views/subjects/Subjects';

function DashboardRoute() {
  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="students" element={<Students />} />
        <Route path="student" element={<Student />} />
        <Route path="student/:id" element={<Student />} />
        <Route path="groups" element={<Groups />} />
        <Route path="group" element={<Groups />} />
        <Route path="group/:id" element={<Groups />} />
        <Route path="subjects" element={<Subjects />} />
        <Route path="subject" element={<Subjects />} />
        <Route path="subject/:id" element={<Subjects />} />
      </Routes>
    </div>
  );
}

export default DashboardRoute;
