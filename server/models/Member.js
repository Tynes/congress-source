const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const memberSchema = new Schema({
  firstname: String,
  lastname: String,
  startdate: String,
  enddate: String,
  id: Number,
  party: String,
  state: String,
  role_type_label: String,
  link: String,
  twitterid: String,
  website: String,
});

module.exports = mongoose.model('Member', memberSchema);
