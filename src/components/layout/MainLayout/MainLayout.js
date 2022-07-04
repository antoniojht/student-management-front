import Dashboard from '../Dashboard/Dashboard';
import Sidebar from '../Sidebar/Sidebar';

function MainLayout() {
  return (
    <div className="grid grid-flow-col auto-cols-fr">
      <div className="col-span-2">
        <Sidebar />
      </div>
      <div className="col-span-10">
        <Dashboard />
      </div>
    </div>
  );
}

export default MainLayout;
