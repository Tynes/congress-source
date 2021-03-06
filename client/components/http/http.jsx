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
      length: 0,
    };
    this.handleSearch = this.handleSearch.bind(this);
    this.handlePartyChange = this.handlePartyChange.bind(this);
    this.handleSearchByToggle = this.handleSearchByToggle.bind(this);
    this.paginate = this.paginate.bind(this);
  }
  componentWillMount() {
    this.search(undefined, 0, {});
  }
  handlePartyChange(party, query = '') {
    if (this.state.party === party) {
      this.setState({ party: undefined, begin: 0, end: 8 }, () => {
        const params = { query: query, searchBy: this.state.searchBy };
        this.search(undefined, 0, params);
      });
    } else {
      const params = {
        party: party,
        searchBy: this.state.searchBy,
        query: query,
      };
      this.setState({ party: party, begin: 0, end: 8 }, () => this.search(undefined, 0, params));
    }
  }
  handleSearchByToggle(parameter) {
    this.setState({ searchBy: parameter });
  }
  // good place to debug inside of search
  search(query, shift, options) {
    if (query) options.query = query;
    const params = Object.keys(options).map(el => `${el}=${options[el]}&`).join('');
    axios.get(`/search?${params}`)
      .then(response => {
        const state = {
          members: response.data.members,
          begin: this.state.begin + shift,
          end: this.state.end + shift,
          party: options.party,
          searchBy: this.state.searchBy,
          length: response.data.length,
        };
        this.setState(state);
      })
      .catch(err => console.log('error in search', err));
  }
  // ensures that search only happens after enough
  // characters have been added to the query bar
  handleSearch(query, shift) {
    const options = {
      searchBy: this.state.searchBy,
      begin: this.state.begin,
      end: this.state.end,
    };
    if (this.state.party) options.party = this.state.party;
    if (this.state.searchBy === 'name' && query.length > 2) {
      this.search(query, shift, options);
    } else if (this.state.searchBy === 'state' && query.length > 1) {
      this.search(query, shift, options);
    } else if (query.length === 0) {
      const params = {};
      if (this.state.party) params.party = this.state.party;
      params.searchBy = this.state.searchBy;
      this.search(undefined, 0, params);
    }
  }
  paginate(query, shift) {
    const params = {
      searchBy: this.state.searchBy,
      begin: this.state.begin + shift,
      end: this.state.end + shift,
      query: query,
    };
    if (this.state.party) params.party = this.state.party;
    this.search(query, shift, params);
  }

  render() {
    const display = {
      begin: this.state.begin,
      end: this.state.end,
      length: this.state.length,
    };
    return (
      <div>
        <Search
          handleSearch={this.handleSearch}
          party={this.state.party}
          handleSearchByToggle={this.handleSearchByToggle}
          handlePartyChange={this.handlePartyChange}
          paginate={this.paginate}
          display={display}
          windowSize={this.props.windowSize}
        />
        <Results
          members={this.state.members}
          end={this.state.end}
        />
      </div>
    );
  }
}

Http.propTypes = {
  windowSize: React.PropTypes.number,
};

export default Http;
