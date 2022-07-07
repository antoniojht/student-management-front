import types from '../../types/studentTypes';

const authReducer = (state = {}, action) => {
  switch (action.type) {
    case types.create:
      return {
        users: [...state.users, action.payload],
      };
    case types.list:
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default authReducer;
