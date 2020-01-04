import { combineReducers } from 'redux';
import modalReducer from './modal';
import toastReducer from './toast';

const rootReducer = combineReducers({
  modal: modalReducer,
  toast: toastReducer
});

export default rootReducer;
