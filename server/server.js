const express = require('express');
const bodyparser = require('body-parser');

const PORT = process.env.port || 3001;

const app = express();
app.use(express.static(`${__dirname}/../client`));
app.use(bodyparser.json());
require('./router.js')(app);

// to seed db initially
// TODO: Add this functionality in a cron job
// const memberCtrl = require('./controllers/memberController.js');
// db.once('open', () => {
//   console.log('open');
//   // initial population of db
//   const ff = memberCtrl.getRawMembers();

//   ff.then(data => {
//     memberCtrl.updateAll(data);
//   });
// });

app.listen(PORT, () => {
  console.log(`listening on port:${PORT}`);
});
