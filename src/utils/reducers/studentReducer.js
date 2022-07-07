import types from '../../types/studentTypes';

const studentReducer = (state = {}, action) => {
  switch (action.type) {
    case types.create:
      return {
        users: [...state.users, action.payload],
      };
    case types.list:
      return {
        users: action.payload,
      };
    default:
      return state;
  }
};

export default studentReducer;
