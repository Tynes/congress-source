import React from 'react';
import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton';
import Checkbox from 'material-ui/Checkbox';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import ArrowForward from 'material-ui/svg-icons/navigation/arrow-forward';
import ArrowBack from 'material-ui/svg-icons/navigation/arrow-back';
// resetting when party filter is on and search is empty
const style = {
  width: '376px',
};
const PAGINATE_BY = 8;

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
    };
  }
  handleChange(event) {
    this.setState({ search: event.target.value }, () => this.props.handleSearch(this.state.search, 0));
  }
  handlePartyChange(party, query) {
    this.setState({ search: '' }, () => console.log(this.state));
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
      <div>
        <h1 className="row">Search Through Members of the US Government</h1>
        <div className="right-push">
          <TextField
            onChange={this.handleChange.bind(this)}
            floatingLabelText="Search Here"
            hintText="Ex Chuck Schumer or New York"
            floatingLabelFixed={true}
            className="row"
            style={style}
            ref={i => this.searchbar = i}
            value={this.state.search}
          />
          <RadioButtonGroup
            name="searchType"
            defaultSelected="state"
            className="row"
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
          <div className="row">
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
          </div>
          <FlatButton
            icon={<ArrowBack />}
            onClick={() => this.props.paginate(this.state.search, -(PAGINATE_BY))}
            disabled={this.shouldPaginate('backwards', this.props.display)}
          />
          <FlatButton
            icon={<ArrowForward />}
            onClick={() => this.props.paginate(this.state.search, PAGINATE_BY)}
            disabled={this.shouldPaginate('forwards', this.props.display)}
          />
        </div>
      </div>
    );
  }
}

export default Search;
