import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { SUCCESS } from '../../../../consts/consts';
import AuthContext from '../../../../context/authContext';
import useForm from '../../../../hooks/useForm';
import create from '../../../../utils/services/students';

function Student() {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const [formValues, handleInputChange] = useForm({
    name: '', surname: '', telephone: '', email: '',
  });

  const {
    name, surname, telephone, email,
  } = formValues;

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = create(formValues, user.token);

    if (data.status === SUCCESS) {
      navigate('/students', { replace: true });
    }

    console.log('hay errores en el registro');
  };

  return (
    <div className="mx-auto m-8 w-full max-w-[550px]">
      <form onSubmit={handleSubmit}>
        <div className="mb-5">
          <label
            htmlFor="name"
            className="mb-3 block text-base font-medium text-[#07074D]"
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
            className="w-full shadow-md rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-indigo-600"
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="name"
            className="mb-3 block text-base font-medium text-[#07074D]"
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
            className="w-full shadow-md rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-indigo-600"
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="name"
            className="mb-3 block text-base font-medium text-[#07074D]"
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
            className="w-full shadow-md rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-indigo-600"
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="email"
            className="mb-3 block text-base font-medium text-[#07074D]"
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
            className="w-full shadow-md rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-indigo-600 focus:shadow-md"
          />
        </div>
        <div>
          <button
            type="submit"
            className="main-button"
          >
            Aceptar
          </button>
        </div>
      </form>
    </div>
  );
}

export default Student;
