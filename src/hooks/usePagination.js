import { useState } from 'react';

const usePagination = () => {
  const [paginate, setPaginate] = useState({ skip: 0, limit: 5 });

  const increment = () => {
    setPaginate((prevState) => ({ ...prevState, skip: prevState.skip + 1 }));
  };

  const decrement = () => {
    setPaginate((prevState) => ({ ...prevState, skip: prevState.skip - 1 }));
  };

  return [increment, decrement, paginate.skip, paginate.limit];
};

export default usePagination;
