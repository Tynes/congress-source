const Promise = require('bluebird');
const _ = require('underscore');
const memberCtrl = require('./memberController.js');
const stateMap = require('../stateMap.js');

exports.extract = (data, begin, end) => data.slice(begin, end);

exports.getAllMembers = () => memberCtrl.getMembers();

exports.getAllByNameAndParty = (query = '', party) => {
  const searchByLastNameAndParty = memberCtrl.searchByLastNameAndParty;
  const searchByFirstNameAndParty = memberCtrl.searchByFirstNameAndParty;
  return Promise.all([searchByLastNameAndParty(query, party), searchByFirstNameAndParty(query, party)])
    .then(results => _.flatten(results))
    .catch(err => console.log('error in search', err));
};

exports.getAllByName = query => {
  const searchByLastName = memberCtrl.searchByLastName;
  const searchByFirstName = memberCtrl.searchByFirstName;
  return Promise.all([searchByLastName(query), searchByFirstName(query)])
    .then(results => _.flatten(results))
    .catch(err => console.log('error in getAllByName', err));
};

const handleLongStateNames = (query) => {
  const regEx = new RegExp(`^${query}`, 'i');
  return Object.keys(stateMap)
    .filter(el => regEx.test(el))
    .map(el => stateMap[el]);
};

exports.getAllByStateAndParty = (query = '', party) => {
  let promises;
  if (query.length > 2) {
    const keys = handleLongStateNames(query);
    promises = keys.map(key => memberCtrl.searchByStateAbbrAndParty(key, party));
  } else {
    promises = [memberCtrl.searchByStateAbbrAndParty(query, party)];
  }
  return Promise.all(promises)
    .then(results => _.flatten(results))
    .catch(err => console.log('error in getAllByStateAndParty', err));
};

exports.getAllByState = query => {
  let promises;
  if (query.length > 2) {
    const keys = handleLongStateNames(query);
    promises = keys.map(key => memberCtrl.searchByStateAbbr(key));
  } else {
    promises = [memberCtrl.searchByStateAbbr(query)];
  }
  return Promise.all(promises)
    .then(results => _.flatten(results))
    .catch(err => console.log('error in getAllByState', err));
};
