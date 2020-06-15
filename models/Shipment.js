const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ShipmentSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId
  },
  date: {
    type: Date,
    default: Date.now
  },
  name: {
    type: String
  },
  quantity: {
    type: Number
  },
  fragile: {
    type: Boolean
  },
  insuraceProvider: {
    type: String
  },
  logisticOperator: {
    type: String
  },
  departureDate: {
    type: Date
  },
  deliveryDate: {
    type: Date
  },
  shipper: {
    firstName: {
      type: String
    },
    lastName: {
      type: String
    },
    address: {
      type: String
    },
    city: {
      type: String
    },
    state: {
      type: String
    },
    postalCode: {
      type: Number
    },
    country: {
      type: String
    }
  },
  receiver: {
    firstName: {
      type: String
    },
    lastName: {
      type: String
    },
    address: {
      type: String
    },
    city: {
      type: String
    },
    state: {
      type: String
    },
    postalCode: {
      type: Number
    },
    country: {
      type: String
    }
  }
});

module.exports = mongoose.model('post', ShipmentSchema);
