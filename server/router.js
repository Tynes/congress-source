const db = require('./db.js');
const memberCtrl = require('./controllers/memberController.js');

module.exports = app => {
  app.get('/members', (req, res) => {
    memberCtrl.getMember(req);
    res.send();
  });
};
