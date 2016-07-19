const Member = require('../models/Member.js');
const axios = require('axios');
const _ = require('underscore');

/*
https://www.govtrack.us/api/v2/role?current=true&limit=600
*/

const shapeData = data => _.map(data, (member, id) => {
  const queryID = { queryID: id };
  const flattenedMember = _.extend(member, member.person, queryID);
  const relevantProperties = [
    'firstname', 'lastname', 'startdate', 'role_type_label',
    'enddate', 'party', 'state', 'id', 'queryID',
    'website', 'roletype', 'twitterid', 'link'];
  return _.pick(flattenedMember, relevantProperties);
});

// GETS then shapes the data to build to db
exports.getRawMembersAndFormat = () => axios.get('https://www.govtrack.us/api/v2/role?current=true&limit=600')
    .then(response => shapeData(response.data.objects))
    .catch(err => console.error(err));

exports.build_db = members => {
  members.forEach(member => {
    const model = new Member(member);
    model.save()
      .then()
      .catch(err => console.log('err', err));
  });
};

exports.getMembers = () => Member.find({}).exec();

exports.getMembersBetween = (begin, end) => Member.find({ queryID: { $gte: begin, $lt: end } }).exec();

exports.getMembersInParty = party => Member.find({ party: party }).exec();

exports.searchByFirstName = query => Member.find({ firstname: new RegExp(`^${query}`, 'i') }).exec();

exports.searchByLastName = query => Member.find({ lastname: new RegExp(`^${query}`, 'i') }).exec();

exports.searchByFirstNameAndParty = (query, party) => Member.find({ firstname: new RegExp(`^${query}`, 'i'), party: party }).exec();

exports.searchByLastNameAndParty = (query, party) => Member.find({ lastname: new RegExp(`^${query}`, 'i'), party: party }).exec();

exports.searchByStateAbbr = query => Member.find({ state: new RegExp(`^${query}`, 'i') }).exec();

exports.searchByStateAbbrAndParty = (query, party) => Member.find({ state: new RegExp(`^${query}`, 'i'), party: party }).exec();
