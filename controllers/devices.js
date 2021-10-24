/* eslint-disable max-len */
const db = require('../models');

// Create and Save a new Device
exports.create = async (req, res) => {
  const { categoryId: CategoryId, color, partNumber } = req.body;
  const categories = await db.Category.findAll();
  const categoriesIds = categories.map((category) => category.id);

  // validate request (General - no empty fields)
  if (!CategoryId || !color || !partNumber) {
    return res.status(400).end({ message: 'All fields are mandatory!' });
  }

  // validate request (categoryId - should correspond with one of the available categories)
  if (!categoriesIds.includes(Number(CategoryId))) {
    return res.status(400).end({
      message:
        'CategoryId should correspond with one of the available categories.',
    });
  }

  // validate request (color - letters only, max size 16)
  if (!/^[a-z]+$/i.test(color)) {
    return res
      .status(400)
      .end({ message: 'Color should contain letters only.' });
  }

  if (color.length > 16) {
    return res
      .status(400)
      .end({ message: 'Color should not be longer than 16 characters.' });
  }

  // validate request (partNumber - positive integer field)
  const intPartNumber = Number(partNumber);
  if (intPartNumber === NaN || intPartNumber <= 0 || intPartNumber % 1 !== 0) {
    return res
      .status(400)
      .end({ message: 'PartNumber should be a positive integer' });
  }

  // Create a Device
  const newDevice = {
    CategoryId: Number(CategoryId),
    color,
    partNumber: intPartNumber,
    createdAt: new Date(),
    updatedAt: new Date(),
  };

  // Save Device in the database
  db.Device.create(newDevice)
    .then(() => {
      return res.send({ message: 'New Device successfully created!' });
    })
    .catch((err) => {
      return res.status(500).send({
        message:
          err.message || 'An error has occurred while creating the Device.',
      });
    });
};

// Retrieve all Devices from the database.
exports.findAll = async (req, res) => {
  db.Device.findAll()
    .then((data) => {
      return res.send(data);
    })
    .catch((err) => {
      return res.status(500).send({
        message:
          err.message || 'Some error has occurred while retrieving categories.',
      });
    });
};

// Delete a Device with the specified id in the request
exports.delete = (req, res) => {
  const id = req.body.id;

  db.Device.destroy({
    where: { id },
  })
    .then((num) => {
      if (num == 1) {
        return res.send({
          message: 'Device was deleted successfully!',
        });
      } else {
        return res.send({
          message: `Cannot delete Device with id=${id}. Maybe Device was not found!`,
        });
      }
    })
    .catch((err) => {
      return res.status(500).send({
        message: `Could not delete Device with id=${id}.`,
      });
    });
};
