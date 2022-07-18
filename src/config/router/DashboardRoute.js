import { Routes, Route } from 'react-router-dom';
import Home from '../../components/views/home/Home';
import Students from '../../components/views/students/Students';
import Student from '../../components/views/students/student/Student';
import Groups from '../../components/views/groups/Groups';
import Group from '../../components/views/groups/group/Group';
import Subjects from '../../components/views/subjects/Subjects';
import Subject from '../../components/views/subjects/subject/Subject';

function DashboardRoute() {
  return (
    <div className="container max-h-screen overflow-y-auto">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="students" element={<Students />} />
        <Route path="student" element={<Student />} />
        <Route path="student/:id" element={<Student />} />
        <Route path="groups" element={<Groups />} />
        <Route path="group" element={<Group />} />
        <Route path="group/:name" element={<Group />} />
        <Route path="subjects" element={<Subjects />} />
        <Route path="subject" element={<Subject />} />
        <Route path="subject/:id" element={<Subject />} />
      </Routes>
    </div>
  );
}

export default DashboardRoute;
