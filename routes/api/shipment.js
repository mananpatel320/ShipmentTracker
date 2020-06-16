const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const auth = require('../../middleware/auth');
const checkObjectId = require('../../middleware/checkObjectId');

//Shipment model
const Shipment = require('../../models/Shipment');
const User = require('../../models/User');

// @route    GET api/shipment/all
// @desc     Get all shipments
// @access   Private
router.get('/all', auth, async (req, res) => {
  try {
    const shipments = await Shipment.find().sort({ date: -1 });
    res.json(shipments);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route   POST api/shipment/new
// @desc    Create a new shipment
// @access  Private
router.post(
  '/new',
  [auth, [check('name', 'Name is required').not().isEmpty()]],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try {
      const user = await User.findById(req.user.id).select('-password');

      const newShipment = new Shipment({
        name: req.body.name,
        legs: req.body.legs,
        user: req.user.id,
        quantity: req.body.quantity,
        fragile: req.body.fragile,
        insuranceProvider: req.body.insuranceProvider,
        logisticProvider: req.body.logisticProvider,
        departureDate: req.body.departureDate,
        deliveryDate: req.body.deliveryDate,
        shipper: req.body.shipper,
        receiver: req.body.receiver,
        edgeDevices: req.body.edgeDevices
      });

      const shipment = await newShipment.save();

      res.json(shipment);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  }
);

// @route   DELETE api/shipment/delete/:id
// @desc    Delete a shipment
// @access  Private
router.delete('/delete/:id', [auth, checkObjectId('id')], async (req, res) => {
  try {
    const shipment = await Shipment.findById(req.params.id);

    if (!shipment) {
      return res.status(404).json({ msg: 'Shipment not found' });
    }

    //Check user
    if (shipment.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: 'User not authorized' });
    }

    await shipment.remove();

    res.json({ msg: 'Shipment removed successfully' });
  } catch (err) {
    console.error(err.message);

    res.status(500).send('Server Error');
  }
});

// @route   GET api/shipment/view/:id
// @desc    Show Shipment by its id
// @access  Private
router.get('/view/:id', [auth, checkObjectId('id')], async (req, res) => {
  try {
    const shipment = await Shipment.findById(req.params.id);
    if (!shipment) {
      return res.status(404).json({ msg: 'Shipment not found' });
    }
    res.json(shipment);
  } catch (err) {
    console.error(err.message);
    if (err.kind == 'ObjectId') {
      return res.status(404).json({ msg: 'Shipment not found' });
    }
    res.status(500).send('Server Error');
  }
});

module.exports = router;
