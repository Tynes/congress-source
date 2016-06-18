import React from 'react';
import Results from '../results/results.jsx';
import axios from 'axios';
import _ from 'underscore';

class Http extends React.Component {
  constructor() {
    super();
    this.state = {
      members: [],
    };
  }
  componentWillMount() {
    this.getMembers();
  }
  getMembers() {
    // axios.get('http://localhost:3000/objects?_start=0&_end=10')
    //   .then(response => {
    //     console.log('res from json-server', response);
    //     const members = this.shapeData(response.data);
    //     this.setState({ members: members }, () => {
    //       console.log('state set', this.state);
    //     });
    //   });

    // query mongodb for all
    axios.get('/members')
      .then(response => {
        console.log(response);
      });
  }
  shapeData(data) {
    return _.map(data, member => {
      const flattenedMember = _.extend(member, member.person);
      const relevantProperties = [
        'firstname', 'lastname', 'startdate', 'role_type_label',
        'enddate', 'party', 'state', 'id',
        'website', 'roletype', 'twitterid', 'link'];
      return _.pick(flattenedMember, relevantProperties);
    });
  }

  render() {
    return (
      <Results members={this.state.members} />
    );
  }
}

export default Http;

/*
Wraps around results
Does the http requests then passes
down the data to results
*/
