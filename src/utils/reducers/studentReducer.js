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
    case types.get:
      return {
        user: action.payload,
      };
    case types.set:
      return {
        user: action.payload,
      };
    default:
      return state;
  }
};

export default studentReducer;
