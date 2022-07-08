import types from '../../types/subjectTypes';

const subjectReducer = (state = {}, action) => {
  switch (action.type) {
    case types.create:
      return {
        subjects: [...state.subjects, action.payload],
      };
    case types.list:
      return {
        subjects: action.payload,
      };
    default:
      return state;
  }
};

export default subjectReducer;
