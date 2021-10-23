/* eslint-disable new-cap */
module.exports = (app) => {
  const devices = require('../controllers/devices');

  const router = require('express').Router();

  router
    .route('/')
    .get(devices.findAll) // Retrieve Devices
    .post(devices.create) // Create a new Device
    .delete(devices.delete); // Delete a Device with id

  app.use('/devices', router);
};
