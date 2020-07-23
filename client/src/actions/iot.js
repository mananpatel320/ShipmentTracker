import api from '../utils/api';
import { SHIPMENT_IOT } from './types';
import { setAlert } from './alert';

//Get shipment iot data
export const getShipmentIOT = (id) => async (dispatch) => {
  try {
    const res = await api.get(`/shipment/iotdata/${id}`);

    dispatch({
      type: SHIPMENT_IOT,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: SHIPMENT_ERROR,
      payload: {
        msg: err.response ? err.response.statusText : 'error',
        status: err.response ? err.response.status : '500'
      }
    });
  }
};
