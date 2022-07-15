import { useState } from 'react';

const useForm = (initialState = {}) => {
  const [values, setValues] = useState(initialState);

  const reset = () => {
    setValues(initialState);
  };

  const handleInputChange = ({ target }) => {
    setValues({
      ...values,
      [target.name]: target.value,
    });
  };

  const handleToggleChange = ({ target }) => {
    setValues(() => {
      const newValue = !values[target.name];
      return {
        ...values,
        [target.name]: newValue,
      };
    });
  };

  return [values, handleInputChange, handleToggleChange, setValues, reset];
};

export default useForm;
