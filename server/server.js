const express = require('express');
const bodyparser = require('body-parser');

const PORT = process.env.port || 3001;

const app = express();
const db = require('./db.js');
app.use('/', express.static(`${__dirname}/../client`));
app.use(bodyparser.json());
require('./router.js')(app);
const memberCtrl = require('./controllers/memberController.js');

db.once('open', () => {
  console.log('open');
  // initial population of db
  if (process.env.SEED) {
    console.log('seeding db');
    memberCtrl.getRawMembersAndFormat()
      .then(data => memberCtrl.buildDB(data));
  }
});

app.listen(PORT, () => {
  console.log(`listening on port:${PORT}`);
});
