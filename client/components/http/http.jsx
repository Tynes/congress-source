import React from 'react';
import Results from '../results/results.jsx';
import Search from '../search/search.jsx';
import axios from 'axios';

class Http extends React.Component {
  constructor() {
    super();
    this.state = {
      members: [],
      begin: 0,
      end: 8,
      party: undefined,
      searchBy: 'state',
    };
  }
  componentWillMount() {
    this.search(undefined, 0, {});
  }
  handleCheck(party) {
    if (this.state.party === party) {
      this.setState({ party: undefined }, () => this.getMembersBetween(0, 8, 8));
    } else {
      this.getPartyMembersBetween(party, 0, 8, 8);
    }
  }
  handleSearchToggle(parameter) {
    this.setState({ searchBy: parameter });
  }
  search(query, shift, options) {
    const params = Object.keys(options).map(el => `${el}=${options[el]}&query=${query}`).join('');
    axios.get(`/search?${params}`)
      .then(response => {
        console.log(response);
        const state = {
          members: response.data,
          begin: this.state.begin + shift,
          end: this.state.end + shift,
          party: options.party,
          searchBy: this.state.searchBy,
        };
        this.setState(state, () => console.log(state));
      })
      .catch(err => console.log('error in search', err));
  }
  handleSearch(query, shift) {
    const options = {
      type: this.state.searchBy,
      begin: this.state.begin,
      end: this.state.end,
    };
    if (this.state.party) options.party = this.state.party;
    if (this.state.searchBy === 'name' && query.length > 2) {
      this.search(query, shift, options);
    } else if (this.state.searchBy === 'state' && query.length > 1) {
      // TODO: abstract search more
      // send undefined as query to get initial members
      this.search(query, shift, options);
    } else {
      this.getMembersBetween(0, 0, 0);
    }
  }

  render() {
    return (
      <div>
        <Search
          handleSearch={this.handleSearch.bind(this)}
          handleCheck={this.handleCheck.bind(this)}
          party={this.state.party}
          handleSearchToggle={this.handleSearchToggle.bind(this)}
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
