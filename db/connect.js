const mongoose = require('mongoose');

const mongoURI = 'mongodb://localhost:27017/task-manager';

mongoose
  .connect(mongoURI)
  .then(() => {
    console.log('CONNECTED TO THE DB...');
  })
  .catch((err) => {
    console.log(err);
  });
