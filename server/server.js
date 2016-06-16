const PORT = process.env.port || 3001;

const express = require('express');
const bodyparser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
app.use(express.static(`${__dirname}/../client`));
app.use(bodyparser.json());

if (process.env.ENV === 'dev') {
  mongoose.connect('mongodb://localhost/congress');
  console.log('connected to mongoose');
} else {
  console.log('set the env var to dev for development');
}

app.listen(PORT, () => {
  console.log(`listening on port:${PORT}`);
});
