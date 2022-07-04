import { NavLink } from 'react-router-dom';
import '../../../App.css';

function Sidebar() {
  return (
    <div className="flex flex-col bg-indigo-700">
      <p className="font-bold text-2xl">App</p>
      <NavLink className="" to="/">
        Home
      </NavLink>
      <NavLink className="" to="/students">
        Alumnos
      </NavLink>
      <NavLink className="" to="/groups">
        Grupos
      </NavLink>
      <NavLink className="" to="/subjects">
        Asignaturas
      </NavLink>
      <NavLink className="" to="/">
        Logout
      </NavLink>
    </div>
  );
}

export default Sidebar;
