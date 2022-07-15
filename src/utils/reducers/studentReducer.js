import types from '../../types/studentTypes';

const studentReducer = (state, action) => {
  switch (action.type) {
    case types.list:
      return state.users;
    case types.setList:
      return {
        ...state,
        users: action.payload,
      };
    case types.setUser:
      return {
        ...state,
        user: action.payload,
      };
    case types.get:
      return state.user;
    case types.edit:
      return {
        ...state,
        user: action.user,
      };
    default:
      return state;
  }
};

export default studentReducer;
