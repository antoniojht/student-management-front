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
    const newValue = !values[target.name];

    setValues({
      ...values,
      [target.name]: newValue,
    });

    // use to work :(
    // setValues(() => {
    //   const newValue = !values[target.name];
    //   return {
    //     ...values,
    //     [target.name]: newValue,
    //   };
    // });
  };

  return {
    values, handleInputChange, handleToggleChange, setValues, reset,
  };
};

export default useForm;
