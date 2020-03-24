import {
  DATA_REQUEST,
  DATA_REQUEST_ERROR,
  DATA_REQUEST_SUCCESS,
} from './actionTypes';

export const initialState = {
  data: null,
  isFetching: false,
  error: null,
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case DATA_REQUEST:
      return {
        ...state,
        isFetching: true,
        error: null,
      };
    case DATA_REQUEST_SUCCESS:
      return {
        ...state,
        isFetching: false,
        data: action.payload,
      };
    case DATA_REQUEST_ERROR:
      return {
        ...state,
        isFetching: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default appReducer;
