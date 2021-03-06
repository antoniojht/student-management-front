import { useState } from 'react';

const usePagination = () => {
  const [paginate, setPaginate] = useState({ skip: 0, limit: 5 });

  const increment = () => {
    setPaginate((prevState) => ({ ...prevState, skip: prevState.skip + 5 }));
  };

  const decrement = () => {
    if (paginate.skip > 0) {
      setPaginate((prevState) => ({ ...prevState, skip: prevState.skip - 5 }));
    }
  };

  return [increment, decrement, paginate.skip, paginate.limit];
};

export default usePagination;
