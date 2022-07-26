import StudentRow from './StudentRow';

function StudentTable({ students }) {
  return (
    <div className="flex flex-col m-8">
      <div className="py-2 -my-2 overflow-x-auto">
        <div className="inline-block min-w-full overflow-hidden align-middle border-b border-gray-200 shadow sm:rounded-lg">
          <table className="min-w-full">
            <thead>
              <tr>
                <th className="table-head">
                  Nombre
                </th>
                <th className="table-head">
                  Telefono
                </th>
                <th className="table-head">
                  Estado
                </th>
                <th className="table-head">
                  Asignatura
                </th>
                <th className="table-head">
                  Acciones
                </th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {students.map((student) => (
                <StudentRow key={student._id} {...student} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default StudentTable;
