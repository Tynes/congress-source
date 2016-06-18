const mongoose = require('mongoose');
const URI = process.env.MONGO_URI || 'mongodb://localhost/congress';

mongoose.connect(URI, (err, res) => {
  if (err) {
    console.log(`Error connecting to ${URI}, ${err}`);
  } else {
    console.log(`Successful connection to ${URI}`);
  }
});

module.exports = mongoose.connection;
