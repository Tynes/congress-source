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

exports.getRawMembers = () => axios.get('http://localhost:3000/objects?_start')
    .then(response => shapeData(response.data))
    .catch(err => console.error(err));

exports.syncDB = members => {
  members.forEach(member => {
    const model = new Member(member);
    model.save().exec()
      .then(updated => console.log('success'))
      .catch(err => console.log('error', err));
  });
};

exports.getMembers = () => Member.find({}).exec();

exports.getMembersBetween = (lessThan, greaterThan) => {
  Member.find({})
};

exports.getMember = query => {
  // const model = new Member(/* query */);
  // search for members
};
