import React from 'react';
import Results from '../results/results.jsx';
import Search from '../search/search.jsx';
import axios from 'axios';

class Http extends React.Component {
  constructor() {
    super();
    this.state = {
      members: [],
      end: 16,
    };
  }
  componentWillMount() {
    // this.getMembers();
    this.getMembersBetween(0, 16, 16);
  }
  getMembers() {
    // query for all members
    axios.get('/allMembers')
      .then(response => this.setState({ members: response.data }))
      .catch(err => console.log('error getting all members', err));
  }
  getMembersBetween(begin, end, shift) {
    axios.get(`/members?begin=${begin}&end=${end}`)
      .then(response => {
        const state = {
          members: response.data,
          end: this.state.end + shift,
        };
        this.setState(state);
      })
      .catch(err => console.log('error getting members between', err));
  }
  getNextMembers() {
    this.getMembersBetween(this.state.end - 16, this.state.end, 16);
  }
  getPrevMembers() {
    //
  }

  render() {
    return (
      <div>
        <Search
          getNextMembers={this.getNextMembers.bind(this)}
          getPrevMembers={this.getPrevMembers.bind(this)}
        />
        <Results
          members={this.state.members}
          end={this.state.end}
        />
      </div>
    );
  }
}

export default Http;
