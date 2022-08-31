import { useNavigate } from 'react-router-dom';
import Error from '../../../common/Error/Error';
import Modal from '../../../common/Modal/Modal';
import useStudent from '../../../../hooks/useStudent';
import Button from '../../../common/Button/Button';
import StudentEdit from './StudentEdit';

function Student() {
  const {
    values,
    handleInputChange,
    handleToggleChange,
    isOpen,
    setIsOpen,
    message,
    creating,
    error,
    handleSubmit,
  } = useStudent();

  const navigate = useNavigate();

  const {
    name, surname, telephone, email, active,
  } = values;

  const navigateToStudent = () => {
    if (!error) {
      navigate('/students', { replace: true });
    }
  };

  return (
    <>
      {isOpen && <Modal header="Alumno" body={message} setIsOpen={setIsOpen} navigate={navigateToStudent} />}
      {error && <Error />}
      <div className="mx-auto m-8 w-full max-w-[550px]">
        <form onSubmit={handleSubmit}>
          <div className="mb-5">
            <label
              htmlFor="name"
              className="label-form"
            >
              Nombre
            </label>
            <input
              type="text"
              name="name"
              id="name"
              value={name}
              onChange={handleInputChange}
              placeholder="Nombre"
              className="input-form"
              required
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="name"
              className="label-form"
            >
              Apellidos
            </label>
            <input
              type="text"
              name="surname"
              id="surname"
              value={surname}
              onChange={handleInputChange}
              placeholder="Apellidos"
              className="input-form"
              required
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="name"
              className="label-form"
            >
              Telefono
            </label>
            <input
              type="text"
              name="telephone"
              id="telephone"
              value={telephone}
              onChange={handleInputChange}
              placeholder="Telefono"
              className="input-form"
              required
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="email"
              className="label-form"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={email}
              onChange={handleInputChange}
              placeholder="ejemplo@dominio.com"
              className="input-form focus:shadow-md"
              required
            />
          </div>
          {!creating && (
            <>
              <div>
                <label
                  htmlFor="toggle"
                  className="text-sm font-medium text-gray-700 mr-4 align-super"
                >
                  Activo
                </label>
                <input type="checkbox" name="active" id="toggle" className="py-3 px-3 rounded-full shadow-md checked:bg-blue-500 cursor-pointer" checked={active} onChange={handleToggleChange} value={active} />
              </div>
              <StudentEdit />
            </>
          )}
          <div className="flex justify-end">
            <Button type="submit" label="Aceptar" />
          </div>
        </form>
      </div>
    </>
  );
}

export default Student;
