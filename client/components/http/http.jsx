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
  componentDidMount() {
    this.getMembers();
  }
  getMembers() {
    axios.get('http://localhost:3000/objects?_start=0&_end=10')
      .then(response => {
        console.log('res from json-server', response);
        const members = this.shapeData(response.data);
        this.setState({ members: members });
      });
  }
  shapeData(data) {
    return _.map(data, member => _.pick(member, ['person', 'startdate', 'enddate', 'party', 'state', 'title_long', 'website']));
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
