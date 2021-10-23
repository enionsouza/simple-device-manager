/* eslint-disable max-len */
const express = require('express');
const cors = require('cors');
const db = require('./models/index');

const app = express();

const corsOptions = {
  origin: 'http://localhost:8081',
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

require('./routes/category.routes')(app);
require('./routes/device.routes')(app);

db.sequelize
  .sync()
  .then(() =>
    console.log(`Synchronized with ${db.sequelize.models.Device.name}`),
  )
  .then(() =>
    console.log(`Synchronized with ${db.sequelize.models.Category.name}`),
  );

// simple route
app.get('/', (req, res) => {
  res.json({
    message: `Welcome to my device management back end...\
 Here, you'll be able to access ${db.sequelize.models.Device.name} and\
 ${db.sequelize.models.Category.name} models.`,
  });
});

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}...`);
});
