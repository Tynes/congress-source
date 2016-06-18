const db = require('./db.js');
const memberCtrl = require('./controllers/memberController.js');

module.exports = app => {
  app.get('/members', (req, res) => {
    memberCtrl.getMembers()
      .then(members => res.send(members))
      .catch(err => console.log(err));
  });
};
