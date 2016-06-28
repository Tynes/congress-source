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
  handlePartyChange(party) {
    if (this.state.party === party) {
      this.setState({ party: undefined }, () => this.search(undefined, 0, {}));
    } else {
      const params = {
        party: party,
        searchBy: this.state.searchBy,
        query: '',
      };
      this.setState({ party: party }, () => this.search(undefined, 0, params));
    }
  }
  handleSearchByToggle(parameter) {
    this.setState({ searchBy: parameter });
  }
  search(query, shift, options) {
    if (query) options.query = query;
    const params = Object.keys(options).map(el => `${el}=${options[el]}&`).join('');
    console.log('params', params);
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
      this.search(undefined, 0, {});
    }
  }
  paginate(query, shift) {
    const params = {
      searchBy: this.state.searchBy,
      begin: this.state.begin + shift,
      end: this.state.end + shift,
    };
    if (this.state.party) params.party = this.state.party;
    this.search(query, shift, params);
  }

  render() {
    return (
      <div>
        <Search
          handleSearch={this.handleSearch.bind(this)}
          party={this.state.party}
          handleSearchByToggle={this.handleSearchByToggle.bind(this)}
          handlePartyChange={this.handlePartyChange.bind(this)}
          paginate={this.paginate.bind(this)}
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
