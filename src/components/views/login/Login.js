import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from '../../../utils/auth';
import AuthContext from '../../../context/authContext';
import useForm from '../../../hooks/useForm';

function Login() {
  const { dispatch } = useContext(AuthContext);
  const navigate = useNavigate();

  const [formValues, handleInputChange] = useForm({
    email: '', password: '',
  });

  const { email, password } = formValues;

  const handleLogin = async (e) => {
    e.preventDefault();

    const data = await login(dispatch, email, password);
    if (data.name) {
      navigate('/', { replace: true });
    }
  };

  return (
    <section className="h-screen">
      <div className="container px-6 py-12 h-full">
        <div className="flex justify-center items-center flex-wrap h-full g-6 text-gray-800">
          <div className="md:w-8/12 lg:w-6/12 mb-12 md:mb-0">
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
              className="w-full"
              alt="Phone locked"
            />
          </div>
          <div className="md:w-8/12 lg:w-5/12 lg:ml-20">
            <form onSubmit={handleLogin}>
              <div className="mb-6">
                <input
                  type="text"
                  name="email"
                  value={email}
                  onChange={handleInputChange}
                  className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  placeholder="Email address"
                />
              </div>
              <div className="mb-6">
                <input
                  type="password"
                  name="password"
                  value={password}
                  onChange={handleInputChange}
                  className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  placeholder="Password"
                />
              </div>
              <button
                type="submit"
                className="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-full"
                data-mdb-ripple="true"
                data-mdb-ripple-color="light"
              >
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;
