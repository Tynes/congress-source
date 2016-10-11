import React from 'react';
import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton';
import Checkbox from 'material-ui/Checkbox';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import ArrowForward from 'material-ui/svg-icons/navigation/arrow-forward';
import ArrowBack from 'material-ui/svg-icons/navigation/arrow-back';

const cancelMinWidth = {
  minWidth: '50%',
};

const PAGINATE_BY = 8;

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
      queryBarSize: '376px',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.windowSize < 425) {
      this.setState({ queryBarSize: '300px' });
    } else {
      this.setState({ queryBarSize: '376px' });
    }
  }

  handleChange(event) {
    this.setState({ search: event.target.value }, () => this.props.handleSearch(this.state.search, 0));
  }
  handlePartyChange(party, query) {
    this.setState({ search: '' });
    this.props.handlePartyChange(party, query);
  }
  handleSearchByToggle(searchBy) {
    this.setState({ search: '' }, () => {
      this.props.handleSearchByToggle(searchBy);
      this.searchbar.focus();
    });
  }
  shouldPaginate(direction, displayed) {
    if (direction === 'backwards') {
      return displayed.begin === 0;
    } else if (direction === 'forwards') {
      return displayed.end >= displayed.length;
    }
  }
  render() {
    return (
      <section className="search">
        <section className="row title">
          <h1>Search Through Members of the US Government</h1>
        </section>
        <section className="row query">
          <TextField
            onChange={this.handleChange}
            floatingLabelText="Search Here"
            hintText="Ex Chuck Schumer or New York"
            floatingLabelFixed={true}
            style={{ width: this.state.queryBarSize }}
            ref={i => this.searchbar = i}
            value={this.state.search}
          />
        </section>
        <RadioButtonGroup
          name="searchType"
          defaultSelected="state"
          className="row search-by"
          onChange={(e, val) => this.handleSearchByToggle(val)}
        >
          <RadioButton
            value="state"
            label="State"
          />
          <RadioButton
            value="name"
            label="Name"
          />
        </RadioButtonGroup>
        <section className="row filter">
          <Checkbox
            label="Republican"
            checked={this.props.party === 'Republican'}
            onCheck={() => this.props.handlePartyChange('Republican', this.state.search)}
          />
          <Checkbox
            label="Democrat"
            checked={this.props.party === 'Democrat'}
            onCheck={() => this.props.handlePartyChange('Democrat', this.state.search)}
          />
        </section>
        <section className="row paginate">
          <FlatButton
            icon={<ArrowBack />}
            onClick={() => this.props.paginate(this.state.search, -(PAGINATE_BY))}
            disabled={this.shouldPaginate('backwards', this.props.display)}
            className="paginate-btn"
            style={cancelMinWidth}
          />
          <FlatButton
            icon={<ArrowForward />}
            onClick={() => this.props.paginate(this.state.search, PAGINATE_BY)}
            disabled={this.shouldPaginate('forwards', this.props.display)}
            className="paginate-btn"
            style={cancelMinWidth}
          />
        </section>
      </section>
    );
  }
}

Search.propTypes = {
  paginate: React.PropTypes.func,
  party: React.PropTypes.string,
  handlePartyChange: React.PropTypes.func,
  handleSearch: React.PropTypes.func,
  handleSearchByToggle: React.PropTypes.func,
  display: React.PropTypes.object,
};

export default Search;
