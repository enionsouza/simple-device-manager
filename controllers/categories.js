/* eslint-disable max-len */
const db = require('../models');

// Create and Save a new Category
exports.create = (req, res) => {
  // validate request
  if (!req.body.name) {
    return res
      .status(400)
      .end({ message: "Category's 'name' cannot be empty!" });
  }

  if (req.body.name.length > 128) {
    const errorMsg = `Category\'s \'name\'
    length cannot be greater than 128 characters!`;
    return res.status(400).end({ message: errorMsg });
  }

  // Create a Category
  const newCategory = {
    name: req.body.name,
    createdAt: new Date(),
    updatedAt: new Date(),
  };

  // Save Category in the database
  db.Category.create(newCategory)
    .then(() => {
      return res.send({ message: 'New Category successfully created!' });
    })
    .catch((err) => {
      return res.status(500).send({
        message:
          err.message || 'An error has occurred while creating the Category.',
      });
    });
};

// Retrieve all Categories from the database.
exports.findAll = (req, res) => {
  db.Category.findAll()
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

// Delete a Category with the specified id in the request
exports.delete = (req, res) => {
  const id = req.body.id;

  db.Category.destroy({
    where: { id },
  })
    .then((num) => {
      if (num == 1) {
        return res.send({
          message: 'Category was deleted successfully!',
        });
      } else {
        return res.send({
          message: `Cannot delete Category with id=${id}. Maybe Category was not found!`,
        });
      }
    })
    .catch((err) => {
      return res.status(500).send({
        message: `Could not delete Category with id=${id}.`,
      });
    });
};
