/* eslint-disable new-cap */
module.exports = (app) => {
  const categories = require('../controllers/categories');

  const router = require('express').Router();

  router
    .route('/')
    .get(categories.findAll) // Retrieve Categories
    .post(categories.create) // Create a new Category
    .delete(categories.delete); // Delete a Category with id

  app.use('/categories', router);
};
