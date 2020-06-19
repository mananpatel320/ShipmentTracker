import { combineReducers } from 'redux';
import alert from './alert';
import auth from './auth';
import shipment from './shipment';

export default combineReducers({
  alert,
  auth,
  shipment
});
