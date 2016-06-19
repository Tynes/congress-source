const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

const URI = process.env.MONGO_URI || 'mongodb://localhost/congress';

mongoose.connect(URI)
  .then(res => console.log(`Successful connection to ${URI}`))
  .catch(err => console.log(`error connecting to db, ${err}`));

module.exports = mongoose.connection;
