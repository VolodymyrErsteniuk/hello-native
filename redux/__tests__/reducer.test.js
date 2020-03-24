import reducer, {initialState} from '../reducer';
import {
  requestData,
  requestDataError,
  requestDataSuccess,
} from '../actionCreators';

describe('test app reducer', () => {
  const payload = [1, 2, 3];
  const errorMessage = 'INVALID REQUEST';
  const prevState = {
    ...initialState,
    isFetching: true,
    error: null,
  };

  it('case DATA_REQUEST', () => {
    const action = requestData();

    expect(reducer(prevState, action)).toEqual({
      ...initialState,
      isFetching: true,
      error: null,
    });
  });

  it('case DATA_REQUEST_SUCCESS', () => {
    const action = requestDataSuccess(payload);

    expect(reducer(prevState, action)).toEqual({
      ...prevState,
      isFetching: false,
      data: payload,
    });
  });

  it('case DATA_REQUEST_ERROR', () => {
    const action = requestDataError(errorMessage);

    expect(reducer(prevState, action)).toEqual({
      ...prevState,
      isFetching: false,
      error: errorMessage,
    });
  });
});
