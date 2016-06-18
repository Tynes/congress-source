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
    // query for all members
    axios.get('/members')
      .then(response => this.setState({ members: response.data }));
  }

  render() {
    return (
      <Results members={this.state.members} />
    );
  }
}

export default Http;
