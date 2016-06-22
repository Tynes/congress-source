const Member = require('../models/Member.js');
const axios = require('axios');
const _ = require('underscore');

/*
** getMembers from congress API endpoint
** to become a cron job

exports.updateAll = members => {
  members.forEach(member => {
    const model = new Member(member);
    model.save(err => {
      if (err) {
        // TODO: Promisify
        // TODO: logger
        console.error('error', err);
      } else {
        // console.log('success');
      }
    });
  });
};
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

// replace localhost with the opengov api end point
exports.getRawMembers = () => axios.get('http://localhost:3000/objects')
    .then(response => shapeData(response.data))
    .catch(err => console.error(err));

// TODO: log the diff between the new members and the ones in the db already
exports.syncDB = members => {
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

exports.getMember = query => {
  // const model = new Member(/* query */);
  // search for members
};
