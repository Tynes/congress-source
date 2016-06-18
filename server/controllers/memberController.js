const Member = require('../models/Member.js');
const axios = require('axios');
const _ = require('underscore');

const shapeData = data => {
  return _.map(data, member => {
    const flattenedMember = _.extend(member, member.person);
    const relevantProperties = [
      'firstname', 'lastname', 'startdate', 'role_type_label',
      'enddate', 'party', 'state', 'id',
      'website', 'roletype', 'twitterid', 'link'];
    return _.pick(flattenedMember, relevantProperties);
  });
};

exports.getMembers = () => {
  return axios.get('http://localhost:3000/objects?_start')
    .then(response => shapeData(response.data))
    .catch(err => console.error(err));
};

exports.updateAll = members => {
  members.forEach(member => {
    const model = new Member(member);
    model.save(err => {
      if (err) {
        console.error('error', err);
      } else {
        // console.log('success');
      }
    });
  });
};
