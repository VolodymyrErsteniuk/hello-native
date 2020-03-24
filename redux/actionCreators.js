import {
  DATA_REQUEST,
  DATA_REQUEST_ERROR,
  DATA_REQUEST_SUCCESS,
} from './actionTypes';

export const requestData = () => ({ type: DATA_REQUEST });
export const requestDataSuccess = payload => ({ type: DATA_REQUEST_SUCCESS, payload });
export const requestDataError = payload => ({ type: DATA_REQUEST_ERROR, payload });
