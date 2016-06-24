const Promise = require('bluebird');
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
  app.get('/party', (req, res) => {
    const party = req.query.party;
    const begin = req.query.begin;
    const end = req.query.end;
    memberCtrl.getMembersInParty(party)
      .then(members => {
        const sliced = members.slice(begin, end);
        res.send(sliced);
      })
      .catch(err => console.log('error in /party', err));
  });
  app.get('/search', (req, res) => {
    const query = req.query.name;
    const searchByLastName = memberCtrl.searchByLastName;
    const searchByFirstName = memberCtrl.searchByFirstName;
    Promise.all([searchByLastName(query), searchByFirstName(query)])
      .then(results => {
        res.send(results[0].concat(results[1]));
      })
      .catch(err => console.log('error in search', err));
  });
};
