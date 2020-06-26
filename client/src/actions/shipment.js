import api from '../utils/api';
import {
  GET_SHIPMENTS,
  SHIPMENT_ERROR,
  // DELETE_SHIPMENT,
  ADD_SHIPMENT,
  GET_SHIPMENT
} from './types';
import { setAlert } from './alert';

//Get Shipments
export const getShipments = () => async (dispatch) => {
  try {
    const res = await api.get('/shipment');

    dispatch({
      type: GET_SHIPMENTS,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: SHIPMENT_ERROR,
      payload: { msg: err.response && err.response.statusText, status: err.response && err.response.status }
    });
  }
};

//Add new Shipment
export const createShipment = (formData) => async (dispatch) => {
  try {
    const res = await api.post('/shipment', formData);

    dispatch({
      type: ADD_SHIPMENT,
      payload: res.data
    });

    dispatch(setAlert('Shipment Created', 'success'));
  } catch (err) {
    dispatch({
      type: SHIPMENT_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

// Get shipment
export const getShipment = (id) => async (dispatch) => {
  try {
    const res = await api.get(`/shipment/${id}`);

    dispatch({
      type: GET_SHIPMENT,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: SHIPMENT_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};
