import types from '../../types/groupTypes';

const groupReducer = (state = {}, action) => {
  switch (action.type) {
    case types.create:
      return {
        groups: [...state.groups, action.payload],
      };
    case types.list:
      return {
        groups: action.payload,
      };
    default:
      return state;
  }
};

export default groupReducer;
