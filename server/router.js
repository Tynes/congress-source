const Promise = require('bluebird');
const _ = require('underscore');
const memberCtrl = require('./controllers/memberController.js');
const searchMethods = require('./controllers/searchMethods.js');
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

  // //////////////////////////////
  // Single function that handles all search
  // not hooked into front end yet
  app.get('/searchtest', (req, res) => {
    const type = req.query.type;
    const party = req.query.party;
    const query = req.query.query;
    const begin = req.query.begin || 0;
    const end = req.query.end || 8;
    // control flow first for name vs state
    if (type === 'name') {
      if (party) {
        searchMethods.getAllByNameAndParty(query, party)
          .then(response => searchMethods.extract(response, begin, end))
          .then(response => res.send(response))
          .catch(err => console.log('error in router, getAllByName', err));
      } else {
        searchMethods.getAllByName(query)
          .then(response => searchMethods.extract(response, begin, end))
          .then(response => res.send(response))
          .catch(err => console.log('error in search getAllByName', err));
      }
    } else if (type === 'state') {
      if (party) {
        searchMethods.getAllByStateAndParty(query, party)
          .then(response => searchMethods.extract(response, begin, end))
          .then(response => res.send(response))
          .catch(err => console.log('error in search getAllByStateAndParty', err));
      } else {
        searchMethods.getAllByState(query)
          .then(response => searchMethods.extract(response, begin, end))
          .then(response => res.send(response))
          .catch(err => console.log('error in search get all by state', err));
      }
    } else {
      res.send(404);
    }
  });
};
