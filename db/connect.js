const mongoose = require('mongoose');

const mongoURI = 'mongodb://localhost:27017/task-manager';

const connectDB = (url) => {
  return mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};

module.exports = connectDB;
