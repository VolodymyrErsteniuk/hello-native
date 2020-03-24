import { combineReducers } from 'redux';
import appReducer from '../redux/reducer';

export default combineReducers({
  app: appReducer,
});
