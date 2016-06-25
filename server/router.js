const Promise = require('bluebird');
const _ = require('underscore');
const memberCtrl = require('./controllers/memberController.js');
const stateMap = require('./stateMap.js');

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
        res.send(_.flatten(results));
      })
      .catch(err => console.log('error in search', err));
  });
  app.get('/state', (req, res) => {
    const query = req.query.state;
    if (query.length > 2) {
      const regEx = new RegExp(`^${query}`, 'i');
      const keys = [];
      const states = Object.keys(stateMap);
      states.forEach(el => {
        if (regEx.test(el)) {
          keys.push(stateMap[el]);
        }
      });
      const promises = keys.map(key => memberCtrl.searchByStateAbbr(key));
      Promise.all(promises)
        .then(results => {
          res.send(_.flatten(results));
        })
        .catch(err => console.log('error in /state', err));
    } else {
      memberCtrl.searchByStateAbbr(query)
        .then(members => {
          res.send(members);
        })
        .catch(err => console.log('error in /state', err));
    }
  });
};
