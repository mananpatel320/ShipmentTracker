import api from '../utils/api';
import {
  GET_SHIPMENTS,
  SHIPMENT_ERROR,
  // DELETE_SHIPMENT,
  ADD_SHIPMENT
  // GET_SHIPMENT
} from './types';
import { setAlert } from './alert';

//Get Shipments
export const getShipments = () => async (dispatch) => {
  try {
    const res = await api.get('/shipment');
    console.log(res.data);
    dispatch({
      type: GET_SHIPMENTS,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: SHIPMENT_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

//Add or update Shipment
export const createShipment = (formData, history, edit = false) => async (
  dispatch
) => {
  try {
    const res = await api.post('/shipment', formData);

    dispatch(
      setAlert(edit ? 'Shipment Updated' : 'Shipment Created', 'success')
    );
  } catch (err) {}
};
