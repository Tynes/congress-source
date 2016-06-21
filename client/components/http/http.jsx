import React from 'react';
import Results from '../results/results.jsx';
import axios from 'axios';

class Http extends React.Component {
  constructor() {
    super();
    this.state = {
      members: [],
      end: 0,
    };
  }
  componentWillMount() {
    // this.getMembers();
    this.getMembersBetween(0, 16);
  }
  getMembers() {
    // query for all members
    axios.get('/allMembers')
      .then(response => this.setState({ members: response.data }))
      .catch(err => console.log('error getting all members', err));
  }
  getMembersBetween(begin, end) {
    axios.get(`/members?begin=${begin}&end=${end}`)
      .then(response => {
        const state = {
          members: this.state.members.concat(response.data),
          end: this.state.end + (begin - end),
        };
        this.setState(state);
      })
      .catch(err => console.log('error getting members between', err));
  }

  render() {
    return (
      <Results
        members={this.state.members}
        getMembersBetween={this.getMembersBetween.bind(this)}
        end={this.state.end}
      />
    );
  }
}

export default Http;
