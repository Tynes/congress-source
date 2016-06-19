const memberCtrl = require('./controllers/memberController.js');

module.exports = app => {
  app.get('/allMembers', (req, res) => {
    memberCtrl.getMembers()
      .then(members => res.send(members))
      .catch(err => console.log(err));
  });
  app.get('/members', (req, res) => {
    const begin = req.query.begin;
    const end = req.query.end;
    memberCtrl.getMembersBetween(begin, end)
      .then(members => res.send(members))
      .catch(err => console.log('error in route', err));
  });
};
