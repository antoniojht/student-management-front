import StudentCourse from './StudentCourse';
import StudentScore from './StudentScore';
import StudentPayment from './StudentPayment';
import Select from '../../../common/Select/Select';
import Button from '../../../common/Button/Button';
import useStudent from '../../../../hooks/useStudent';

function StudentEdit() {
  const {
    values,
    handleToggleChange,
    removeCourse,
    subjects,
    selectSubject,
    handleSelectSubject,
    addSubjectAsSelected,
  } = useStudent();

  const {
    active, course, score, payment,
  } = values;

  const selectOptions = subjects.map((subject) => ({
    value: subject._id, label: `${subject.name} ${subject.grade}`,
  }));

  return (
    <>
      <div className="mb-8">
        <label htmlFor="toggle" className="text-sm font-medium text-gray-700 mr-4 align-super">Activo</label>
        <input type="checkbox" name="active" id="toggle" className="py-3 px-3 rounded-full shadow-md checked:bg-blue-500 cursor-pointer" checked={active} onChange={handleToggleChange} value={active} />
      </div>
      <div className="mb-8">
        <label htmlFor="course" className="label-form">Asignaturas</label>
        <table className="w-full">
          <thead>
            <tr>
              <th className="text-left px-3 py-2"> </th>
              <th className="text-left px-3 py-2"> </th>
              <th className="text-left px-3 py-2"> </th>
            </tr>
          </thead>
          <tbody>
            {
              course.map((item) => (
                <StudentCourse
                  key={item._id}
                  item={item}
                  removeCourse={() => {
                    removeCourse(item._id);
                  }}
                />
              ))
            }
          </tbody>
        </table>
        <Select
          name={selectSubject}
          handleChange={handleSelectSubject}
          options={selectOptions}
        />
        <button className="main-button" type="button" onClick={() => { addSubjectAsSelected(selectSubject); }}>Añadir asignatura</button>
      </div>
      <div className="mb-8">
        <label htmlFor="payments" className="label-form">Puntuaciones</label>
        <table className="w-full">
          <thead>
            <tr>
              <th className="text-left px-4 py-2">
                <span className="text-sm font-medium text-gray-700">
                  Trimestre
                </span>
              </th>
              <th className="text-left px-4 py-2">
                <span className="text-sm font-medium text-gray-700">
                  Puntuacion
                </span>
              </th>
              <th className="text-left px-4 py-2">
                <span className="text-sm font-medium text-gray-700">
                  Asignatura
                </span>
              </th>
            </tr>
          </thead>
          <tbody>
            {score.map((p) => (
              <StudentScore key={p._id} score={p} />
            ))}
          </tbody>
        </table>
        <button className="main-button" type="button">Añadir nota</button>
      </div>
      <div className="mb-8">
        <label htmlFor="payments" className="label-form">Pagos</label>
        <table className="w-full">
          <thead className="">
            <tr>
              <th className="text-left px-4 py-2">
                <span className="text-sm font-medium text-gray-700">
                  Fecha
                </span>
              </th>
              <th className="text-left px-4 py-2">
                <span className="text-sm font-medium text-gray-700">
                  Pagado
                </span>
              </th>
            </tr>
          </thead>
          <tbody>
            {payment.map((p) => (
              <StudentPayment
                key={p._id}
                payment={p}
              />
            ))}
          </tbody>
        </table>
        <Button type="button" label="Añadir Pago" />
      </div>
    </>
  );
}

export default StudentEdit;
