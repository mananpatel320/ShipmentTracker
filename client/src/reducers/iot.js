import { SHIPMENT_IOT } from '../actions/types';

const initialState = {
  iotdata: null,
  loading: true,
  error: {}
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case SHIPMENT_IOT:
      return {
        ...state,
        iotdata: payload,
        loading: false
      };
    default:
      return state;
  }
}
