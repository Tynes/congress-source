import React from 'react';
import Results from '../results/results.jsx';
import Search from '../search/search.jsx';
import axios from 'axios';

class Http extends React.Component {
  constructor() {
    super();
    this.state = {
      members: [],
      end: 8,
      party: undefined,
    };
  }
  componentWillMount() {
    // initial population of members
    this.getMembersBetween(0, 8, 8);
  }
  getMembers() {
    // query for all members
    axios.get('/allMembers')
      .then(response => this.setState({ members: response.data }))
      .catch(err => console.log('error getting all members', err));
  }

  getPartyMembersBetween(party, begin, end, shift) {
    axios.get(`/party?party=${party}&begin=${begin}&end=${end}`)
      .then(response => {
        console.log('shift', shift);
        const state = {
          members: response.data,
          end: this.state.end + shift,
          party: party,
        };
        console.log('state from party', state);
        this.setState(state);
      })
      .catch(err => console.log('error get party', err));
  }

  handleCheck(party) {
    if (this.state.party === party) {
      this.setState({ party: undefined }, () => this.getMembersBetween(0, 8, 8));
    } else {
      this.getPartyMembersBetween(party, 0, 8, 8);
    }
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
  // will display 8 members per page
  getNextMembers() {
    if (this.state.party) {
      this.getPartyMembersBetween(this.state.party, this.state.end - 8, this.state.end, 8);
    } else {
      this.getMembersBetween(this.state.end - 8, this.state.end, 8);
    }
  }
  getPrevMembers() {
    if (this.state.party) {
      this.getPartyMembersBetween(this.state.party, this.state.end - 24, this.state.end - 16, -8);
    }
    this.getMembersBetween(this.state.end - 24, this.state.end - 16, -8);
  }
  search(query) {
    axios.get(`/search?name=${query}`)
      .then(response => {
        const state = {
          members: response.data,
          end: 8,
          party: undefined,
        };
        this.setState(state);
      })
      .catch(err => console.log('error in search', err));
  }
  handleSearch(query) {
    if (query.length > 2) {
      this.search(query);
    } else if (query.length <= 1) {
      this.getMembersBetween(0, 8, 8);
    }
  }

  render() {
    return (
      <div>
        <Search
          handleSearch={this.handleSearch.bind(this)}
          getNextMembers={this.getNextMembers.bind(this)}
          getPrevMembers={this.getPrevMembers.bind(this)}
          handleCheck={this.handleCheck.bind(this)}
          party={this.state.party}
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
