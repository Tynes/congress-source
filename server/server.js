const PORT = process.env.port || 3001;

const db = require('./db.js');
const memberCtrl = require('./controllers/memberController.js');

const express = require('express');
const bodyparser = require('body-parser');


const app = express();
app.use(express.static(`${__dirname}/../client`));
app.use(bodyparser.json());

// db is seeded initially
// TODO: Add this functionality in a cron job
// db.once('open', () => {
//   console.log('open');
//   // initial population of db
//   const ff = memberCtrl.getMembers();

//   ff.then(data => {
//     memberCtrl.updateAll(data);
//   });
// });

app.listen(PORT, () => {
  console.log(`listening on port:${PORT}`);
});
